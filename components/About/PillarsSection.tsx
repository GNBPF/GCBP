import React from 'react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    { 
      title: 'OUR MISSION', 
      body: 'To catalyze global action for a sustainable future by empowering communities, fostering innovation, and building partnerships that drive meaningful environmental and social change.',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
    },
    { 
      title: 'OUR VISION', 
      body: 'A world where communities thrive in harmony with nature, where sustainable practices are the norm, and where collective action creates lasting positive impact for generations to come.',
      img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80'
    },
    { 
      title: 'OUR FUNDING', 
      body: 'We are supported by individual donations, institutional grants, corporate partnerships, and community-driven crowdfunding initiatives that share our commitment to a better planet.',
      img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80'
    },
    { 
      title: 'OUR CHALLENGES', 
      body: 'We face the challenge of empowering communities with limited resources, scaling local solutions globally, and accelerating measurable climate outcomes in an ever-changing world.',
      img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section className="py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 pillars">
      <div className="max-w-7xl mx-auto w-full space-y-8 mobile-small:space-y-10 xs:space-y-12">
        {pillars.map((pillar, i) => (
          <div key={pillar.title} className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 mobile-small:gap-8 xs:gap-10 items-center">
            <div className={`pillar-img-${i === 0 ? 'top' : i === 1 ? 'mid' : 'bot'} relative overflow-hidden rounded-lg shadow-xl aspect-[4/3]`}>
              <img 
                src={pillar.img} 
                alt={pillar.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="pillar-card">
              <div className="bg-white border-t-2 border-gcbp-primary pt-4 mobile-small:pt-5 xs:pt-6">
                <div className="flex items-center gap-2 mobile-small:gap-3 mb-3 mobile-small:mb-4">
                  <div className="w-2 h-2 rounded-full bg-gcbp-primary"></div>
                  <div className="divider-line flex-1 h-0.5 bg-gcbp-primary origin-left"></div>
                  <div className="w-2 h-2 rounded-full bg-gcbp-primary"></div>
                </div>
                <h3 className="text-xl mobile-small:text-2xl xs:text-3xl sm:text-4xl font-bold text-gcbp-primary mb-3 mobile-small:mb-4">{pillar.title}</h3>
                <p className="text-sm mobile-small:text-base xs:text-lg sm:text-xl text-slate-700 leading-relaxed">{pillar.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
