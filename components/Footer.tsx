import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ngo-navy text-white pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img 
              src="/logo3.png" 
              alt="GCBP Logo" 
              className="h-8 w-auto sm:h-10 md:h-12 mb-3 sm:mb-4 md:mb-6"
            />
            <p className="font-sans text-[11px] sm:text-xs md:text-sm leading-relaxed text-white/70 mb-3 sm:mb-4 md:mb-6">
              Global Collective for Better Planet.<br/>
              A registered 501(c)(3) non-profit organization.<br/>
              Geneva, Switzerland.
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {/* Social Icons Placeholders */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ngo-accent hover:text-ngo-navy transition-colors cursor-pointer text-[10px] sm:text-xs md:text-sm">X</div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ngo-accent hover:text-ngo-navy transition-colors cursor-pointer text-[10px] sm:text-xs md:text-sm">in</div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ngo-accent hover:text-ngo-navy transition-colors cursor-pointer text-[10px] sm:text-xs md:text-sm">Ig</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-ngo-accent mb-3 sm:mb-4 md:mb-6">Our Work</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 font-sans text-[11px] sm:text-xs md:text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Climate Resilience</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ocean Conservation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Justice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainable Agriculture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-ngo-accent mb-3 sm:mb-4 md:mb-6">Get Involved</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 font-sans text-[11px] sm:text-xs md:text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-sans text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-ngo-accent mb-3 sm:mb-4 md:mb-6">Newsletter</h4>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-white/60 mb-2 sm:mb-3 md:mb-4">Subscribe for updates on our latest projects.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-white/10 border-none text-white text-[11px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 w-full rounded-l focus:ring-1 focus:ring-ngo-accent outline-none placeholder:text-white/40" />
              <button className="bg-ngo-accent text-ngo-navy px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm font-bold rounded-r hover:bg-white transition-colors whitespace-nowrap">Go</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 sm:pt-5 md:pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[10px] md:text-xs font-sans text-white/50 gap-2 sm:gap-3 md:gap-0">
          <p>&copy; {new Date().getFullYear()} GCBP Foundation. All rights reserved.</p>
          <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center md:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Financials</a>
          </div>
        </div>
      </div>
    </footer>
  );
};