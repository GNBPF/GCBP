import React from 'react';
import { Link } from 'react-router-dom';

const planetImages = [
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
];

export const PlanetOfStoriesSection: React.FC = () => {
  return (
    <section className="planet-stories-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-gcbp-primary text-white relative overflow-hidden">
      {/* Background wave/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gcbp-primary via-blue-700 to-gcbp-primary planet-bg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 mobile-small:mb-10 xs:mb-12 sm:mb-14">
          <h2 className="planet-title text-[clamp(2rem,6vw,4rem)] mobile-small:text-[clamp(2.5rem,7vw,5rem)] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 mobile-small:mb-4 xs:mb-5">
            #PLANETOFSTORIES
          </h2>
          <p className="text-blue-100 text-sm mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl">
            JOIN THE #PLANETOFSTORIES MOVEMENT.
          </p>
        </div>

        {/* Image Grid - 3 on top, 2 on bottom centered */}
        <div className="planet-grid flex flex-col items-center gap-3 mobile-small:gap-4 xs:gap-5 sm:gap-6 mb-8 mobile-small:mb-10 xs:mb-12">
          {/* Top Row - 3 images */}
          <div className="flex gap-3 mobile-small:gap-4 xs:gap-5 sm:gap-6 justify-center">
            {planetImages.slice(0, 3).map((img, index) => (
              <div
                key={index}
                className="planet-image relative overflow-hidden rounded-lg shadow-xl cursor-pointer group w-[200px] mobile-small:w-[220px] xs:w-[240px] sm:w-[280px] md:w-[320px] h-[200px] mobile-small:h-[220px] xs:h-[240px] sm:h-[280px] md:h-[320px]"
              >
                <img
                  src={img}
                  alt={`Planet Story ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Row - 2 images centered */}
          <div className="flex gap-3 mobile-small:gap-4 xs:gap-5 sm:gap-6 justify-center">
            {planetImages.slice(3, 5).map((img, index) => (
              <div
                key={index + 3}
                className="planet-image relative overflow-hidden rounded-lg shadow-xl cursor-pointer group w-[200px] mobile-small:w-[220px] xs:w-[240px] sm:w-[280px] md:w-[320px] h-[200px] mobile-small:h-[220px] xs:h-[240px] sm:h-[280px] md:h-[320px]"
              >
                <img
                  src={img}
                  alt={`Planet Story ${index + 4}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="join-us-btn inline-block bg-white text-gcbp-primary px-8 mobile-small:px-10 xs:px-12 py-3 mobile-small:py-3.5 xs:py-4 text-sm mobile-small:text-base xs:text-lg font-bold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-104 active:scale-95"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
};
