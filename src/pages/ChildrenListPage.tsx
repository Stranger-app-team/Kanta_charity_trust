import React, { useEffect, useState } from 'react';
import { getChildren } from '../services/api';
import { Search, X } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const ChildrenListPage = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useTranslation();
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChild, setSelectedChild] = useState(null);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const result = await getChildren();
        if (result.success) {
          setChildren(result.data);
        }
      } catch (err) {
        setError('Failed to fetch children data.');
      } finally {
        setLoading(false);
      }
    };
    fetchChildren();
  }, []);

  const filteredChildren = children.filter(child => {
    const fullName = `${child.firstName} ${child.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || 
           (child.guardianName && child.guardianName.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Children Directory</h1>
          <p className="text-sm text-gray-500">View and manage all registered children and their help.</p>
        </div>

        {/* Language and Close controls */}
        <div className="flex items-center self-end sm:self-auto gap-3">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="cursor-pointer px-3 py-1.5 text-sm font-medium bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E67B2] shadow-sm"
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
            <option value="hi">हिंदी</option>
          </select>
          <button
            onClick={() => navigate('/')}
            className="p-1 text-red-500 hover:text-red-700 transition-colors"
            aria-label="Close directory"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {error && <div className="p-4 mb-6 rounded-md bg-red-50 text-red-800 border border-red-200 text-sm">{error}</div>}

      <div className="relative mb-6 max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2] shadow-sm transition-shadow"
          placeholder="Search directory..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading directory...</div>
        ) : filteredChildren.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No records found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                <tr>
                  <th className="px-6 py-4">Child</th>
                  <th className="px-6 py-4">Age / DOB</th>
                  <th className="px-6 py-4">Guardian Details</th>
                  <th className="px-6 py-4">Help</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredChildren.map((child) => (
                  <tr key={child._id} onClick={() => setSelectedChild(child)} className="hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{child.firstName} {child.lastName}</div>
                      <div className="text-xs text-gray-500 mt-1">{child.gender}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">{new Date(child.dateOfBirth).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">{child.guardianName}</div>
                      <div className="text-xs text-gray-500 mt-1">{child.contactNumber}</div>
                    </td>
                    <td className="px-6 py-4">
                      {child.allocations && child.allocations.length > 0 ? (
                        <div className="flex flex-col gap-2">
                          {child.allocations.map((alloc, idx) => (
                            <div key={alloc._id || idx} className="flex items-center gap-2">
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                                {alloc.quantity && alloc.quantity > 1 ? `${alloc.quantity}x ` : ''}{alloc.item?.name || alloc.item || 'Unknown'}
                              </span>
                              <span className="text-xs text-gray-400">
                                {new Date(alloc.date).toLocaleDateString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400 italic">None</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Child Details Modal */}
      {selectedChild && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm p-4" onClick={() => setSelectedChild(null)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 lg:p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setSelectedChild(null)}>
              <X size={20} />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {selectedChild.firstName} {selectedChild.lastName}
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Full Details & History
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Date of Birth</h3>
                <p className="font-medium text-gray-900">{new Date(selectedChild.dateOfBirth).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Gender</h3>
                <p className="font-medium text-gray-900">{selectedChild.gender}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Guardian</h3>
                <p className="font-medium text-gray-900">{selectedChild.guardianName}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Contact</h3>
                <p className="font-medium text-gray-900">{selectedChild.contactNumber}</p>
              </div>
              <div className="sm:col-span-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</h3>
                <p className="font-medium text-gray-900">{selectedChild.address || 'N/A'}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Education Level</h3>
                <p className="font-medium text-gray-900">{selectedChild.educationLevel || 'N/A'}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Medical Conditions</h3>
                <p className="font-medium text-gray-900">{selectedChild.medicalConditions || 'None'}</p>
              </div>
            </div>

            <div className="h-px bg-gray-200 w-full my-8"></div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Help Provided</h3>
            {selectedChild.allocations && selectedChild.allocations.length > 0 ? (
              <div className="flex flex-col gap-3">
                {selectedChild.allocations.map((alloc, idx) => (
                  <div key={alloc._id || idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white text-gray-800 border border-gray-200 shadow-sm">
                        {alloc.quantity && alloc.quantity > 1 ? `${alloc.quantity}x ` : ''}{alloc.item?.name || alloc.item || 'Unknown'}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">
                      {new Date(alloc.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">No help recorded.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenListPage;
