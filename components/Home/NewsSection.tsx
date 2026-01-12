import React from 'react';

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
      {/* Decorative Line */}
      <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          <div className="flex-1 h-0.5 bg-gcbp-primary mx-2"></div>
          <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <h3 className="text-gcbp-primary font-bold text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl mb-2 mobile-small:mb-3 sm:mb-4">LATEST NEWS</h3>
        <p className="text-slate-700 text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base sm:text-lg md:text-xl mb-8 mobile-small:mb-10 sm:mb-12">
          GET THE LATEST NEWS, ANNOUNCEMENTS, AND INSIGHTS - UPDATED REGULARLY.
        </p>
        
        <div className="news-grid grid grid-cols-1 md:grid-cols-2 gap-6 mobile-small:gap-8 xs:gap-10 sm:gap-12">
          <div className="news-card news-card-left aspect-[4/3] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] group cursor-pointer shadow-xl">
            <img src="/images/img3.jpg" alt="News 1" className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 mobile-small:p-5 xs:p-6 sm:p-7 md:p-8">
              <h4 className="text-white font-bold text-base mobile-small:text-lg sm:text-xl md:text-2xl lg:text-3xl relative">
                <span className="relative z-10">Corporate Sustainability Summit 2024</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </h4>
            </div>
          </div>
          <div className="news-card news-card-right aspect-[4/3] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] group cursor-pointer shadow-xl">
            <img src="/images/img4.jpg" alt="News 2" className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 mobile-small:p-5 xs:p-6 sm:p-7 md:p-8">
              <h4 className="text-white font-bold text-base mobile-small:text-lg sm:text-xl md:text-2xl lg:text-3xl relative">
                <span className="relative z-10">New Water Projects Launched in Kenya</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
