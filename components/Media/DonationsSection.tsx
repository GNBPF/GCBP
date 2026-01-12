import React from 'react';
import { Link } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const DonationsSection: React.FC = () => {
  return (
    <section className="donation-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2 section-divider"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 mobile-small:gap-10 xs:gap-12 sm:gap-14 items-start">
          <div className="donation-image relative overflow-hidden rounded-lg shadow-xl">
            <div className="donation-image-mask absolute inset-0 bg-white origin-bottom"></div>
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80"
              alt="Donations"
              className="w-full h-[300px] mobile-small:h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="donation-content">
            <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] mobile-small:text-3xl xs:text-4xl sm:text-5xl font-bold text-gcbp-primary mb-4 mobile-small:mb-5 xs:mb-6">DONATIONS</h2>
            <p className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 mobile-small:mb-8">
              YOUR CONTRIBUTION HELPS DRIVE MEANINGFUL CHANGE. EVERY DONATION SUPPORTS IMPACTFUL INITIATIVES, ENABLING US TO CREATE SUSTAINABLE SOLUTIONS AND REACH COMMUNITIES THAT NEED IT THE MOST.
            </p>
            
            {/* Be a Part of the Change Sidebar */}
            <div className="bg-slate-50 rounded-lg p-5 mobile-small:p-6 xs:p-7 sm:p-8 border border-slate-200 mb-6 mobile-small:mb-8">
              <h3 className="text-lg mobile-small:text-xl xs:text-2xl font-bold text-slate-900 mb-4 mobile-small:mb-5 be-part-title">BE A PART OF THE CHANGE</h3>
              <ul className="space-y-2 mobile-small:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gcbp-primary flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm mobile-small:text-base xs:text-lg text-slate-700">Your Donation Helps Support Meaningful Change, New Health Initiatives, Climate Action, Education, And Training.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gcbp-primary flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm mobile-small:text-base xs:text-lg text-slate-700">Every Contribution Helps Us Create A Better And More Sustainable Future.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gcbp-primary flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm mobile-small:text-base xs:text-lg text-slate-700">Your Generosity Enables Real Action On The Ground And Brings About Positive Change.</span>
                </li>
              </ul>
            </div>
            
            <Link 
              to="/contact" 
              className="donate-btn inline-flex items-center gap-2 bg-white text-gcbp-primary border-2 border-gcbp-primary px-6 mobile-small:px-8 py-3 mobile-small:py-3.5 text-sm mobile-small:text-base xs:text-lg font-bold hover:bg-gcbp-primary hover:text-white transition-all duration-300 rounded-full group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gcbp-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10">Donate</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
