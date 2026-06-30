import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import ItemsPage from './pages/ItemsPage';
import ChildrenListPage from './pages/ChildrenListPage';
import AddChildPage from './pages/AddChildPage';
import logo from './assets/logo.png';
import { useTranslation } from './context/LanguageContext';
import FigmaApp from './app/App';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] font-sans text-gray-900">
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 py-6 sm:py-8">
        <Routes>
          <Route path="/register" element={<AddChildPage />} />
          <Route path="/children" element={<ChildrenListPage />} />
          <Route path="/items" element={<ItemsPage />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FigmaApp />} />
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
