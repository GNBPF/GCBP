import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const VisualStoriesSection: React.FC = () => {
  return (
    <section className="visual-stories-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gcbp-primary mb-4 mobile-small:mb-5 xs:mb-6 text-center">
          VISUAL STORIES THAT INSPIRE CHANGE
        </h2>
        <p className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-8 mobile-small:mb-10 xs:mb-12 text-center max-w-4xl mx-auto">
          BECAUSE SOME STORIES NEED TO BE SEEN, NOT JUST READ. THROUGH POWERFUL VISUALS AND REAL MOMENTS, WE CAPTURE THE VOICES, ACTIONS, AND IMPACT BEHIND OUR WORK - BRINGING PURPOSE TO LIFE AND MAKING CHANGE TANGIBLE. WHEN YOU SEE THE IMPACT, YOU FEEL THE RESPONSIBILITY.
        </p>

        {/* Full-Width Image */}
        <div className="visual-image-container relative overflow-hidden rounded-lg shadow-2xl mb-8 mobile-small:mb-10 xs:mb-12">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80"
            alt="Visual Story"
            className="w-full h-[400px] mobile-small:h-[450px] xs:h-[500px] sm:h-[600px] md:h-[700px] object-cover"
            loading="lazy"
          />
        </div>

        <div className="text-center">
          <Link
            to="/stories"
            className="view-more-btn inline-flex items-center gap-2 bg-gcbp-primary text-white px-8 mobile-small:px-10 xs:px-12 py-3 mobile-small:py-3.5 xs:py-4 text-sm mobile-small:text-base xs:text-lg font-bold rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            VIEW MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};
