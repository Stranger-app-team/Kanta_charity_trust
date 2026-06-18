import React, { useEffect, useState } from 'react';
import { getChildren } from '../services/api';
import { Search, X } from 'lucide-react';

const ChildrenListPage = () => {
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
    <div>
      <h1 className="page-title">Children Directory</h1>
      <p className="page-subtitle">View and manage all registered children and their help.</p>

      {error && <div className="alert alert-error">{error}</div>}

      <div style={{ position: 'relative', marginBottom: '24px', maxWidth: '400px' }}>
        <Search size={16} color="var(--text-light)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
        <input
          type="text"
          className="form-control"
          placeholder="Search directory..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ paddingLeft: '36px' }}
        />
      </div>

      <div className="form-panel" style={{ padding: 0, overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '32px', color: 'var(--text-muted)' }}>Loading directory...</div>
        ) : filteredChildren.length === 0 ? (
          <div style={{ padding: '32px', color: 'var(--text-muted)' }}>No records found.</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Child</th>
                  <th>Age / DOB</th>
                  <th>Guardian Details</th>
                  <th>Help</th>
                </tr>
              </thead>
              <tbody>
                {filteredChildren.map((child) => (
                  <tr key={child._id} onClick={() => setSelectedChild(child)} style={{ cursor: 'pointer' }}>
                    <td>
                      <div style={{ fontWeight: 500, color: 'var(--text-main)' }}>{child.firstName} {child.lastName}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{child.gender}</div>
                    </td>
                    <td>
                      <div style={{ color: 'var(--text-main)' }}>{new Date(child.dateOfBirth).toLocaleDateString()}</div>
                    </td>
                    <td>
                      <div style={{ color: 'var(--text-main)' }}>{child.guardianName}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{child.contactNumber}</div>
                    </td>
                    <td>
                      {child.allocations && child.allocations.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {child.allocations.map((alloc, idx) => (
                            <div key={alloc._id || idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="badge">
                                {alloc.quantity && alloc.quantity > 1 ? `${alloc.quantity}x ` : ''}{alloc.item?.name || alloc.item || 'Unknown'}
                              </span>
                              <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                                {new Date(alloc.date).toLocaleDateString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--text-light)', fontStyle: 'italic' }}>None</span>
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
        <div className="modal-overlay" onClick={() => setSelectedChild(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedChild(null)}>
              <X size={20} />
            </button>
            
            <h2 className="section-title" style={{ fontSize: '20px', marginBottom: '4px' }}>
              {selectedChild.firstName} {selectedChild.lastName}
            </h2>
            <p className="section-desc" style={{ marginBottom: '24px' }}>
              Full Details & History
            </p>

            <div className="split-layout" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <h3 className="form-label" style={{ color: 'var(--text-muted)' }}>Date of Birth</h3>
                <p style={{ fontWeight: 500 }}>{new Date(selectedChild.dateOfBirth).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="form-label" style={{ color: 'var(--text-muted)' }}>Gender</h3>
                <p style={{ fontWeight: 500 }}>{selectedChild.gender}</p>
              </div>
              <div>
                <h3 className="form-label" style={{ color: 'var(--text-muted)' }}>Guardian</h3>
                <p style={{ fontWeight: 500 }}>{selectedChild.guardianName}</p>
              </div>
              <div>
                <h3 className="form-label" style={{ color: 'var(--text-muted)' }}>Contact</h3>
                <p style={{ fontWeight: 500 }}>{selectedChild.contactNumber}</p>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <h3 className="form-label" style={{ color: 'var(--text-muted)' }}>Address</h3>
                <p style={{ fontWeight: 500 }}>{selectedChild.address || 'N/A'}</p>
              </div>
              <div>
                <h3 className="form-label" style={{ color: 'var(--text-muted)' }}>Education Level</h3>
                <p style={{ fontWeight: 500 }}>{selectedChild.educationLevel || 'N/A'}</p>
              </div>
              <div>
                <h3 className="form-label" style={{ color: 'var(--text-muted)' }}>Medical Conditions</h3>
                <p style={{ fontWeight: 500 }}>{selectedChild.medicalConditions || 'None'}</p>
              </div>
            </div>

            <div className="divider" style={{ margin: '24px 0' }}></div>

            <h3 className="section-title" style={{ marginBottom: '16px' }}>Help</h3>
            {selectedChild.allocations && selectedChild.allocations.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {selectedChild.allocations.map((alloc, idx) => (
                  <div key={alloc._id || idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'var(--surface-hover)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className="badge" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                        {alloc.quantity && alloc.quantity > 1 ? `${alloc.quantity}x ` : ''}{alloc.item?.name || alloc.item || 'Unknown'}
                      </span>
                    </div>
                    <span style={{ fontSize: '13px', color: 'var(--text-light)', fontWeight: 500 }}>
                      {new Date(alloc.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontStyle: 'italic' }}>No help recorded.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenListPage;
