import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerChild } from '../services/api';
import { Plus, Trash2, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const AddChildPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'Male',
    guardianName: '',
    contactNumber: '',
    address: '',
    educationLevel: '',
    medicalConditions: '',
    allocations: []
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAllocation = () => {
    setFormData({
      ...formData,
      allocations: [...formData.allocations, { date: new Date().toISOString().split('T')[0], item: '', quantity: 1 }]
    });
  };

  const handleRemoveAllocation = (index) => {
    const newAllocations = [...formData.allocations];
    newAllocations.splice(index, 1);
    setFormData({ ...formData, allocations: newAllocations });
  };

  const handleAllocationChange = (index, field, value) => {
    const newAllocations = [...formData.allocations];
    newAllocations[index][field] = value;
    setFormData({ ...formData, allocations: newAllocations });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    const cleanedAllocations = formData.allocations.filter(a => a.item && a.date);
    const payload = { ...formData, allocations: cleanedAllocations };

    try {
      const result = await registerChild(payload);
      if (result.success) {
        setSuccess('Form submitted successfully.');
        // Reset the form instead of redirecting to the hidden directory
        setFormData({
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          gender: 'Male',
          guardianName: '',
          contactNumber: '',
          address: '',
          educationLevel: '',
          medicalConditions: '',
          allocations: []
        });
        setTimeout(() => {
          setSuccess('');
        }, 3000);
      } else {
        setError(result.message || 'Failed to submit form.');
      }
    } catch (err) {
      setError('Network error occurred while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
        <img src={logo} alt="Kanta Charitable Trust Logo" style={{ width: '64px', height: 'auto' }} />
        <div>
          <h1 className="page-title" style={{ marginBottom: '4px' }}>Child Application Form</h1>
          <p className="page-subtitle" style={{ marginBottom: 0 }}>Fill out personal details and assign initial help items.</p>
        </div>
      </div>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        
        {/* Personal Details Section */}
        <div className="split-layout">
          <div>
            <h2 className="section-title">Personal Details</h2>
            <p className="section-desc">Basic information about the child.</p>
          </div>
          <div className="form-panel">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">First name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" placeholder="Jane" required />
              </div>
              <div className="form-group">
                <label className="form-label">Last name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" placeholder="Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Date of birth</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="form-control" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Contact Information Section */}
        <div className="split-layout">
          <div>
            <h2 className="section-title">Contact & Guardian</h2>
            <p className="section-desc">Who to contact and where they reside.</p>
          </div>
          <div className="form-panel">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Guardian name</label>
                <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} className="form-control" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Contact number</label>
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-control" placeholder="+1 (555) 000-0000" required />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Full Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" placeholder="123 Main St, Apt 4B" required />
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Additional Info Section */}
        <div className="split-layout">
          <div>
            <h2 className="section-title">Additional Info</h2>
            <p className="section-desc">Educational background and medical notes.</p>
          </div>
          <div className="form-panel">
            <div className="form-grid">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Education level</label>
                <input type="text" name="educationLevel" value={formData.educationLevel} onChange={handleChange} className="form-control" placeholder="E.g. Grade 5" />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Medical conditions</label>
                <input type="text" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} className="form-control" placeholder="None" />
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Allocations Section */}
        <div className="split-layout">
          <div>
            <h2 className="section-title">Initial Help</h2>
            <p className="section-desc">Assign help categories right away.</p>
          </div>
          <div className="form-panel">
            {formData.allocations.length === 0 ? (
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>No help added yet.</p>
            ) : (
              <div>
                {formData.allocations.map((alloc, index) => (
                  <div key={index} className="allocation-row">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Item</label>
                      <input 
                        type="text"
                        value={alloc.item} 
                        onChange={(e) => handleAllocationChange(index, 'item', e.target.value)} 
                        className="form-control"
                        placeholder="Item name"
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0, width: '100px' }}>
                      <label className="form-label">Quantity</label>
                      <input 
                        type="number" 
                        value={alloc.quantity || 1} 
                        onChange={(e) => handleAllocationChange(index, 'quantity', e.target.value)} 
                        className="form-control"
                        min="1"
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Date</label>
                      <input 
                        type="date" 
                        value={alloc.date} 
                        onChange={(e) => handleAllocationChange(index, 'date', e.target.value)} 
                        className="form-control"
                        required
                      />
                    </div>
                    <button type="button" onClick={() => handleRemoveAllocation(index)} className="btn btn-ghost btn-icon">
                      <Trash2 size={16} color="var(--text-muted)" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <button type="button" onClick={handleAddAllocation} className="btn btn-secondary">
              <Plus size={16} /> Add help
            </button>
          </div>
        </div>

        {/* Submit Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '48px' }}>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Complete Form'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddChildPage;
