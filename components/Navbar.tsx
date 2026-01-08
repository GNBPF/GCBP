import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Programs', href: '/programs' },
  { label: 'Media & Events', href: '/media' },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.isHash && location.pathname === '/') {
      // If it's a hash link and we're on home page, scroll to section
      e.preventDefault();
      const element = document.querySelector(item.href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else if (item.isHash) {
      // If it's a hash link but we're on a different page, navigate to home first
      e.preventDefault();
      window.location.href = `/${item.href}`;
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-[6%] lg:px-[8%] py-3 mobile-small:py-4 xs:py-4.5 sm:py-5 bg-white/95 backdrop-blur-sm transition-all duration-300 border-b border-transparent">
      {/* Logo */}
      <Link 
        to="/"
        className="flex items-center gap-1.5 mobile-small:gap-2 cursor-pointer"
      >
         {/* Simple placeholder logo to match design */}
         <div className="w-6 mobile-small:w-7 xs:w-8 h-6 mobile-small:h-7 xs:h-8 rounded-full bg-gcbp-primary flex items-center justify-center text-white font-bold text-[10px] mobile-small:text-xs">GC</div>
         <span className="text-base mobile-small:text-lg xs:text-xl font-bold tracking-tight text-slate-900">
            GCBP
         </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        {navItems.map((item) => (
          item.isHash ? (
            <a
              key={item.label}
              href={item.href}
              className="mx-2 lg:mx-3 xl:mx-4 font-medium text-xs lg:text-sm text-slate-800 hover:text-gcbp-primary transition-colors"
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              className={`mx-2 lg:mx-3 xl:mx-4 font-medium text-xs lg:text-sm transition-colors ${
                location.pathname === item.href
                  ? 'text-gcbp-primary'
                  : 'text-slate-800 hover:text-gcbp-primary'
              }`}
            >
              {item.label}
            </Link>
          )
        ))}
      </div>

      {/* CTA Button & Mobile Toggle */}
      <div className="flex items-center gap-2 mobile-small:gap-3 xs:gap-4">
        <Link
          to="/contact"
          className="hidden md:inline-block bg-gcbp-primary text-white px-5 lg:px-6 xl:px-8 py-2 lg:py-2.5 rounded-full font-medium text-xs lg:text-sm hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10 active:scale-95"
        >
          Contact Us
        </Link>
        
        <button
          className="md:hidden text-slate-700 p-1 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} className="mobile-small:w-6 mobile-small:h-6" /> : <Menu size={20} className="mobile-small:w-6 mobile-small:h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 mobile-small:p-5 xs:p-6 flex flex-col space-y-3 mobile-small:space-y-4 shadow-xl md:hidden">
          {navItems.map((item) => (
            item.isHash ? (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-800 font-medium text-base mobile-small:text-lg xs:text-xl py-2 hover:text-gcbp-primary transition-colors"
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-slate-800 font-medium text-base mobile-small:text-lg xs:text-xl py-2 hover:text-gcbp-primary transition-colors ${
                  location.pathname === item.href ? 'text-gcbp-primary' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            className="bg-gcbp-primary text-white text-center py-2.5 mobile-small:py-3 rounded-full font-bold text-sm mobile-small:text-base w-full active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};