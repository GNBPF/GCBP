import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  {
    id: 1,
    date: 'SEP 21, 2021',
    location: 'DELHI',
    title: 'GREEN GUARDIAN',
    description: 'Planted Countless Trees, Inspiring Community Towards A Greener Future.',
    image: '/images/img7.jpg',
  },
  {
    id: 2,
    date: 'SEP 27, 2025',
    location: 'DELHI',
    title: 'HOPE GIVER',
    description: 'Distributed Food And Clothes, Bringing Smiles To Struggling Families.',
    image: '/images/img8.jpg',
  },
  {
    id: 3,
    date: 'SEP 27, 2025',
    location: 'DELHI',
    title: 'HOPE GIVER',
    description: 'Distributed Food And Clothes, Bringing Smiles To Struggling Families.',
    image: '/images/img1.jpg',
  },
];

export const AllStoriesSection: React.FC = () => {
  return (
    <section className="all-stories-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2 section-divider"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>

        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gcbp-primary mb-8 mobile-small:mb-10 xs:mb-12 text-center">
          NO SKIPS ALL THE STORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mobile-small:gap-8 xs:gap-10 sm:gap-12 mb-8 mobile-small:mb-10 xs:mb-12">
          {stories.map((story) => (
            <div
              key={story.id}
              className="story-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 mobile-small:mb-5 xs:mb-6">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[250px] mobile-small:h-[280px] xs:h-[320px] sm:h-[360px] md:h-[400px] object-cover group-hover:scale-106 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
              <div className="text-[10px] mobile-small:text-xs xs:text-sm uppercase tracking-wider text-slate-500 mb-2 mobile-small:mb-3">
                {story.date} {story.location}
              </div>
              <h3 className="text-lg mobile-small:text-xl xs:text-2xl sm:text-3xl font-bold text-slate-900 mb-2 mobile-small:mb-3 group-hover:text-gcbp-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-sm mobile-small:text-base xs:text-lg text-slate-600 leading-relaxed">
                {story.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/stories"
            className="read-more-btn inline-block bg-gcbp-primary text-white px-8 mobile-small:px-10 xs:px-12 py-3 mobile-small:py-3.5 xs:py-4 text-sm mobile-small:text-base xs:text-lg font-bold rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};
