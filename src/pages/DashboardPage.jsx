import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, UserPlus, PackagePlus } from 'lucide-react';
import { getChildren } from '../services/api';

const DashboardPage = () => {
  const [stats, setStats] = useState({ childrenCount: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getChildren();
        if (data.success) {
          setStats({ childrenCount: data.count || 0 });
        }
      } catch (error) {
        console.error('Failed to load dashboard stats', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Welcome to the Trust Portal</h1>
        <p className="text-muted mt-2">Manage children registrations and allocations easily.</p>
      </div>

      <div className="data-grid mt-4">
        <div className="card grid-card">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%' }}>
              <Users size={32} color="var(--primary)" />
            </div>
            <div>
              <h2 className="grid-title" style={{ marginBottom: 0 }}>{stats.childrenCount}</h2>
              <p className="text-muted">Total Children Registered</p>
            </div>
          </div>
          <Link to="/children" className="btn btn-outline" style={{ marginTop: 'auto', textAlign: 'center' }}>
            View All Children
          </Link>
        </div>

        <div className="card grid-card">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
              <UserPlus size={32} color="var(--success)" />
            </div>
            <div>
              <h2 className="grid-title" style={{ marginBottom: 0 }}>Register Child</h2>
              <p className="text-muted">Add a new record and allocate help</p>
            </div>
          </div>
          <Link to="/children/new" className="btn btn-primary" style={{ marginTop: 'auto', textAlign: 'center' }}>
            Register New Child
          </Link>
        </div>

        <div className="card grid-card">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%' }}>
              <PackagePlus size={32} color="var(--accent)" />
            </div>
            <div>
              <h2 className="grid-title" style={{ marginBottom: 0 }}>Help Items</h2>
              <p className="text-muted">Manage available help categories</p>
            </div>
          </div>
          <Link to="/items" className="btn btn-outline" style={{ marginTop: 'auto', textAlign: 'center' }}>
            Manage Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
