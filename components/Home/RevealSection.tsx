import React from 'react';

export const RevealSection: React.FC = () => {
  return (
    <div className="reveal-container h-screen relative overflow-hidden flex items-center justify-center bg-white -mt-px" id="reveal">
      <div className="split-text-wrap flex z-10 pointer-events-none gap-[0.1em] absolute">
        <div className="letter-block text-[12vw] mobile-small:text-[13vw] sm:text-[14vw] md:text-[15vw] font-black text-gcbp-primary leading-none whitespace-nowrap" id="left-text">GC</div>
        <div className="letter-block text-[12vw] mobile-small:text-[13vw] sm:text-[14vw] md:text-[15vw] font-black text-gcbp-primary leading-none whitespace-nowrap" id="right-text">BP</div>
      </div>
      {/* Hero Content - Appears after reveal */}
      <div className="hero-content max-w-4xl absolute z-30 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] mobile-small:w-[90%] sm:w-auto pointer-events-auto">
        <div className="hero-badge text-gcbp-primary font-bold flex items-center justify-center gap-1.5 mobile-small:gap-2 mb-2.5 mobile-small:mb-3 sm:mb-4 text-[10px] mobile-small:text-xs xs:text-sm sm:text-base md:text-lg opacity-0">
          <span className="w-1 mobile-small:w-1.5 h-1 mobile-small:h-1.5 xs:w-2 xs:h-2 bg-gcbp-primary rounded-full"></span> 
          GCBP
        </div>
        <h1 className="hero-title-line text-gcbp-primary text-[clamp(1.5rem,4vw,3rem)] mobile-small:text-[clamp(1.75rem,5vw,3.5rem)] sm:text-[clamp(2rem,6vw,4rem)] md:text-[clamp(2.25rem,7vw,4.5rem)] lg:text-[clamp(2.5rem,8vw,5rem)] xl:text-[clamp(2.75rem,9vw,5.5rem)] uppercase leading-[1.1] mobile-small:leading-tight my-3 mobile-small:my-4 sm:my-5 md:my-6 lg:my-7 font-extrabold opacity-0">Together for a Better Planet</h1>
        <p className="hero-subtitle-line text-slate-700 text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto px-4 mb-4 mobile-small:mb-5 sm:mb-6 md:mb-7">
          <span className="line-1 block opacity-0">Empowering global communities through</span>
          <span className="line-2 block opacity-0">environmental action, sustainable living,</span>
          <span className="line-3 block opacity-0">and innovation.</span>
        </p>
        <div className="hero-btn-group flex justify-center gap-2 mobile-small:gap-2.5 xs:gap-3 sm:gap-4 md:gap-5 mt-5 mobile-small:mt-6 sm:mt-7 md:mt-8 lg:mt-10 flex-wrap opacity-0">
          <button 
            className="cta-btn-donate bg-gcbp-primary text-white px-4 mobile-small:px-5 xs:px-6 py-2 mobile-small:py-2.5 text-[12px] mobile-small:text-sm xs:text-base rounded-full border-none cursor-pointer font-medium relative overflow-hidden group transition-all duration-300 active:scale-[0.96] hover:shadow-[0px_8px_24px_rgba(30,64,175,0.3)]"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
              }
            }}
          >
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">Donate</span>
          </button>
          <button 
            className="cta-btn-volunteer bg-transparent text-gcbp-primary border border-gcbp-primary px-4 mobile-small:px-5 xs:px-6 py-2 mobile-small:py-2.5 text-[12px] mobile-small:text-sm xs:text-base rounded-full cursor-pointer font-medium relative overflow-hidden group transition-all duration-300 active:scale-[0.96] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.08)]"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
              }
            }}
          >
            <span className="absolute inset-0 bg-gcbp-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">Volunteer</span>
          </button>
          <button 
            className="cta-btn-join bg-gcbp-primary text-white px-4 mobile-small:px-5 xs:px-6 py-2 mobile-small:py-2.5 text-[12px] mobile-small:text-sm xs:text-base rounded-full border-none cursor-pointer font-medium relative overflow-hidden group transition-all duration-300 active:scale-[0.96] hover:shadow-[0px_8px_24px_rgba(30,64,175,0.2)]"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
              }
            }}
          >
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">Join Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};
