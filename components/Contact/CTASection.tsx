import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="cta-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="cta-section-content">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-2.5 mobile-small:mb-3 xs:mb-4 sm:mb-5">
            Do You Have Any Questions for Us?
          </h2>
          <p className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 mb-5 mobile-small:mb-6 xs:mb-7 sm:mb-8">
            If you have any questions, please feel free to reach out to us.
          </p>
          <div className="max-w-md mx-auto">
            <div className="mb-3 mobile-small:mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 mobile-small:px-5 xs:px-6 py-3 mobile-small:py-3.5 xs:py-4 text-sm mobile-small:text-base border border-slate-300 rounded-full focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
              />
            </div>
            <button className="w-full bg-gcbp-primary text-white px-6 mobile-small:px-7 xs:px-8 py-3 mobile-small:py-3.5 xs:py-4 rounded-full font-bold text-sm mobile-small:text-base xs:text-lg hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg active:scale-95">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
