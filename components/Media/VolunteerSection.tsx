import React from 'react';
import { Play } from 'lucide-react';

interface VolunteerSectionProps {
  isVideoPlaying: boolean;
  onVideoToggle: () => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({ isVideoPlaying, onVideoToggle }) => {
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
        
        <div className="volunteer-video-container relative h-[280px] mobile-small:h-[320px] xs:h-[380px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
          <video
            className="volunteer-video w-full h-full object-cover"
            loop
            muted
            playsInline
            autoPlay
          >
            <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={onVideoToggle}
              className="w-14 mobile-small:w-16 xs:w-18 sm:w-20 md:w-24 h-14 mobile-small:h-16 xs:h-18 sm:h-20 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95"
            >
              <Play className="w-6 mobile-small:w-7 xs:w-8 sm:w-10 md:w-12 h-6 mobile-small:h-7 xs:h-8 sm:h-10 md:h-12 text-gcbp-primary ml-0.5 mobile-small:ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
