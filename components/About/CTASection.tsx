import React from 'react';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  return (
    <section className="py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white text-center">
      <h3 className="text-[clamp(1.25rem,3.5vw,1.75rem)] mobile-small:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 mobile-small:mb-5 xs:mb-6">WANT TO BE A PART OF IT?</h3>
      <Link 
        to="/contact" 
        className="join-btn inline-block px-8 mobile-small:px-10 xs:px-12 py-3 mobile-small:py-3.5 xs:py-4 text-sm mobile-small:text-base xs:text-lg bg-white text-gcbp-primary border-2 border-gcbp-primary rounded-full shadow-md hover:bg-gcbp-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-gcbp-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
        <span className="relative z-10">Join Us</span>
      </Link>
    </section>
  );
};
