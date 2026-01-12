import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[50vh] mobile-small:h-[55vh] min-h-[400px] mobile-small:min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] max-h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white hero-bg"></div>
      <div className="absolute inset-0 hero-gradient opacity-0" style={{ background: 'linear-gradient(to bottom, rgba(30, 64, 175, 0.1), rgba(30,64,175,0.05))' }} />
      
      {/* GCBP Watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero-watermark text-[clamp(8rem,25vw,20rem)] font-black text-gcbp-primary opacity-0" style={{ opacity: 0.08 }}>
          GCBP
        </div>
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 hero-text">
        <h1 className="hero-line-1 text-[clamp(2.5rem,7vw,4.5rem)] mobile-small:text-[clamp(3rem,8vw,5.5rem)] xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 mb-4 mobile-small:mb-5 sm:mb-6">
          About Company
        </h1>
        <p className="hero-line-2 text-slate-600 text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl max-w-3xl font-medium">
          A global network uniting communities, partners, and changemakers for a sustainable future.
        </p>
      </div>
    </section>
  );
};
