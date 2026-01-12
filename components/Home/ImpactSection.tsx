import React from 'react';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
      {/* Decorative Line */}
      <div className="flex items-center justify-center mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="w-2 mobile-small:w-2.5 xs:w-3 h-2 mobile-small:h-2.5 xs:h-3 rounded-full bg-gcbp-primary"></div>
          <div className="flex-1 h-0.5 bg-gcbp-primary mx-2"></div>
          <div className="w-2 mobile-small:w-2.5 xs:w-3 h-2 mobile-small:h-2.5 xs:h-3 rounded-full bg-gcbp-primary"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <h3 className="text-gcbp-primary font-bold text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 mobile-small:mb-3 sm:mb-4 text-center md:text-left">OUR WORK</h3>
        <p className="text-slate-700 text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12 font-medium text-center md:text-left">
          PROUD WE'RE NOT JUST TALKING, WE'RE ACTUALLY DOING THE WORK. RECEIPTS OF OUR GOOD DEEDS
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mobile-small:gap-8 xs:gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-start">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl mb-4 mobile-small:mb-6 xs:mb-8">
              <img src="/images/img2.jpg" alt="Our Work" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-4 mobile-small:space-y-5 xs:space-y-6 sm:space-y-8">
            <div className="bg-white border-2 border-gcbp-primary rounded-lg p-4 mobile-small:p-5 xs:p-6 sm:p-7 md:p-8 shadow-lg">
              <div className="flex items-start justify-between mb-2 mobile-small:mb-3 xs:mb-4">
                <h4 className="text-4xl mobile-small:text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gcbp-primary leading-none">01</h4>
              </div>
              <h5 className="text-lg mobile-small:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 mobile-small:mb-3">
                <span className="count-up-number" data-target="30000">0</span> Trees Planted
              </h5>
              <p className="text-xs mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">Reforesting 10 different countries with sustainable tree planting initiatives.</p>
            </div>
            
            <div className="bg-white border-2 border-gcbp-primary rounded-lg p-4 mobile-small:p-5 xs:p-6 sm:p-7 md:p-8 shadow-lg">
              <div className="flex items-start justify-between mb-2 mobile-small:mb-3 xs:mb-4">
                <h4 className="text-4xl mobile-small:text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gcbp-primary leading-none">02</h4>
              </div>
              <h5 className="text-lg mobile-small:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 mobile-small:mb-3">
                <span className="count-up-number" data-target="10000">0</span> Lives Touched
              </h5>
              <p className="text-xs mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">Campaigns and programs that have directly impacted thousands of lives.</p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 mobile-small:p-5 xs:p-6 sm:p-7 md:p-8 border border-slate-200">
              <h5 className="text-base mobile-small:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 mobile-small:mb-3 xs:mb-4">25 Communities Powered By</h5>
              <p className="text-xs mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 mb-3 mobile-small:mb-4 xs:mb-5 leading-relaxed">
                People turning their lives around and working together globally.
              </p>
              <div className="aspect-[3/2] overflow-hidden rounded-lg">
                <img src="/images/img3.jpg" alt="Community" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
