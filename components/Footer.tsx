
import React from 'react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-lg">V</div>
              <span className="text-xl font-serif font-bold text-white">Vedic Expert PU College Shivamogga</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering the next generation of engineers and doctors with the speed of Vedic mathematics and the precision of modern science.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.label}><a href={item.href} className="hover:text-orange-500 transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Programs</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#courses" className="hover:text-orange-500 transition-colors">Class 8 Foundation</a></li>
              <li><a href="#courses" className="hover:text-orange-500 transition-colors">Class 9 JEE/NEET</a></li>
              <li><a href="#courses" className="hover:text-orange-500 transition-colors">Class 10 Advanced</a></li>
              <li><a href="#courses" className="hover:text-orange-500 transition-colors">NTSE Preparation</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Newsletter</h5>
            <p className="text-sm mb-4">Get academic insights and exam updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 text-sm w-full outline-none focus:border-orange-600"
              />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2026 Vedic Expert Education Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
