import React from 'react';

export const ImpactSection: React.FC = () => {
  const metrics = [
    {
      value: 30000,
      label: 'Trees Planted',
      description: 'Reforesting communities across 10 countries',
      suffix: '+'
    },
    {
      value: 10000,
      label: 'Lives Touched',
      description: 'Direct impact through our programs and campaigns',
      suffix: '+'
    },
    {
      value: 25,
      label: 'Communities',
      description: 'Empowered with sustainable infrastructure',
      suffix: ''
    },
    {
      value: 50,
      label: 'Partnerships',
      description: 'Strategic alliances amplifying our impact',
      suffix: '+'
    },
  ];

  return (
    <section id="impact" className="impact-section py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-7xl mx-auto">
        {/* Section divider */}
        <div className="impact-divider relative mb-12 md:mb-16">
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
            Our Impact
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#5A5A5F] max-w-3xl mx-auto font-sans leading-relaxed">
            Measurable outcomes that reflect our commitment to creating lasting, positive change.
          </p>
        </div>

        {/* Impact metrics grid */}
        <div className="impact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`impact-metric impact-metric-${index + 1} opacity-0`}
            >
              <div className="metric-value-wrapper mb-6 md:mb-8">
                <div className="flex items-baseline gap-2 md:gap-3">
                  <span 
                    className="metric-value text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-[#163FA5] count-up-number" 
                    data-target={metric.value}
                  >
                    0
                  </span>
                  {metric.suffix && (
                    <span className="metric-suffix text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#163FA5]">
                      {metric.suffix}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#1F1F22] mb-3 md:mb-4">
                {metric.label}
              </h3>
              <p className="text-[#5A5A5F] text-base md:text-lg leading-relaxed font-sans mb-6">
                {metric.description}
              </p>
              
              {/* Progress line */}
              <div className="progress-line-wrapper mt-6">
                <svg className="w-full h-1" xmlns="http://www.w3.org/2000/svg">
                  <line 
                    x1="0" 
                    y1="0.5" 
                    x2="100%" 
                    y2="0.5" 
                    stroke="#E6E6E8" 
                    strokeWidth="1"
                  />
                  <line 
                    x1="0" 
                    y1="0.5" 
                    x2="100%" 
                    y2="0.5" 
                    stroke="#163FA5" 
                    strokeWidth="1" 
                    className="progress-line"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
