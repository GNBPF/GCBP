import React from 'react';

export const GalleryStrip: React.FC = () => {
  return (
    <section className="py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-gcbp-primary font-bold text-[clamp(1.25rem,3.5vw,2rem)] mobile-small:text-[clamp(1.5rem,4vw,2.25rem)] sm:text-2xl md:text-3xl lg:text-4xl mb-2 mobile-small:mb-3 sm:mb-4">GALLERY</h3>
        <p className="text-slate-700 text-[clamp(1rem,2.5vw,1.5rem)] mobile-small:text-xl sm:text-2xl md:text-3xl font-semibold mb-6 mobile-small:mb-8 sm:mb-10">OUR DNA: DO NOT ANNIHILATE</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mobile-small:gap-4 xs:gap-5 sm:gap-6">
          <div className="gallery-card aspect-square overflow-hidden rounded-lg shadow-lg relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=600&q=80" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
              <h4 className="text-white font-bold text-sm mobile-small:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">Community Impact</h4>
            </div>
          </div>
          <div className="gallery-card aspect-square overflow-hidden rounded-lg shadow-lg relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
              <h4 className="text-white font-bold text-sm mobile-small:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">Environmental Action</h4>
            </div>
          </div>
          <div className="gallery-card aspect-square overflow-hidden rounded-lg shadow-lg relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
              <h4 className="text-white font-bold text-sm mobile-small:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sustainable Living</h4>
            </div>
          </div>
          <div className="gallery-card aspect-square overflow-hidden rounded-lg shadow-lg relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1504470695779-8aecc583c46a?auto=format&fit=crop&w=600&q=80" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
              <h4 className="text-white font-bold text-sm mobile-small:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">Global Reach</h4>
            </div>
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6 mobile-small:mt-8">
          <div className="gallery-dot active w-2 h-2 rounded-full bg-gcbp-primary"></div>
          <div className="gallery-dot w-2 h-2 rounded-full bg-gcbp-primary/30"></div>
          <div className="gallery-dot w-2 h-2 rounded-full bg-gcbp-primary/30"></div>
        </div>
      </div>
    </section>
  );
};
