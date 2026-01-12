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
    <section className="py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 achievements">
      <div className="max-w-7xl mx-auto w-full">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-6 mobile-small:mb-8">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>

        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gcbp-primary mb-2 mobile-small:mb-3 text-center">ACHIEVEMENTS AND IMPACT</h2>
        <p className="text-slate-600 text-center text-sm mobile-small:text-base xs:text-lg sm:text-xl mb-8 mobile-small:mb-10 xs:mb-12">
          EACH MILESTONE REPRESENTS OUR ACHIEVEMENT AND IMPACT IN ACTION—TURNING IDEAS INTO SUSTAINABLE SOLUTIONS THAT BENEFIT PEOPLE AND THE PLANET.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mobile-small:gap-10 xs:gap-12 items-start">
          <div className="space-y-4 mobile-small:space-y-5 xs:space-y-6">
            <h3 className="text-xl mobile-small:text-2xl xs:text-3xl font-bold text-slate-900">ACHIEVEMENTS</h3>
            <ul className="space-y-3 mobile-small:space-y-4 xs:space-y-5">
              {achievements.map((item, idx) => (
                <li
                  key={idx}
                  className="achievement-item flex items-start gap-3 mobile-small:gap-4"
                >
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gcbp-primary flex-shrink-0"></span>
                  <span className="text-sm mobile-small:text-base xs:text-lg sm:text-xl text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="learn-more-btn inline-flex items-center gap-2 px-6 mobile-small:px-8 py-3 mobile-small:py-4 text-sm mobile-small:text-base border-2 border-gcbp-primary text-gcbp-primary rounded-full hover:bg-gcbp-primary hover:text-white transition-all group">
              Learn More
              <span className="arrow-icon transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="space-y-4 mobile-small:space-y-5 xs:space-y-6">
            <div className="relative overflow-hidden rounded-lg shadow-xl impact-video border border-slate-200 aspect-[4/3]">
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
            
            <div className="space-y-3 mobile-small:space-y-4">
              <h3 className="text-xl mobile-small:text-2xl xs:text-3xl font-bold text-slate-900">Our Impact</h3>
              <p className="text-sm mobile-small:text-base xs:text-lg text-slate-600">
                We work tirelessly to improve lives and protect our planet through sustainable solutions and community empowerment.
              </p>
              
              <div className="mt-4 mobile-small:mt-5 xs:mt-6">
                <h4 className="text-lg mobile-small:text-xl xs:text-2xl font-bold text-slate-900 mb-3 mobile-small:mb-4">Changes, One Project At A Time.</h4>
                <ul className="space-y-2 mobile-small:space-y-3">
                  {impactStats.map((stat, idx) => (
                    <li key={idx} className="flex items-center gap-2 mobile-small:gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-gcbp-primary flex-shrink-0"></span>
                      <span className="text-sm mobile-small:text-base xs:text-lg text-slate-700">
                        <span className="font-bold">{stat.value.toLocaleString()}{stat.suffix}</span> {stat.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col xs:flex-row gap-3 mobile-small:gap-4 cta-buttons pt-4 mobile-small:pt-5">
                <Link to="/contact" className="cta-btn px-6 mobile-small:px-8 py-3 mobile-small:py-4 text-sm mobile-small:text-base bg-gcbp-primary text-white rounded-full shadow-md hover:bg-blue-800 transition-all hover:scale-103 hover:shadow-lg hover:shadow-blue-900/30 text-center">
                  Donate
                </Link>
                <Link to="/contact" className="cta-btn px-6 mobile-small:px-8 py-3 mobile-small:py-4 text-sm mobile-small:text-base bg-white text-gcbp-primary border-2 border-gcbp-primary rounded-full hover:bg-blue-50 transition-all hover:scale-103 text-center">
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
