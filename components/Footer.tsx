import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-gcbp-primary text-white py-10 mobile-small:py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mobile-small:gap-8 xs:gap-10 sm:gap-12">
        {/* Col 1: Brand */}
        <div>
          <div className="mb-3 mobile-small:mb-4">
            <img 
              src="/logo3.png" 
              alt="GCBP Logo" 
              className="h-16 mobile-small:h-18 xs:h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain"
            />
          </div>
          <p className="text-blue-100 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed">Global Collective for a Better Planet.</p>
        </div>

        {/* Col 2: Address */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg">Address</h4>
          <p className="text-blue-100 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed">
            C - 20, G Block Rd, G Block BKC,<br />
            Bandra Kurla Complex, Bandra East,<br />
            Mumbai, Maharashtra 400051
          </p>
        </div>

        {/* Col 3: Contacts */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg">Contacts</h4>
          <p className="text-blue-100 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed">connect@gnbp.org</p>
        </div>

        {/* Col 4: Links */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg">Links</h4>
          <ul className="space-y-1.5 mobile-small:space-y-2 text-blue-100 text-[12px] mobile-small:text-sm xs:text-base">
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