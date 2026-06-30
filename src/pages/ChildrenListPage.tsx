import React, { useEffect, useState } from 'react';
import { getChildren } from '../services/api';
import { Search, X } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const ChildrenListPage = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useTranslation();
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
        <div className="flex items-center gap-4">
          <img src={logo} alt="Kanta Charitable Trust Logo" className="w-16 h-auto" />
          <div>
            <h1 className="text-3xl font-extrabold text-[#2E67B2] mb-1">{t('app.title') || 'Children Directory'}</h1>
            <p className="text-sm font-medium text-gray-500">View and manage all registered children and their help.</p>
          </div>
        </div>

        {/* Language controls */}
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
        </div>
      </div>

      {error && <div className="p-4 mb-6 rounded-md bg-red-50 text-red-800 border border-red-200 text-sm">{error}</div>}

      <div className="relative mb-6 max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2] shadow-sm transition-shadow"
          placeholder="Search Children..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading directory...</div>
          ) : filteredChildren.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No records found.</div>
          ) : (
            <div className="overflow-y-auto max-h-[calc(100vh-230px)]">
              <table className="w-full text-left text-sm whitespace-nowrap relative">
                <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold sticky top-0 z-10 shadow-sm">
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
                      <div className="text-gray-900">{child.dateOfBirth ? new Date(child.dateOfBirth).toLocaleDateString() : 'NA'}</div>
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
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 lg:p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setSelectedChild(null)}>
              <X size={20} />
            </button>
            
            <div className="space-y-8 mt-4">
              
              {/* Personal Details Section */}
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                <div>
                  <h2 className="text-lg font-bold text-[#2E67B2] mb-1">{t('section.personal') || 'Personal Details'}</h2>
                  <p className="text-sm text-gray-500">{t('section.personal.desc') || 'Basic information about the child'}</p>
                </div>
                <div>
                  <div className="bg-white border border-gray-100 border-t-4 border-t-[#2E67B2] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">{t('label.firstName') || 'First Name'}</label>
                        <input type="text" value={selectedChild.firstName || ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">{t('label.guardianName') || 'Guardian Name'}</label>
                        <input type="text" value={selectedChild.guardianName || ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">{t('label.lastName') || 'Last Name'}</label>
                        <input type="text" value={selectedChild.lastName || ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">{t('label.contactNumber') || 'Contact Number'}</label>
                        <input type="text" value={selectedChild.contactNumber || ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">{t('label.village') || 'Village'}</label>
                        <input type="text" value={selectedChild.villageName || ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">{t('label.occupation') || 'Occupation'}</label>
                        <input type="text" value={selectedChild.occupation || ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full"></div>

              {/* Extended Details Section */}
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                <div>
                  <h2 className="text-lg font-bold text-[#28A34A] mb-1">{t('section.extended') || 'Extended Details'}</h2>
                  <p className="text-sm text-gray-500">{t('section.extended.desc') || 'Other basic information'}</p>
                </div>
                <div className="bg-white border border-gray-100 border-t-4 border-t-[#28A34A] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">{t('label.dob') || 'Date of Birth'}</label>
                      <input type="date" value={selectedChild.dateOfBirth ? new Date(selectedChild.dateOfBirth).toISOString().split('T')[0] : ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">{t('label.gender') || 'Gender'}</label>
                      <input type="text" value={selectedChild.gender === 'Male' ? (t('gender.male') || 'Male') : selectedChild.gender === 'Female' ? (t('gender.female') || 'Female') : (t('gender.other') || 'Other')} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <label className="text-sm font-medium text-gray-700">{t('label.address') || 'Full Address'}</label>
                    <input type="text" value={selectedChild.address || ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full"></div>

              {/* Additional Info Section */}
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                <div>
                  <h2 className="text-lg font-bold text-[#E34298] mb-1">{t('section.additional') || 'Additional Info'}</h2>
                  <p className="text-sm text-gray-500">{t('section.additional.desc') || 'Educational and medical records'}</p>
                </div>
                <div className="bg-white border border-gray-100 border-t-4 border-t-[#E34298] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">{t('label.educationLevel') || 'Education Level'}</label>
                      <input type="text" value={selectedChild.educationLevel || ''} readOnly className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm cursor-not-allowed text-gray-600 focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenListPage;
