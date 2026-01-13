import React from 'react';

export const SupportSection: React.FC = () => {
  return (
    <section id="cta" className="cta-section py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section divider */}
        <div className="cta-divider relative mb-12 md:mb-16">
          <svg className="w-full h-px" xmlns="http://www.w3.org/2000/svg">
            <line 
              x1="0" 
              y1="0.5" 
              x2="100%" 
              y2="0.5" 
              stroke="#163FA5" 
              strokeWidth="1" 
              className="divider-line"
            />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#1F1F22] mb-8 md:mb-10 lg:mb-12">
          Join the Collective
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-[#5A5A5F] mb-12 md:mb-14 lg:mb-16 max-w-2xl mx-auto leading-relaxed font-sans">
          Together, we can build a sustainable, equitable future. Whether you're an individual, organization, or institution, your partnership matters.
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <button className="cta-primary px-10 py-4 md:px-12 md:py-5 bg-[#163FA5] text-white font-semibold text-base md:text-lg rounded-lg hover:bg-[#0F2E7A] transition-colors duration-300 shadow-lg hover:shadow-xl font-sans">
            Partner With Us
          </button>
          <button className="cta-secondary px-10 py-4 md:px-12 md:py-5 border-2 border-[#163FA5] text-[#163FA5] font-semibold text-base md:text-lg rounded-lg hover:bg-[#163FA5] hover:text-white transition-all duration-300 font-sans">
            Support Our Mission
          </button>
        </div>
      </div>
    </section>
  );
};
