import React from 'react';

export const GalleryStrip: React.FC = () => {
  const programs = [
    {
      title: 'Renewable Energy Initiative',
      description: 'Accelerating the transition to clean energy sources in underserved communities.',
    },
    {
      title: 'Education for Sustainability',
      description: 'Empowering the next generation with knowledge and tools for environmental stewardship.',
    },
    {
      title: 'Community Resilience',
      description: 'Building sustainable infrastructure and systems for long-term community resilience.',
    },
  ];

  return (
    <section id="programs" className="programs-section py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-7xl mx-auto">
        {/* Section divider */}
        <div className="programs-divider relative mb-12 md:mb-16">
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
            Programs & Initiatives
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#5A5A5F] max-w-3xl mx-auto font-sans leading-relaxed">
            Real work, real impact. Our programs address critical challenges through systemic, sustainable solutions.
          </p>
        </div>

        {/* Programs cards */}
        <div className="programs-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`program-card program-card-${index + 1} opacity-0 bg-white border border-[#E6E6E8] rounded-lg p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#1F1F22] mb-4 md:mb-6">
                {program.title}
              </h3>
              <p className="text-[#5A5A5F] leading-relaxed text-base md:text-lg font-sans">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
