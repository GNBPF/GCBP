import React from 'react';

const supporters = [
  { quote: 'I AM INSPIRED BY THE DEDICATION AND POSITIVE IMPACT THIS NGO BRINGS TO OUR COMMUNITY.', name: 'VERA DESAI', img: '/images/img1.jpg' },
  { quote: 'I AM INSPIRED BY THE DEDICATION AND POSITIVE IMPACT THIS NGO BRINGS TO OUR COMMUNITY.', name: 'VERA DESAI', img: '/images/img2.jpg' },
  { quote: 'I AM INSPIRED BY THE DEDICATION AND POSITIVE IMPACT THIS NGO BRINGS TO OUR COMMUNITY.', name: 'VERA DESAI', img: '/images/img3.jpg' },
  { quote: 'I AM INSPIRED BY THE DEDICATION AND POSITIVE IMPACT THIS NGO BRINGS TO OUR COMMUNITY.', name: 'VERA DESAI', img: '/images/img4.jpg' },
];

export const SupportersSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#163FA5] text-white ripple-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="flex-1 h-0.5 bg-white mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="text-center mb-6 mobile-small:mb-8 xs:mb-10">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 mobile-small:mb-4">OUR SUPPORTERS</h2>
          <p className="text-blue-100 text-sm mobile-small:text-base xs:text-lg sm:text-xl font-medium">
            The backbone of our mission—every story, every impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mobile-small:gap-6 xs:gap-8 sm:gap-10">
          {supporters.map((s, idx) => (
            <div key={idx} className="supporter-card bg-white rounded-xl p-5 mobile-small:p-6 xs:p-7 sm:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1.5">
              <div className="flex items-center gap-3 mobile-small:gap-4 mb-4 mobile-small:mb-5">
                <div className="w-12 h-12 mobile-small:w-14 mobile-small:h-14 xs:w-16 xs:h-16 rounded-full overflow-hidden border-2 border-gcbp-primary">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-gcbp-primary font-bold text-sm mobile-small:text-base xs:text-lg">{s.name}</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm mobile-small:text-base xs:text-lg leading-relaxed font-medium">{s.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
