import React, { useEffect, useState } from 'react';
import { getItems, createItem } from '../services/api';
import { Package } from 'lucide-react';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({ name: '', description: '', quantity: 1 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchItems = async () => {
    try {
      const result = await getItems();
      if (result.success) {
        setItems(result.data);
      }
    } catch (err) {
      setError('Failed to fetch items.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    
    try {
      const result = await createItem(formData);
      if (result && result.success !== false) {
        setSuccess('Item registered successfully.');
        setFormData({ name: '', description: '', quantity: 1 });
        fetchItems();
      } else {
        setError(result.message || 'Failed to register item.');
      }
    } catch (err) {
      setError('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="page-title">Item Registration</h1>
      <p className="page-subtitle">Configure the items of help that can be allocated to children.</p>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="split-layout">
        <div>
          <h2 className="section-title">New Item</h2>
          <p className="section-desc">Register a new type of help (e.g. Financial, Books).</p>
        </div>
        <div className="form-panel">
          <form onSubmit={handleSubmit}>
            <div className="form-grid full">
              <div className="form-group">
                <label className="form-label">Item Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. Medical Supplies"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Brief explanation of what this covers"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="form-control"
                  min="1"
                  required
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Register Item'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="divider"></div>

      <div className="split-layout">
        <div>
          <h2 className="section-title">Active Items</h2>
          <p className="section-desc">All configured help items available for allocation.</p>
        </div>
        <div className="form-panel" style={{ padding: 0, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: '32px', color: 'var(--text-muted)' }}>Loading...</div>
          ) : items.length === 0 ? (
            <div style={{ padding: '32px', color: 'var(--text-muted)' }}>No items registered yet.</div>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item._id}>
                    <td style={{ fontWeight: 500, color: 'var(--text-main)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Package size={14} color="var(--text-light)" />
                        {item.name}
                      </div>
                    </td>
                    <td style={{ color: 'var(--text-muted)' }}>{item.description}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{item.quantity || 1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
