import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section relative bg-gradient-to-b from-gcbp-primary via-blue-700 to-gcbp-primary h-[50vh] mobile-small:h-[55vh] min-h-[400px] mobile-small:min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] max-h-[700px] flex items-center justify-center overflow-hidden pt-16 xs:pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Background Gradient */}
      <div className="hero-gradient absolute inset-0 bg-gradient-to-b from-gcbp-primary via-blue-700 to-gcbp-primary opacity-0 scale-105"></div>
      
      {/* GCBP Watermark - Fixed, very low opacity, fades out after hero */}
      <div className="hero-watermark absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[clamp(8rem,25vw,20rem)] font-black text-white opacity-5">GCBP</div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-10 text-center">
        <h1 className="hero-title text-[clamp(2rem,6vw,3.5rem)] mobile-small:text-[clamp(2.5rem,7vw,4rem)] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 mobile-small:mb-5 xs:mb-6 sm:mb-8">
          Media & Events
        </h1>
        <p className="hero-subtitle text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed px-2">
          A global network uniting communities, partners, and changemakers for a sustainable future.
        </p>
      </div>
    </section>
  );
};
