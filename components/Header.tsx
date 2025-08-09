
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-brand-dark' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-brand-purple'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className={`text-3xl font-black tracking-tight ${textColor}`}>
            UmbraShare
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className={`font-semibold capitalize text-sm transition-colors hover:text-brand-purple-light ${textColor}`}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
             <button className={`font-bold py-2 px-4 rounded-md flex items-center transition-colors ${textColor}`}>
                <span>EN</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
