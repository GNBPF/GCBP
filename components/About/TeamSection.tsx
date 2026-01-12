import React from 'react';

const team = [
  { name: 'Ava Patel', role: 'Impact Lead', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
  { name: 'Liam Chen', role: 'Partnerships', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80&sat=-50' },
  { name: 'Maya Rivera', role: 'Programs', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80&hue=20' },
  { name: 'Noah Kim', role: 'Advocacy', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80&sat=10' },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-slate-50">
      <div className="max-w-7xl mx-auto w-full">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-6 mobile-small:mb-8">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>

        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gcbp-primary mb-2 mobile-small:mb-3 text-center">OUR TEAM</h2>
        <p className="text-slate-600 text-center text-sm mobile-small:text-base xs:text-lg sm:text-xl mb-8 mobile-small:mb-10 xs:mb-12">
          A STRONG SUPPORT PLAN DRIVING COLLABORATION, EFFICIENCY, AND SHARED SUCCESS.
        </p>
        
        <div className="team-carousel-container relative">
          <div className="team-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mobile-small:gap-6 xs:gap-8 sm:gap-10">
            {team.map((member, idx) => (
              <div key={idx} className="team-card bg-white rounded-lg p-4 mobile-small:p-5 xs:p-6 shadow-md hover:shadow-xl transition-all opacity-90 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-104">
                <div className="overflow-hidden rounded-lg aspect-square mb-4 mobile-small:mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 text-sm mobile-small:text-base xs:text-lg">{member.name}</p>
                  <p className="text-xs mobile-small:text-sm xs:text-base text-slate-600 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8 mobile-small:mt-10">
            {[0, 1, 2, 3].map((dot) => (
              <div key={dot} className={`team-dot w-2 h-2 rounded-full ${dot === 0 ? 'bg-gcbp-primary' : 'bg-slate-300'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
