
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={onNavigateHome} className="flex items-center space-x-2 outline-none">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">V</div>
          <span className={`text-2xl font-serif font-bold text-slate-900`}>Vedic Expert</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-medium text-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
