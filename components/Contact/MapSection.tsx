import React from 'react';

export const MapSection: React.FC = () => {
  return (
    <section className="map-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
          <img
            src="/images/img8.jpg"
            alt="Location Map"
            className="map-image w-full h-[300px] mobile-small:h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 mobile-small:px-5 xs:px-6 py-2 mobile-small:py-2.5 xs:py-3 rounded-full font-semibold text-sm mobile-small:text-base xs:text-lg text-gcbp-primary">
              View on Map
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
