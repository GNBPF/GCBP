import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group z-50">
          <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${scrolled ? 'bg-ngo-navy text-white' : 'bg-white text-ngo-navy'}`}>
            <span className="font-serif font-bold text-lg md:text-xl">G</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-base md:text-lg leading-none tracking-tight transition-colors duration-300 ${scrolled ? 'text-ngo-navy' : 'text-white'}`}>
              GCBP
            </span>
            <span className={`text-[9px] md:text-[10px] uppercase tracking-widest font-sans transition-colors duration-300 ${scrolled ? 'text-ngo-gray' : 'text-white/80'}`}>
              Global Collective
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {NAV_ITEMS.map((item) => {
             const isAnchor = item.href.startsWith('#');
             const isActive = location.pathname === item.href;
             const baseClasses = `text-sm font-sans font-medium transition-colors duration-300 hover:text-ngo-accent ${
                  scrolled ? 'text-ngo-navy' : 'text-white shadow-sm'
                } ${isActive ? 'text-ngo-accent font-bold' : ''}`;

             if (isAnchor) {
               return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={baseClasses}
                  >
                    {item.label}
                  </a>
               );
             }

             return (
              <Link
                key={item.label}
                to={item.href}
                className={baseClasses}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
             to="/donate"
             className={`px-4 lg:px-6 py-2 md:py-2.5 rounded text-xs md:text-sm font-bold font-sans tracking-wide transition-all duration-300 ${
               scrolled
                 ? 'bg-ngo-green text-white hover:bg-ngo-navy' 
                 : 'bg-white text-ngo-navy hover:bg-ngo-accent hover:text-ngo-navy'
             }`}
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden z-50 p-2 rounded transition-colors ${
            scrolled ? 'text-ngo-navy' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-ngo-navy z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          {NAV_ITEMS.map((item) => {
            const isAnchor = item.href.startsWith('#');
            const isActive = location.pathname === item.href;
            const baseClasses = `text-lg font-sans font-medium py-4 border-b border-white/10 transition-colors ${
              isActive ? 'text-ngo-accent' : 'text-white'
            }`;

            if (isAnchor) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={baseClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className={baseClasses}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/donate"
            className="mt-6 px-6 py-4 bg-ngo-green text-white rounded text-center font-bold font-sans tracking-wide transition-all duration-300 hover:bg-ngo-accent hover:text-ngo-navy"
            onClick={() => setMobileMenuOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
};