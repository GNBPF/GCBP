import React from 'react';
import { Link } from 'react-router-dom';

const mosaicImages = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
];

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 mobile-small:gap-10 xs:gap-12 sm:gap-14 items-center">
          {/* Mosaic Image Grid (Left) - 2 columns, 3 rows */}
          <div className="mosaic-grid grid grid-cols-2 gap-3 mobile-small:gap-4 xs:gap-5 sm:gap-6">
            {mosaicImages.map((img, index) => (
              <div
                key={index}
                className="mosaic-tile aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Story ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Text Block (Right) */}
          <div className="hero-text-content">
            <h1 className="hero-title text-[clamp(2rem,6vw,4rem)] mobile-small:text-[clamp(2.5rem,7vw,5rem)] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gcbp-primary mb-4 mobile-small:mb-5 xs:mb-6 sm:mb-8">
              PLANET OF STORIES
            </h1>
            <p className="hero-description text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 mobile-small:mb-8 xs:mb-10">
              From eco-warriors turning trash into treasure, to changemakers making kindness trend harder than cat videos - Planet of Stories is GCBP's corner of the internet for celebrating real people doing epic good. No boring reports. No jargon. Just raw, inspiring, world-changing tales you'll want to share.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 mobile-small:gap-5 xs:gap-6">
              <Link
                to="/stories"
                className="read-btn inline-flex items-center justify-center bg-gcbp-primary text-white px-6 mobile-small:px-8 py-3 mobile-small:py-3.5 text-sm mobile-small:text-base xs:text-lg font-bold rounded-full hover:bg-blue-800 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">READ</span>
              </Link>
              <Link
                to="/contact"
                className="submit-btn inline-flex items-center justify-center bg-white text-gcbp-primary border-2 border-gcbp-primary px-6 mobile-small:px-8 py-3 mobile-small:py-3.5 text-sm mobile-small:text-base xs:text-lg font-bold rounded-full hover:bg-gcbp-primary hover:text-white transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gcbp-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">SUBMIT</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
