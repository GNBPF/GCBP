import React from 'react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="partners py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
      {/* Decorative Line */}
      <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          <div className="flex-1 h-0.5 bg-gcbp-primary mx-2"></div>
          <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mobile-small:gap-10 xs:gap-12 items-center">
          <div>
            <h2 className="text-[clamp(3rem,10vw,8rem)] mobile-small:text-[clamp(4rem,12vw,10rem)] font-black text-gcbp-primary mb-6 mobile-small:mb-8">GCBP</h2>
            <div className="feature-image aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" 
                alt="Child" 
                className="w-full h-full object-cover scale-108" 
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-gcbp-primary font-bold text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl mb-4 mobile-small:mb-5 sm:mb-6">HAPPY BACKERS</h3>
            <p className="text-slate-700 text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base sm:text-lg md:text-xl mb-8 mobile-small:mb-10 sm:mb-12">
              PROUDLY SUPPORTED BY THESE COMPANIES
            </p>
            <div className="partners-scroll-container overflow-hidden w-full">
              <div className="partners-scroll flex gap-4 mobile-small:gap-6 xs:gap-8 sm:gap-10 w-max">
                <div className="partner-logo aspect-square border-2 border-dashed border-gcbp-primary rounded-lg flex items-center justify-center bg-slate-50 flex-shrink-0 w-32 mobile-small:w-36 xs:w-40 sm:w-44 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-gcbp-primary font-bold text-sm mobile-small:text-base xs:text-lg">LOGO</span>
                </div>
                <div className="partner-logo aspect-square border-2 border-dashed border-gcbp-primary rounded-lg flex items-center justify-center bg-slate-50 flex-shrink-0 w-32 mobile-small:w-36 xs:w-40 sm:w-44 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-gcbp-primary font-bold text-sm mobile-small:text-base xs:text-lg">LOGO</span>
                </div>
                <div className="partner-logo aspect-square border-2 border-dashed border-gcbp-primary rounded-lg flex items-center justify-center bg-slate-50 flex-shrink-0 w-32 mobile-small:w-36 xs:w-40 sm:w-44 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-gcbp-primary font-bold text-sm mobile-small:text-base xs:text-lg">LOGO</span>
                </div>
                <div className="partner-logo aspect-square border-2 border-dashed border-gcbp-primary rounded-lg flex items-center justify-center bg-slate-50 flex-shrink-0 w-32 mobile-small:w-36 xs:w-40 sm:w-44 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-gcbp-primary font-bold text-sm mobile-small:text-base xs:text-lg">LOGO</span>
                </div>
                {/* Duplicate for infinite scroll */}
                <div className="partner-logo aspect-square border-2 border-dashed border-gcbp-primary rounded-lg flex items-center justify-center bg-slate-50 flex-shrink-0 w-32 mobile-small:w-36 xs:w-40 sm:w-44 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-gcbp-primary font-bold text-sm mobile-small:text-base xs:text-lg">LOGO</span>
                </div>
                <div className="partner-logo aspect-square border-2 border-dashed border-gcbp-primary rounded-lg flex items-center justify-center bg-slate-50 flex-shrink-0 w-32 mobile-small:w-36 xs:w-40 sm:w-44 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-gcbp-primary font-bold text-sm mobile-small:text-base xs:text-lg">LOGO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
