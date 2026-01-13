import React from 'react';

export const VolunteerSection: React.FC = () => {
  return (
    <section className="volunteer-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2 section-divider"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>
        
        <h2 className="volunteer-heading text-[clamp(1.5rem,4vw,2.25rem)] mobile-small:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gcbp-primary mb-3 mobile-small:mb-4 xs:mb-5 sm:mb-6">
          VOLUNTEER OPPORTUNITIES
        </h2>
        <p className="volunteer-text text-center text-slate-700 text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12 max-w-3xl mx-auto px-4">
          JOIN US AS A VOLUNTEER AND BE A PART OF MEANINGFUL CHANGE. CONTRIBUTE YOUR TIME, SKILLS, AND PASSION TO CREATE REAL IMPACT WHILE LEARNING, GROWING, AND SUPPORTING CAUSES THAT MATTER. TOGETHER, WE CAN BUILD A BETTER AND MORE SUSTAINABLE FUTURE.
        </p>
        
        <div className="volunteer-video-container relative h-[280px] mobile-small:h-[320px] xs:h-[380px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-lg overflow-hidden shadow-2xl">
          <video
            className="volunteer-video w-full h-full object-cover"
            loop
            muted
            playsInline
            autoPlay
          >
            <source src="/images/vid2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
