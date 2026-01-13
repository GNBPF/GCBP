import React from 'react';

export const RevealSection: React.FC = () => {
  const statements = [
    'We are a purpose-led collective uniting communities, innovators, and institutions to build a healthier planet.',
    'We believe that real change begins with collective action and responsible stewardship of our shared future.',
    'Every collaboration, every project, and every voice moves us closer to a sustainable, equitable world.',
  ];

  return (
    <section id="mission" className="mission-section py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-5xl mx-auto">
        {/* Thin blue divider */}
        <div className="mission-divider relative mb-12 md:mb-16">
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

        {/* Mission statements */}
        <div className="mission-statements space-y-12 md:space-y-16 lg:space-y-20">
          {statements.map((statement, index) => (
            <div 
              key={index} 
              className={`mission-statement mission-statement-${index + 1} opacity-0`}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#1F1F22] leading-[1.3]">
                {statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
