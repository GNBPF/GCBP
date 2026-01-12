import React from 'react';

export const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      date: 'SEP 28, 2023',
      title: 'STORIES THAT MATTER, STRAIGHT FROM THE GROUND.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      date: 'SEP 28, 2023',
      title: 'INSIGHTS INTO OUR WORK, COMMUNITIES, AND CAUSES.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      date: 'SEP 28, 2023',
      title: 'STAY INFORMED, INSPIRED, AND INVOLVED.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="blog-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
      {/* Decorative Line */}
      <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
        <div className="flex items-center w-full max-w-7xl px-4">
          <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          <div className="flex-1 h-0.5 bg-gcbp-primary mx-2"></div>
          <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <h3 className="text-gcbp-primary font-bold text-[clamp(1.5rem,4vw,2.5rem)] mobile-small:text-[clamp(1.75rem,5vw,3rem)] sm:text-3xl md:text-4xl lg:text-5xl mb-2 mobile-small:mb-3 sm:mb-4">BLOGS AND INSIGHTS</h3>
        <p className="text-slate-700 text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base sm:text-lg md:text-xl mb-8 mobile-small:mb-10 sm:mb-12">
          COMPANY BLOG & INSIGHTS
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mobile-small:gap-8 xs:gap-10 sm:gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl mb-4 mobile-small:mb-5 sm:mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <p className="text-gcbp-primary font-bold text-xs mobile-small:text-sm sm:text-base mb-2 mobile-small:mb-3 uppercase tracking-wider">
                {post.date}
              </p>
              <h4 className="text-slate-900 font-bold text-base mobile-small:text-lg sm:text-xl md:text-2xl leading-tight group-hover:text-gcbp-primary transition-colors flex items-center gap-2">
                <span>{post.title}</span>
                <span className="blog-arrow opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">→</span>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
