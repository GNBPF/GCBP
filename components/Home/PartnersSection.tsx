import React from 'react';

export const PartnersSection: React.FC = () => {
  const partners = [
    'Partner Organization',
    'Global Foundation',
    'Sustainability Corp',
    'Community Alliance',
    'Green Initiative',
    'Impact Network',
  ];

  return (
    <section id="partners" className="partners-section py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-7xl mx-auto">
        {/* Section divider */}
        <div className="partners-divider relative mb-12 md:mb-16">
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

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#1F1F22] mb-6 md:mb-8">
            Partners & Collaboration
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#5A5A5F] max-w-3xl mx-auto font-sans leading-relaxed">
            Strategic alliances with institutions, governments, and organizations amplifying our collective impact.
          </p>
        </div>

        {/* Partner names - clean, minimal */}
        <div className="partners-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`partner-item partner-item-${index + 1} opacity-0 text-center`}
            >
              <div className="partner-name text-[#5A5A5F] text-base md:text-lg lg:text-xl font-sans font-normal hover:text-[#163FA5] transition-colors duration-300">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
