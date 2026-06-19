import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import logoImage from '../../imports/png_kct.png';

export default function Navigation() {
  const { t, language, setLanguage } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.programs'), id: 'programs' },
    { name: t('nav.gallery'), id: 'gallery' },
    { name: t('nav.events'), id: 'events' },
    { name: t('nav.volunteer'), id: 'volunteer' },
    { name: t('nav.donate'), id: 'donate' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <img
              src={logoImage}
              alt="Kanta Charitable Trust Logo"
              className="h-12 lg:h-16 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden md:block text-left">
              <div className="text-[#2E67B2] font-bold text-lg lg:text-xl">
                {t('hero.title')}
              </div>
              <div className="text-[#28A34A] text-xs lg:text-sm">
                Creating Smiles, Changing Worlds
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#1F2937] hover:text-[#2E67B2] font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2E67B2] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <a
              href="/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-1.5 bg-gradient-to-r from-[#28A34A] to-[#2E67B2] text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all inline-block"
            >
              {t('nav.form')}
            </a>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-2 py-1 bg-white border border-[#2E67B2]/50 hover:border-[#2E67B2] rounded-md text-[#2E67B2] text-xs font-semibold outline-none cursor-pointer transition-colors"
            >
              <option value="mr">मराठी</option>
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#2E67B2]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-[#1F2937] hover:text-[#2E67B2] hover:bg-[#F8FAFC] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[calc(100%-2rem)] mx-4 my-2 text-center px-4 py-2 bg-gradient-to-r from-[#28A34A] to-[#2E67B2] text-white rounded-full font-semibold hover:shadow-md transition-all"
            >
              {t('nav.form')}
            </a>
            <div className="px-4 py-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-2 py-1.5 bg-white border border-[#2E67B2]/50 hover:border-[#2E67B2] rounded-md text-[#2E67B2] text-sm font-semibold outline-none cursor-pointer transition-colors"
              >
                <option value="mr">मराठी</option>
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
