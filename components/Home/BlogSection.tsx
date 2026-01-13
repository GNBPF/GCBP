import React from 'react';

export const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      date: 'SEP 28, 2023',
      title: 'STORIES THAT MATTER, STRAIGHT FROM THE GROUND.',
      image: '/images/img4.jpg',
    },
    {
      id: 2,
      date: 'SEP 28, 2023',
      title: 'INSIGHTS INTO OUR WORK, COMMUNITIES, AND CAUSES.',
      image: '/images/img5.jpg',
    },
    {
      id: 3,
      date: 'SEP 28, 2023',
      title: 'STAY INFORMED, INSPIRED, AND INVOLVED.',
      image: '/images/img6.jpg',
    },
  ];

  return (
    <section className="blog-section py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-7xl mx-auto">
        {/* Section divider */}
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
            <div className="flex-1 h-0.5 bg-[#163FA5] mx-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#163FA5]"></div>
          </div>
        </div>
        
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#163FA5] mb-6 md:mb-8">
            Blogs & Insights
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-[#5A5A5F] max-w-3xl mx-auto font-sans leading-relaxed">
            Company blog & insights
          </p>
        </div>
        
        {/* Blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card group cursor-pointer opacity-0">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg mb-6 md:mb-8 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <p className="text-[#163FA5] font-sans font-bold text-sm md:text-base uppercase tracking-wider mb-3 md:mb-4">
                {post.date}
              </p>
              <h4 className="text-[#1F1F22] font-serif font-bold text-lg md:text-xl lg:text-2xl leading-tight group-hover:text-[#163FA5] transition-colors flex items-center gap-2">
                <span>{post.title}</span>
                <span className="blog-arrow opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300 text-xl md:text-2xl">→</span>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
