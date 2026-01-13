import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-[#163FA5] text-white py-10 mobile-small:py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mobile-small:gap-8 xs:gap-10 sm:gap-12">
        {/* Col 1: Brand */}
        <div>
          <div className="mb-6 mobile-small:mb-8">
            <img 
              src="/logo3.png" 
              alt="GCBP Logo" 
              className="h-24 mobile-small:h-28 xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto object-contain"
            />
          </div>
        </div>

        {/* Col 2: Address */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg font-sans">Address</h4>
          <p className="text-white/80 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed font-sans">
            C - 20, G Block Rd, G Block BKC,<br />
            Bandra Kurla Complex, Bandra East,<br />
            Mumbai, Maharashtra 400051
          </p>
        </div>

        {/* Col 3: Contacts */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg font-sans">Contacts</h4>
          <p className="text-white/80 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed font-sans">connect@gnbp.org</p>
        </div>

        {/* Col 4: Links */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg font-sans">Links</h4>
          <ul className="space-y-1.5 mobile-small:space-y-2 text-white/80 text-[12px] mobile-small:text-sm xs:text-base font-sans">
            <li><Link to="/about" className="footer-link hover:text-white transition-colors relative inline-block">
              <span>Get Involved</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white hover:w-full transition-all duration-300"></span>
            </Link></li>
            <li><Link to="/about" className="footer-link hover:text-white transition-colors relative inline-block">
              <span>Planet of Stories</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white hover:w-full transition-all duration-300"></span>
            </Link></li>
            <li><Link to="/" className="footer-link hover:text-white transition-colors relative inline-block">
              <span>Media & Resources</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white hover:w-full transition-all duration-300"></span>
            </Link></li>
            <li><Link to="/about" className="footer-link hover:text-white transition-colors relative inline-block">
              <span>Legal & Administrative</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white hover:w-full transition-all duration-300"></span>
            </Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};