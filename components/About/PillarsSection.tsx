import React from 'react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    { 
      title: 'OUR MISSION', 
      body: 'To catalyze global action for a sustainable future by empowering communities, fostering innovation, and building partnerships that drive meaningful environmental and social change.',
      img: '/images/img1.jpg'
    },
    { 
      title: 'OUR VISION', 
      body: 'A world where communities thrive in harmony with nature, where sustainable practices are the norm, and where collective action creates lasting positive impact for generations to come.',
      img: '/images/img2.jpg'
    },
    { 
      title: 'OUR FUNDING', 
      body: 'We are supported by individual donations, institutional grants, corporate partnerships, and community-driven crowdfunding initiatives that share our commitment to a better planet.',
      img: '/images/img3.jpg'
    },
    { 
      title: 'OUR CHALLENGES', 
      body: 'We face the challenge of empowering communities with limited resources, scaling local solutions globally, and accelerating measurable climate outcomes in an ever-changing world.',
      img: '/images/img4.jpg'
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0] pillars">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section divider */}
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
            <div className="flex-1 h-0.5 bg-[#163FA5] mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
          </div>
        </div>

        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {pillars.map((pillar, i) => (
            <div 
              key={pillar.title} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center ${
                i % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image - Alternate sides */}
              <div 
                className={`pillar-img-${i === 0 ? 'top' : i === 1 ? 'mid' : 'bot'} relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] ${
                  i % 2 === 1 ? 'md:col-start-2' : ''
                }`}
              >
                <img 
                  src={pillar.img} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className={`pillar-card ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="bg-white border-t-2 border-[#163FA5] pt-6 md:pt-8">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#163FA5]"></div>
                    <div className="divider-line flex-1 h-0.5 bg-[#163FA5] origin-left"></div>
                    <div className="w-2 h-2 rounded-full bg-[#163FA5]"></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#163FA5] mb-4 md:mb-6">{pillar.title}</h3>
                  <p className="text-base md:text-lg lg:text-xl text-[#5A5A5F] leading-relaxed font-sans">{pillar.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
