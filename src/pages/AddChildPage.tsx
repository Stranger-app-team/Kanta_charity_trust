import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerChild } from '../services/api';
import { Plus, Trash2, ArrowRight, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTranslation } from '../context/LanguageContext';

const AddChildPage = () => {
  const { t, language, setLanguage } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAdditional, setShowAdditional] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'Male',
    guardianName: '',
    contactNumber: '',
    villageName: '',
    occupation: '',
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

    const cleanedAllocations = formData.allocations
      .filter(a => a.item)
      .map(a => ({
        item: a.item,
        quantity: parseInt(a.quantity, 10) || 1
      }));
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
          villageName: '',
          occupation: '',
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
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Kanta Charitable Trust Logo" className="w-16 h-auto" />
          <div>
            <h1 className="text-3xl font-extrabold text-[#2E67B2] mb-1">{t('app.title')}</h1>
            <p className="text-sm font-medium text-gray-500">{t('form.subtitle')}</p>
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
      {success && <div className="p-4 mb-6 rounded-md bg-green-50 text-green-800 border border-green-200 text-sm">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Personal Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <div>
            <h2 className="text-lg font-bold text-[#2E67B2] mb-1">{t('section.personal')}</h2>
            <p className="text-sm text-gray-500">{t('section.personal.desc')}</p>
          </div>
          <div>
            <div className={`bg-white border border-gray-100 border-t-4 border-t-[#2E67B2] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${!showAdditional ? 'mb-3' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">{t('label.firstName')}</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.firstName')} required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">{t('label.lastName')}</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.lastName')} required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">{t('label.contactNumber')}</label>
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.contactNumber')} required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">{t('label.village')}</label>
                  <input type="text" name="villageName" value={formData.villageName} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.village')} required />
                </div>
              </div>
            </div>

            {!showAdditional && (
              <div className="flex justify-center">
                <button 
                  type="button" 
                  className="px-4 py-2 text-xs font-semibold text-[#2E67B2] bg-[#EFF6FF] hover:bg-[#DBEAFE] rounded-md transition-colors flex items-center shadow-sm"
                  onClick={() => setShowAdditional(true)}
                >
                  <Plus size={14} className="mr-1" /> {t('btn.additionalInfo')}
                </button>
              </div>
            )}
          </div>
        </div>

        {showAdditional && (
          <>
            <div className="h-px bg-gray-200 w-full"></div>

            {/* Extended Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              <div>
                <h2 className="text-lg font-bold text-[#28A34A] mb-1">{t('section.extended')}</h2>
                <p className="text-sm text-gray-500">{t('section.extended.desc')}</p>
              </div>
              <div className="bg-white border border-gray-100 border-t-4 border-t-[#28A34A] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">{t('label.dob')}</label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">{t('label.gender')}</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]">
                      <option value="Male">{t('gender.male')}</option>
                      <option value="Female">{t('gender.female')}</option>
                      <option value="Other">{t('gender.other')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              <div>
                <h2 className="text-lg font-bold text-[#F59A34] mb-1">{t('section.contact')}</h2>
                <p className="text-sm text-gray-500">{t('section.contact.desc')}</p>
              </div>
              <div className="bg-white border border-gray-100 border-t-4 border-t-[#F59A34] rounded-xl p-6 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">{t('label.guardianName')}</label>
                    <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.guardianName')} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">{t('label.occupation')}</label>
                    <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.occupation')} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">{t('label.address')}</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.address')} />
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200 w-full"></div>

            {/* Additional Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              <div>
                <h2 className="text-lg font-bold text-[#E34298] mb-1">{t('section.additional')}</h2>
                <p className="text-sm text-gray-500">{t('section.additional.desc')}</p>
              </div>
              <div className="bg-white border border-gray-100 border-t-4 border-t-[#E34298] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">{t('label.educationLevel')}</label>
                    <input type="text" name="educationLevel" value={formData.educationLevel} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.educationLevel')} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">{t('label.medicalConditions')}</label>
                    <input type="text" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]" placeholder={t('ph.medicalConditions')} />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200 w-full"></div>

            {/* Allocations Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
              <div>
                <h2 className="text-lg font-bold text-[#2E67B2] mb-1">{t('section.help')}</h2>
                <p className="text-sm text-gray-500">{t('section.help.desc')}</p>
              </div>
              <div className="bg-white border border-gray-100 border-t-4 border-t-[#2E67B2] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                {formData.allocations.length === 0 ? (
                  <p className="text-sm text-gray-500 mb-4">{t('msg.noHelp')}</p>
                ) : (
                  <div className="flex flex-col gap-3 mb-4">
                    {formData.allocations.map((alloc, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-end gap-3 p-4 border border-gray-100 bg-gray-50 rounded-lg">
                        <div className="flex flex-col gap-1 flex-1 w-full">
                          <label className="text-xs font-medium text-gray-700">{t('label.item')}</label>
                          <input 
                            type="text"
                            value={alloc.item} 
                            onChange={(e) => handleAllocationChange(index, 'item', e.target.value)} 
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]"
                            placeholder={t('ph.item')}
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1 w-full sm:w-24">
                          <label className="text-xs font-medium text-gray-700">{t('label.quantity')}</label>
                          <input 
                            type="number" 
                            value={alloc.quantity || 1} 
                            onChange={(e) => handleAllocationChange(index, 'quantity', e.target.value)} 
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]"
                            min="1"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1 w-full sm:w-40">
                          <label className="text-xs font-medium text-gray-700">{t('label.date')}</label>
                          <input 
                            type="date" 
                            value={alloc.date} 
                            onChange={(e) => handleAllocationChange(index, 'date', e.target.value)} 
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2E67B2]"
                            required
                          />
                        </div>
                        <button type="button" onClick={() => handleRemoveAllocation(index)} className="p-2 text-gray-400 hover:text-red-500 transition-colors w-full sm:w-auto flex justify-center mt-2 sm:mt-0">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <button type="button" onClick={handleAddAllocation} className="px-4 py-2 text-sm font-semibold text-[#2E67B2] bg-[#EFF6FF] border border-[#BFDBFE] rounded-md hover:bg-[#DBEAFE] transition-colors flex items-center gap-2">
                  <Plus size={16} /> {t('btn.addHelp')}
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button type="button" className="px-5 py-2 text-sm font-semibold text-gray-600 bg-gray-100 border border-gray-200 hover:text-gray-900 hover:bg-gray-200 rounded-full transition-colors shadow-sm" onClick={() => setShowAdditional(false)}>
                {t('btn.hideAdditionalInfo')}
              </button>
            </div>
          </>
        )}

        {/* Submit Actions */}
        <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-100">
          <button type="submit" className="px-6 py-2.5 bg-gradient-to-r from-[#28A34A] to-[#2E67B2] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed" disabled={isSubmitting}>
            {isSubmitting ? t('btn.submitting') : t('btn.submit')}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddChildPage;
