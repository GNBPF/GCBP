import React from 'react';
import { Link } from 'react-router-dom';

export const SponsorshipSection: React.FC = () => {
  const benefits = [
    'Demonstrate leadership by turning your CSR commitments into visible, measurable impact while building trust with communities and stakeholders.',
    'Branding On Event Assets & Media',
    'Impact Reports For Your CSR Records',
    'On-Ground Engagement Opportunities For Employees',
  ];

  return (
    <section className="sponsorship-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2 section-divider"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 mobile-small:gap-10 xs:gap-12 sm:gap-14 items-start">
          <div className="sponsorship-image order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Corporate Sponsorship"
              className="w-full h-[300px] mobile-small:h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="sponsorship-content order-1 md:order-2">
            <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] mobile-small:text-3xl xs:text-4xl sm:text-5xl font-bold text-gcbp-primary mb-4 mobile-small:mb-5 xs:mb-6">CORPORATE SPONSORSHIP</h2>
            <p className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 mobile-small:mb-8">
              BUSINESSES THAT CARE, LEAD, SUPPORT OUR EVENTS AS A CORPORATE SPONSOR AND ALIGN YOUR BRAND WITH REAL WORLD CLIMATE ACTION, EDUCATION, AND SUSTAINABILITY IMPACT.
            </p>
            
            {/* Be a Part of the Change Sidebar */}
            <div className="bg-slate-50 rounded-lg p-5 mobile-small:p-6 xs:p-7 sm:p-8 border border-slate-200 mb-6 mobile-small:mb-8">
              <h3 className="text-lg mobile-small:text-xl xs:text-2xl font-bold text-slate-900 mb-4 mobile-small:mb-5 be-part-title">BE A PART OF THE CHANGE</h3>
              <ul className="space-y-2 mobile-small:space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="sponsorship-benefit flex items-start gap-2 opacity-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-gcbp-primary flex-shrink-0 mt-1.5"></span>
                    <span className="text-sm mobile-small:text-base xs:text-lg text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              to="/contact" 
              className="sponsor-btn inline-block border-2 border-gcbp-primary text-gcbp-primary px-6 mobile-small:px-8 py-3 mobile-small:py-3.5 text-sm mobile-small:text-base xs:text-lg font-bold hover:bg-gcbp-primary hover:text-white transition-all duration-300 active:scale-96 rounded-full"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
