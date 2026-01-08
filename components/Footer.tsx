import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-gcbp-primary text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-white text-gcbp-primary font-bold flex items-center justify-center text-sm">GC</div>
            <span className="font-bold text-xl">GCBP</span>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">Global Collective for a Better Planet.</p>
        </div>

        {/* Col 2: Address */}
        <div>
          <h4 className="font-semibold mb-3">Address</h4>
          <p className="text-blue-100 text-sm leading-relaxed">
            25-28 F1 St. No-2, Chakrata Road,
            <br /> Nirman Nagar, Dehradun, 248001
          </p>
        </div>

        {/* Col 3: Contacts */}
        <div>
          <h4 className="font-semibold mb-3">Contacts</h4>
          <p className="text-blue-100 text-sm leading-relaxed">hello@gcbp.org</p>
          <p className="text-blue-100 text-sm leading-relaxed">+91 999-888-7777</p>
        </div>

        {/* Col 4: Links */}
        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
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