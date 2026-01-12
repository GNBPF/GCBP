import React from 'react';

const communityImages = [
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
  '/images/img8.jpg',
];

export const CommunitySection: React.FC = () => {
  return (
    <section className="community-section bg-white py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-[clamp(2rem,6vw,3.5rem)] mobile-small:text-[clamp(2.5rem,7vw,4rem)] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-slate-900 mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12">
          BE PART OF THE CHANGE
        </h2>
        <p className="text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl text-center text-slate-700 mb-8 mobile-small:mb-10 xs:mb-12 sm:mb-14 max-w-3xl mx-auto px-4">
          At the Heart of All We Do: Building Sustainable Communities Through Collective Action
        </p>

        {/* Masonry Grid */}
        <div className="community-grid grid grid-cols-2 md:grid-cols-3 gap-2 mobile-small:gap-3 xs:gap-4 sm:gap-5 md:gap-6">
          {communityImages.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg group cursor-pointer ${
                index === 0 ? 'md:row-span-2' : index === 3 ? 'md:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden h-full">
                <img
                  src={img}
                  alt={`Community ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
