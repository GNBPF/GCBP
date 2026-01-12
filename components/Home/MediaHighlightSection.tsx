import React, { useState } from 'react';

export const MediaHighlightSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="gcbp-highlight relative py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-white overflow-hidden px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-2 mobile-small:w-2.5 xs:w-3 h-2 mobile-small:h-2.5 xs:h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2"></div>
            <div className="w-2 mobile-small:w-2.5 xs:w-3 h-2 mobile-small:h-2.5 xs:h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>

        <div className="gcbp-content relative max-w-[1200px] mx-auto px-2 mobile-small:px-3 xs:px-4">
          {/* Big Text */}
          <h2 className="gcbp-title text-center text-[clamp(2.5rem,10vw,7rem)] mobile-small:text-[clamp(3rem,12vw,8rem)] sm:text-[clamp(4rem,14vw,10rem)] md:text-[clamp(5rem,16vw,12rem)] font-black text-gcbp-primary tracking-wider mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12">
            GCBP
          </h2>

          {/* Video Thumbnail */}
          <div 
            className="gcbp-media relative z-[2] mx-auto w-full aspect-video rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src="/images/img2.jpg"
              alt="GCBP Impact"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="w-14 mobile-small:w-16 xs:w-20 sm:w-24 md:w-28 h-14 mobile-small:h-16 xs:h-20 sm:h-24 md:h-28 rounded-full bg-white/90 flex items-center justify-center shadow-xl min-h-[44px] min-w-[44px]">
                <svg className="w-7 mobile-small:w-8 xs:w-10 sm:w-12 md:w-14 h-7 mobile-small:h-8 xs:h-10 sm:h-12 md:h-14 text-gcbp-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 mobile-small:p-4 xs:p-5 sm:p-6"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-7xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 mobile-small:-top-12 right-0 text-white text-lg mobile-small:text-xl xs:text-2xl font-bold hover:text-gcbp-primary transition-colors min-h-[44px] min-w-[44px] px-2"
            >
              ✕ Close
            </button>
            <video
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              src="/images/vid1.mp4"
            />
          </div>
        </div>
      )}
    </>
  );
};
