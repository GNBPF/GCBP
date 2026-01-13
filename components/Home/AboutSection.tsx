import React from 'react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Climate Action',
      description: 'Accelerating the transition to renewable energy and reducing carbon emissions through systemic change.',
    },
    {
      title: 'Community Development',
      description: 'Empowering local communities with resources, education, and sustainable infrastructure for long-term resilience.',
    },
    {
      title: 'Education',
      description: 'Inspiring the next generation through environmental education and hands-on learning programs.',
    },
    {
      title: 'Partnerships',
      description: 'Building strategic alliances with institutions, governments, and corporations to amplify impact at scale.',
    },
  ];

  return (
    <section id="what-we-do" className="pillars-section py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-7xl mx-auto">
        {/* Section divider */}
        <div className="pillars-divider relative mb-12 md:mb-16">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1F1F22] mb-4 md:mb-6">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-[#5A5A5F] max-w-3xl mx-auto font-sans leading-relaxed">
            Our work is organized around four core pillars that guide every initiative, partnership, and program we undertake.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`pillar-card pillar-card-${index + 1} opacity-0 bg-white border border-[#E6E6E8] rounded-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1F1F22] mb-4">
                {pillar.title}
              </h3>
              <p className="text-[#5A5A5F] leading-relaxed text-base md:text-lg font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
