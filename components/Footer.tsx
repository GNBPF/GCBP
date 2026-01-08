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
          <div className="flex items-center gap-1.5 mobile-small:gap-2 mb-3 mobile-small:mb-4">
            <div className="w-6 mobile-small:w-7 xs:w-8 h-6 mobile-small:h-7 xs:h-8 rounded-full bg-white text-gcbp-primary font-bold flex items-center justify-center text-[10px] mobile-small:text-xs xs:text-sm">GC</div>
            <span className="font-bold text-lg mobile-small:text-xl xs:text-2xl">GCBP</span>
          </div>
          <p className="text-blue-100 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed">Global Collective for a Better Planet.</p>
        </div>

        {/* Col 2: Address */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg">Address</h4>
          <p className="text-blue-100 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed">
            25-28 F1 St. No-2, Chakrata Road,
            <br /> Nirman Nagar, Dehradun, 248001
          </p>
        </div>

        {/* Col 3: Contacts */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg">Contacts</h4>
          <p className="text-blue-100 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed">hello@gcbp.org</p>
          <p className="text-blue-100 text-[12px] mobile-small:text-sm xs:text-base leading-relaxed">+91 999-888-7777</p>
        </div>

        {/* Col 4: Links */}
        <div>
          <h4 className="font-semibold mb-2 mobile-small:mb-3 text-sm mobile-small:text-base xs:text-lg">Links</h4>
          <ul className="space-y-1.5 mobile-small:space-y-2 text-blue-100 text-[12px] mobile-small:text-sm xs:text-base">
            <li><Link to="/about" className="hover:text-white transition-colors">Get Involved</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Planet of Stories</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Media & Resources</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Legal & Administrative</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};