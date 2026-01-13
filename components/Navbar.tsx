import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Our Programs', href: '/programs' },
  { label: 'Media & Events', href: '/media' },
  { label: 'Stories', href: '/stories' },
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
    <nav className="fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-[6%] lg:px-[8%] py-2 mobile-small:py-2.5 xs:py-3 sm:py-3 md:py-2.5 lg:py-3 bg-[#FFFAF0]/95 backdrop-blur-sm transition-all duration-300 border-b border-[#E6E6E8]">
      {/* Logo */}
      <Link 
        to="/"
        className="flex items-center cursor-pointer"
      >
         <img 
           src="/logo2.png" 
           alt="GCBP Logo" 
           className="h-14 mobile-small:h-16 xs:h-18 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
         />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        {navItems.map((item) => (
          item.isHash ? (
            <a
              key={item.label}
              href={item.href}
              className="mx-2 lg:mx-3 xl:mx-4 font-medium text-sm md:text-base lg:text-lg text-[#1F1F22] hover:text-[#163FA5] transition-colors font-sans"
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              className={`mx-2 lg:mx-3 xl:mx-4 font-medium text-sm md:text-base lg:text-lg transition-colors font-sans ${
                location.pathname === item.href
                  ? 'text-[#163FA5]'
                  : 'text-[#1F1F22] hover:text-[#163FA5]'
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
          className="hidden md:inline-block bg-[#163FA5] text-white px-6 lg:px-8 xl:px-10 py-2.5 lg:py-3 rounded-full font-medium text-sm md:text-base lg:text-lg hover:bg-[#0F2E7A] transition-colors shadow-lg shadow-[#163FA5]/10 active:scale-95 font-sans"
        >
          Contact Us
        </Link>
        
        <button
          className="md:hidden text-[#5A5A5F] p-1 active:scale-95"
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
                className="text-[#1F1F22] font-medium text-base mobile-small:text-lg xs:text-xl py-2 hover:text-[#163FA5] transition-colors font-sans"
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[#1F1F22] font-medium text-base mobile-small:text-lg xs:text-xl py-2 hover:text-[#163FA5] transition-colors font-sans ${
                  location.pathname === item.href ? 'text-[#163FA5]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            className="bg-[#163FA5] text-white text-center py-2.5 mobile-small:py-3 rounded-full font-bold text-sm mobile-small:text-base w-full active:scale-95 font-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};