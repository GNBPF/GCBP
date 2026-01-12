import React from 'react';

const blogPosts = [
  {
    id: 1,
    date: 'SEP 27, 2021',
    category: 'BLOG',
    title: 'STORIES THAT MATTER. STRAIGHT FROM THE GROUND.',
    image: '/images/img8.jpg',
  },
  {
    id: 2,
    date: 'SEP 27, 2021',
    category: 'BLOG',
    title: 'INSIGHTS INTO OUR WORK, COMMUNITIES, AND CAUSES.',
    image: '/images/img1.jpg',
  },
  {
    id: 3,
    date: 'SEP 27, 2021',
    category: 'BLOG',
    title: 'STAY INFORMED, INSPIRED, AND INVOLVED.',
    image: '/images/img2.jpg',
  },
];

export const BlogsSection: React.FC = () => {
  return (
    <section className="blogs-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-8 mobile-small:mb-10 xs:mb-12 sm:mb-14">
          <p className="text-gcbp-primary text-sm mobile-small:text-base xs:text-lg sm:text-xl font-semibold uppercase tracking-wide mb-2 mobile-small:mb-3">BLOGS AND INSIGHTS</p>
          <h2 className="text-gcbp-primary text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl font-bold">COMPANY BLOG & INSIGHTS</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mobile-small:gap-6 xs:gap-7 sm:gap-8 md:gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 mobile-small:mb-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[180px] mobile-small:h-[200px] xs:h-[240px] sm:h-64 md:h-[280px] lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="text-[10px] mobile-small:text-xs xs:text-sm uppercase tracking-wider text-slate-500 mb-2 mobile-small:mb-2.5">
                {post.date} | {post.category}
              </div>
              <h3 className="text-base mobile-small:text-lg xs:text-xl sm:text-2xl font-bold text-slate-900 mb-2 mobile-small:mb-3 group-hover:text-gcbp-primary transition-colors relative">
                {post.title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gcbp-primary transition-all duration-300 group-hover:w-full"></span>
              </h3>
            </div>
          ))}
        </div>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-12 mobile-small:mt-14 xs:mt-16 sm:mt-20">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2 section-divider"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
