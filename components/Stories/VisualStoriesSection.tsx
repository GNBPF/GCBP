import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const VisualStoriesSection: React.FC = () => {
  return (
    <section className="visual-stories-section py-12 xs:py-16 sm:py-20 md:py-24 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gcbp-primary mb-4 xs:mb-6 text-center">
          VISUAL STORIES THAT INSPIRE CHANGE
        </h2>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 xs:mb-8 sm:mb-10 md:mb-12 text-center max-w-4xl mx-auto px-2">
          BECAUSE SOME STORIES NEED TO BE SEEN, NOT JUST READ. THROUGH POWERFUL VISUALS AND REAL MOMENTS, WE CAPTURE THE VOICES, ACTIONS, AND IMPACT BEHIND OUR WORK - BRINGING PURPOSE TO LIFE AND MAKING CHANGE TANGIBLE. WHEN YOU SEE THE IMPACT, YOU FEEL THE RESPONSIBILITY.
        </p>

        {/* Full-Width Image with Parallax Container */}
        <div className="visual-image-container relative overflow-hidden rounded-lg shadow-2xl mb-6 xs:mb-8 sm:mb-10 md:mb-12 h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px]">
          <img
            src="/images/img2.jpg"
            alt="Visual Story"
            className="visual-parallax-image absolute inset-0 w-full h-[120%] object-cover"
            loading="lazy"
          />
        </div>

        <div className="text-center">
          <Link
            to="/stories"
            className="view-more-btn inline-flex items-center gap-2 bg-gcbp-primary text-white px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg font-bold rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-105 active:scale-95 group min-h-[44px]"
          >
            VIEW MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};
