import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { UserPlus, Users, Package, Menu, X } from 'lucide-react';
import ItemsPage from './pages/ItemsPage';
import ChildrenListPage from './pages/ChildrenListPage';
import AddChildPage from './pages/AddChildPage';
import logo from './assets/logo.png';
import { useTranslation } from './context/LanguageContext';
import './index.css';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  const { language, setLanguage, t } = useTranslation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 20px 24px', gap: '12px', borderBottom: '1px solid var(--border)', position: 'relative' }}>
          <button className="mobile-close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
          <img src={logo} alt="Kanta Charitable Trust Logo" style={{ width: '96px', height: 'auto' }} />
        </div>


        <nav className="sidebar-nav">
          <Link to="/" className={`nav-item ${isActive('/')}`} onClick={() => setIsOpen(false)}>
            <UserPlus size={16} />
            {t('nav.registration')}
          </Link>
          <div className="divider" style={{ margin: '12px 0' }}></div>
          <div style={{ padding: '0 12px', fontSize: '11px', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
            Directory
          </div>
          <Link to="/directory" className={`nav-item ${isActive('/directory')}`} onClick={() => setIsOpen(false)}>
            <Users size={16} />
            {t('nav.directory')}
          </Link>
        </nav>
      </aside>
    </>
  );
};

const FloatingLanguageSelector = () => {
  const { language, setLanguage } = useTranslation();
  
  return (
    <div style={{ position: 'fixed', top: '24px', right: '32px', zIndex: 100 }} className="desktop-lang-selector">
      <select 
        className="form-control" 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        style={{ cursor: 'pointer', padding: '8px 12px', background: 'var(--surface)', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}
      >
        <option value="mr">मराठी</option>
        <option value="hi">हिंदी</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

const MobileLanguageSelector = () => {
  const { language, setLanguage } = useTranslation();
  
  return (
    <div style={{ marginLeft: 'auto' }}>
      <select 
        className="form-control" 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        style={{ cursor: 'pointer', padding: '4px 8px', fontSize: '12px', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', width: 'auto', minWidth: '80px' }}
      >
        <option value="mr">मराठी</option>
        <option value="hi">हिंदी</option>
        <option value="en">Eng</option>
      </select>
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app-layout">
        <FloatingLanguageSelector />
        <div className="mobile-topbar">
          {/* <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button> */}
          <img src={logo} alt="Logo" className="mobile-topbar-logo" style={{ marginLeft: '16px' }} />
          <MobileLanguageSelector />
        </div>
        
        <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AddChildPage />} />
            <Route path="/directory" element={<ChildrenListPage />} />
            <Route path="/items" element={<ItemsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
