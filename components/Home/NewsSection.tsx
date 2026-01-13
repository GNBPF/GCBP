import React from 'react';

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="news-section py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-7xl mx-auto">
        {/* Section divider */}
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
            <div className="flex-1 h-0.5 bg-[#163FA5] mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
          </div>
        </div>
        
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#163FA5] mb-6 md:mb-8">
            Latest News
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-[#5A5A5F] max-w-3xl mx-auto font-sans leading-relaxed">
            Get the latest news, announcements, and insights - updated regularly.
          </p>
        </div>
        
        {/* News cards */}
        <div className="news-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <div className="news-card news-card-left aspect-[16/10] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] group cursor-pointer shadow-xl opacity-0">
            <img src="/images/img3.jpg" alt="News 1" className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8 md:p-10 lg:p-12">
              <h4 className="text-white font-serif font-bold text-2xl md:text-3xl lg:text-4xl relative">
                <span className="relative z-10">Corporate Sustainability Summit 2024</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </h4>
            </div>
          </div>
          <div className="news-card news-card-right aspect-[16/10] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] group cursor-pointer shadow-xl opacity-0">
            <img src="/images/img4.jpg" alt="News 2" className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8 md:p-10 lg:p-12">
              <h4 className="text-white font-serif font-bold text-2xl md:text-3xl lg:text-4xl relative">
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
