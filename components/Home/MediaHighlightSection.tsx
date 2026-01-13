import React from 'react';

export const MediaHighlightSection: React.FC = () => {
  return (
    <section className="gcbp-highlight relative py-12 xs:py-16 sm:py-20 md:py-24 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section divider */}
        <div className="flex items-center justify-center mb-8 xs:mb-12 sm:mb-16">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
            <div className="flex-1 h-0.5 bg-[#163FA5] mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
          </div>
        </div>

        <div className="gcbp-content relative min-h-[300px] xs:min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Big Text - Positioned top-left with offset */}
          <h2 className="gcbp-title absolute top-4 xs:top-8 sm:top-12 md:top-16 left-2 xs:left-4 sm:left-8 md:left-12 text-[clamp(3rem,10vw,8rem)] xs:text-[clamp(4rem,12vw,10rem)] md:text-[clamp(5rem,14vw,12rem)] lg:text-[clamp(6rem,16vw,14rem)] font-serif font-black text-[#163FA5] tracking-wider leading-none z-10 opacity-0">
            GCBP
          </h2>

          {/* Video - Autoplay - Positioned bottom-right with offset */}
          <div className="gcbp-media absolute bottom-4 xs:bottom-8 sm:bottom-12 md:bottom-16 right-2 xs:right-4 sm:right-8 md:right-12 w-full xs:w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[65%] max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl z-[2] opacity-0">
            <video
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="/images/vid1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
