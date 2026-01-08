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
    <nav className="fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-[8%] py-5 bg-white/95 backdrop-blur-sm transition-all duration-300 border-b border-transparent">
      {/* Logo */}
      <Link 
        to="/"
        className="flex items-center gap-2 cursor-pointer"
      >
         {/* Simple placeholder logo to match design */}
         <div className="w-8 h-8 rounded-full bg-gcbp-primary flex items-center justify-center text-white font-bold text-xs">GC</div>
         <span className="text-xl font-bold tracking-tight text-slate-900">
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
              className="mx-4 font-medium text-sm text-slate-800 hover:text-gcbp-primary transition-colors"
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              className={`mx-4 font-medium text-sm transition-colors ${
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
      <div className="flex items-center gap-4">
        <Link
          to="/contact"
          className="hidden md:inline-block bg-gcbp-primary text-white px-8 py-2.5 rounded-full font-medium text-sm hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10"
        >
          Contact Us
        </Link>
        
        <button
          className="md:hidden text-slate-700 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-xl md:hidden">
          {navItems.map((item) => (
            item.isHash ? (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-800 font-medium text-lg py-2 hover:text-gcbp-primary"
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-slate-800 font-medium text-lg py-2 hover:text-gcbp-primary ${
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
            className="bg-gcbp-primary text-white text-center py-3 rounded-full font-bold w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};