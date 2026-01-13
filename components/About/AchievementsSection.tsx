import React from 'react';
import { Link } from 'react-router-dom';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    'UN SDG RECOGNITION AWARD 2024',
    '"GREEN CITIES FOR ALL" PILOT SCALED TO 12 COUNTRIES',
    'PUBLISHED 40+ RESEARCH PAPERS ON CLIMATE SOLUTIONS',
  ];

  const impactStats = [
    { label: 'Trees Planted', value: 5000000, suffix: '+' },
    { label: 'Projects', value: 120, suffix: '+' },
    { label: 'Countries', value: 10, suffix: '' },
    { label: 'Homes with Clean Water', value: 350, suffix: '+' },
    { label: 'Students Educated', value: 20000, suffix: '+' },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0] achievements">
      <div className="max-w-7xl mx-auto w-full">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
            <div className="flex-1 h-0.5 bg-[#163FA5] mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#163FA5] mb-4 md:mb-6 text-center">ACHIEVEMENTS AND IMPACT</h2>
        <p className="text-[#5A5A5F] text-center text-base md:text-lg lg:text-xl mb-12 md:mb-16 max-w-3xl mx-auto font-sans">
          EACH MILESTONE REPRESENTS OUR ACHIEVEMENT AND IMPACT IN ACTION—TURNING IDEAS INTO SUSTAINABLE SOLUTIONS THAT BENEFIT PEOPLE AND THE PLANET.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1F1F22]">ACHIEVEMENTS</h3>
            <ul className="space-y-4 md:space-y-6">
              {achievements.map((item, idx) => (
                <li
                  key={idx}
                  className="achievement-item flex items-start gap-4"
                >
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#163FA5] flex-shrink-0"></span>
                  <span className="text-base md:text-lg lg:text-xl text-[#1F1F22] font-medium font-sans">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="learn-more-btn inline-flex items-center gap-2 px-8 py-4 text-base md:text-lg border-2 border-[#163FA5] text-[#163FA5] rounded-lg hover:bg-[#163FA5] hover:text-white transition-all group font-sans">
              Learn More
              <span className="arrow-icon transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="relative overflow-hidden rounded-lg shadow-xl impact-video border border-[#E6E6E8] aspect-[4/3]">
              <video
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay
              >
                <source src="/images/vid3.mp4" type="video/mp4" />
              </video>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1F1F22]">Our Impact</h3>
              <p className="text-base md:text-lg lg:text-xl text-[#5A5A5F] font-sans">
                We work tirelessly to improve lives and protect our planet through sustainable solutions and community empowerment.
              </p>
              
              <div className="mt-6 md:mt-8">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#1F1F22] mb-4 md:mb-6">Changes, One Project At A Time.</h4>
                <ul className="space-y-3 md:space-y-4">
                  {impactStats.map((stat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#163FA5] flex-shrink-0"></span>
                      <span className="text-base md:text-lg lg:text-xl text-[#1F1F22] font-sans">
                        <span className="font-bold">{stat.value.toLocaleString()}{stat.suffix}</span> {stat.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 cta-buttons pt-6 md:pt-8">
                <Link to="/contact" className="cta-btn px-8 py-4 text-base md:text-lg bg-[#163FA5] text-white rounded-lg shadow-md hover:bg-[#0F2E7A] transition-all hover:scale-105 hover:shadow-lg text-center font-sans">
                  Donate
                </Link>
                <Link to="/contact" className="cta-btn px-8 py-4 text-base md:text-lg bg-white text-[#163FA5] border-2 border-[#163FA5] rounded-lg hover:bg-[#FFFAF0] transition-all hover:scale-105 text-center font-sans">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
