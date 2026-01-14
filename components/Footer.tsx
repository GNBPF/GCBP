import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ngo-navy text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <span className="font-serif text-xl sm:text-2xl font-bold block mb-4 sm:mb-6">GCBP</span>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/70 mb-4 sm:mb-6">
              Global Collective for Better Planet.<br/>
              A registered 501(c)(3) non-profit organization.<br/>
              Geneva, Switzerland.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {/* Social Icons Placeholders */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ngo-accent hover:text-ngo-navy transition-colors cursor-pointer text-xs sm:text-sm">X</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ngo-accent hover:text-ngo-navy transition-colors cursor-pointer text-xs sm:text-sm">in</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ngo-accent hover:text-ngo-navy transition-colors cursor-pointer text-xs sm:text-sm">Ig</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-ngo-accent mb-4 sm:mb-6">Our Work</h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-xs sm:text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Climate Resilience</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ocean Conservation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Justice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainable Agriculture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-ngo-accent mb-4 sm:mb-6">Get Involved</h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-xs sm:text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-ngo-accent mb-4 sm:mb-6">Newsletter</h4>
            <p className="text-[10px] sm:text-xs text-white/60 mb-3 sm:mb-4">Subscribe for updates on our latest projects.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-white/10 border-none text-white text-xs sm:text-sm px-3 sm:px-4 py-2 w-full rounded-l focus:ring-1 focus:ring-ngo-accent outline-none placeholder:text-white/40" />
              <button className="bg-ngo-accent text-ngo-navy px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-r hover:bg-white transition-colors whitespace-nowrap">Go</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs font-sans text-white/50 gap-3 sm:gap-0">
          <p>&copy; {new Date().getFullYear()} GCBP Foundation. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Financials</a>
          </div>
        </div>
      </div>
    </footer>
  );
};