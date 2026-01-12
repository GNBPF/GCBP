import React from 'react';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  return (
    <section className="cta-section bg-white py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="cta-title text-[clamp(2rem,6vw,3.5rem)] mobile-small:text-[clamp(2.5rem,7vw,4rem)] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 mobile-small:mb-8 xs:mb-10">
          LET'S DO THIS TOGETHER
        </h2>
        <div className="flex flex-col xs:flex-row gap-4 mobile-small:gap-5 xs:gap-6 sm:gap-7 md:gap-8 justify-center items-center">
          <Link to="/contact" className="cta-button bg-gcbp-primary text-white px-8 mobile-small:px-10 xs:px-12 py-3 mobile-small:py-3.5 xs:py-4 text-sm mobile-small:text-base xs:text-lg sm:text-xl font-bold hover:bg-blue-800 transition-all hover:scale-104 shadow-lg active:scale-96 w-full xs:w-auto text-center rounded-full">
            Donate
          </Link>
          <Link to="/contact" className="cta-button bg-gcbp-primary text-white px-8 mobile-small:px-10 xs:px-12 py-3 mobile-small:py-3.5 xs:py-4 text-sm mobile-small:text-base xs:text-lg sm:text-xl font-bold hover:bg-blue-800 transition-all hover:scale-104 shadow-lg active:scale-96 w-full xs:w-auto text-center rounded-full">
            Volunteer
          </Link>
          <Link to="/contact" className="cta-button bg-gcbp-primary text-white px-8 mobile-small:px-10 xs:px-12 py-3 mobile-small:py-3.5 xs:py-4 text-sm mobile-small:text-base xs:text-lg sm:text-xl font-bold hover:bg-blue-800 transition-all hover:scale-104 shadow-lg active:scale-96 w-full xs:w-auto text-center rounded-full">
            Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
};
