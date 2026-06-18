import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerChild } from '../services/api';
import { Plus, Trash2, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTranslation } from '../context/LanguageContext';

const AddChildPage = () => {
  const { t } = useTranslation();
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
        setSuccess(t('msg.success'));
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
        setError(result.message || t('msg.errorSubmit'));
      }
    } catch (err) {
      setError(t('msg.errorNetwork'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
        <img src={logo} alt="Kanta Charitable Trust Logo" style={{ width: '64px', height: 'auto' }} />
        <div>
          <h1 className="page-title" style={{ marginBottom: '4px' }}>{t('app.title')}</h1>
          <p className="page-subtitle" style={{ marginBottom: 0 }}>{t('form.subtitle')}</p>
        </div>
      </div>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        
        {/* Personal Details Section */}
        <div className="split-layout">
          <div>
            <h2 className="section-title">{t('section.personal')}</h2>
            <p className="section-desc">{t('section.personal.desc')}</p>
          </div>
          <div className="form-panel">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">{t('label.firstName')}</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" placeholder={t('ph.firstName')} required />
              </div>
              <div className="form-group">
                <label className="form-label">{t('label.lastName')}</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" placeholder={t('ph.lastName')} required />
              </div>
              <div className="form-group">
                <label className="form-label">{t('label.dob')}</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">{t('label.gender')}</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="form-control" required>
                  <option value="Male">{t('gender.male')}</option>
                  <option value="Female">{t('gender.female')}</option>
                  <option value="Other">{t('gender.other')}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Contact Information Section */}
        <div className="split-layout">
          <div>
            <h2 className="section-title">{t('section.contact')}</h2>
            <p className="section-desc">{t('section.contact.desc')}</p>
          </div>
          <div className="form-panel">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">{t('label.guardianName')}</label>
                <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} className="form-control" placeholder={t('ph.guardianName')} required />
              </div>
              <div className="form-group">
                <label className="form-label">{t('label.contactNumber')}</label>
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-control" placeholder={t('ph.contactNumber')} required />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">{t('label.address')}</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" placeholder={t('ph.address')} required />
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Additional Info Section */}
        <div className="split-layout">
          <div>
            <h2 className="section-title">{t('section.additional')}</h2>
            <p className="section-desc">{t('section.additional.desc')}</p>
          </div>
          <div className="form-panel">
            <div className="form-grid">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">{t('label.educationLevel')}</label>
                <input type="text" name="educationLevel" value={formData.educationLevel} onChange={handleChange} className="form-control" placeholder={t('ph.educationLevel')} />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">{t('label.medicalConditions')}</label>
                <input type="text" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} className="form-control" placeholder={t('ph.medicalConditions')} />
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Allocations Section */}
        <div className="split-layout">
          <div>
            <h2 className="section-title">{t('section.help')}</h2>
            <p className="section-desc">{t('section.help.desc')}</p>
          </div>
          <div className="form-panel">
            {formData.allocations.length === 0 ? (
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>{t('msg.noHelp')}</p>
            ) : (
              <div>
                {formData.allocations.map((alloc, index) => (
                  <div key={index} className="allocation-row">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">{t('label.item')}</label>
                      <input 
                        type="text"
                        value={alloc.item} 
                        onChange={(e) => handleAllocationChange(index, 'item', e.target.value)} 
                        className="form-control"
                        placeholder={t('ph.item')}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0, width: '100px' }}>
                      <label className="form-label">{t('label.quantity')}</label>
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
                      <label className="form-label">{t('label.date')}</label>
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
              <Plus size={16} /> {t('btn.addHelp')}
            </button>
          </div>
        </div>

        {/* Submit Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '48px' }}>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? t('btn.submitting') : t('btn.submit')}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddChildPage;
