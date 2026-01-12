import React, { useState } from 'react';

export const MediaHighlightSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="gcbp-highlight relative py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-white overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>

        <div className="gcbp-content relative max-w-[1200px] mx-auto">
          {/* Big Text */}
          <h2 className="gcbp-title text-center text-[clamp(3rem,12vw,8rem)] mobile-small:text-[clamp(4rem,14vw,10rem)] sm:text-[clamp(5rem,16vw,12rem)] font-black text-gcbp-primary tracking-wider mb-8 mobile-small:mb-10 sm:mb-12">
            GCBP
          </h2>

          {/* Video Thumbnail */}
          <div 
            className="gcbp-media relative z-[2] mx-auto w-full aspect-video rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80"
              alt="GCBP Impact"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="w-16 mobile-small:w-20 xs:w-24 sm:w-28 h-16 mobile-small:h-20 xs:h-24 sm:h-28 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                <svg className="w-8 mobile-small:w-10 xs:w-12 sm:w-14 h-8 mobile-small:h-10 xs:h-12 sm:h-14 text-gcbp-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
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
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-7xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white text-2xl font-bold hover:text-gcbp-primary transition-colors"
            >
              ✕ Close
            </button>
            <video
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              src="https://cdn.coverr.co/videos/coverr-mist-over-the-forest-1608/1080p.mp4"
            />
          </div>
        </div>
      )}
    </>
  );
};
