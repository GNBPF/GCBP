import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="who-we-are" className="min-h-screen flex flex-col items-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
      {/* Decorative Line */}
      <div className="flex items-center justify-center mb-8 mobile-small:mb-10 w-full">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          <div className="divider-line flex-1 h-0.5 bg-gcbp-primary mx-2 origin-left scale-x-0"></div>
          <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mobile-small:gap-10 xs:gap-12 sm:gap-14 md:gap-16 lg:gap-18 items-center max-w-7xl mx-auto w-full">
        <div className="about-text order-2 md:order-1 opacity-0 translate-y-6">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 mobile-small:mb-5 sm:mb-6 leading-tight">OUR DNA: DO NOT ANNIHILATE</h2>
          <p className="text-slate-700 leading-relaxed mb-6 mobile-small:mb-7 sm:mb-8 text-[14px] mobile-small:text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
            SAVING THE PLANET, ONE INDIVIDUAL AND ONE COMMUNITY AT A TIME - BECAUSE FUTURE GENERATIONS DESERVE A SAFE, AND A HEALTHY HOME.
          </p>
          <ul className="space-y-3 mobile-small:space-y-4 mb-6 mobile-small:mb-7 sm:mb-8">
            <li className="text-gcbp-primary font-bold text-lg mobile-small:text-xl sm:text-2xl md:text-3xl">• CREATIVITY</li>
            <li className="text-gcbp-primary font-bold text-lg mobile-small:text-xl sm:text-2xl md:text-3xl">• SUSTAINABILITY</li>
            <li className="text-gcbp-primary font-bold text-lg mobile-small:text-xl sm:text-2xl md:text-3xl">• COURAGE</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-6 mobile-small:mb-7 sm:mb-8 text-[13px] mobile-small:text-sm sm:text-base md:text-lg">
            We are dedicated to making a difference through these values. We believe that small actions lead to big change, and we promise to keep the planet, people, and animals healthy and safe.
          </p>
          <button 
            className="learn-more-btn bg-transparent text-gcbp-primary border-2 border-dashed border-gcbp-primary px-6 mobile-small:px-7 xs:px-8 sm:px-9 md:px-10 py-3 mobile-small:py-3.5 xs:py-4 sm:py-4.5 text-sm mobile-small:text-base xs:text-lg sm:text-xl rounded-full cursor-pointer font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95 flex items-center gap-2 group min-h-[44px] mobile-small:min-h-[48px]"
            onClick={() => {
              const element = document.querySelector('#impact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
              }
            }}
          >
            Learn More
            <span className="arrow-icon inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
        <div className="about-img h-[300px] mobile-small:h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] w-full rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
          <img src="/images/img1.jpg" alt="Hands forming heart" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
