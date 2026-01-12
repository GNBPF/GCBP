import React from 'react';

const programs = [
  {
    id: 'conservation',
    title: 'Conservation',
    description: 'Protecting marine ecosystems and coastal communities through sustainable practices and habitat restoration.',
    imagePosition: 'left',
    images: [
      '/images/img7.jpg',
      '/images/img8.jpg',
      '/images/img1.jpg',
    ],
  },
  {
    id: 'clean-energy',
    title: 'Clean Energy',
    description: 'Accelerating the transition to renewable energy sources, empowering communities with solar and wind solutions.',
    imagePosition: 'right',
    images: [
      '/images/img2.jpg',
      '/images/img3.jpg',
      '/images/img4.jpg',
    ],
  },
  {
    id: 'education',
    title: 'Environmental Education',
    description: 'Inspiring the next generation of environmental stewards through hands-on learning and nature immersion programs.',
    imagePosition: 'right',
    images: [
      '/images/img5.jpg',
      '/images/img6.jpg',
      '/images/img7.jpg',
    ],
  },
  {
    id: 'agriculture',
    title: 'Sustainable Agriculture',
    description: 'Supporting regenerative farming practices that restore soil health and ensure food security for future generations.',
    imagePosition: 'left',
    images: [
      '/images/img8.jpg',
      '/images/img1.jpg',
      '/images/img2.jpg',
    ],
  },
];

export const ProgramsTimelineSection: React.FC = () => {
  return (
    <section className="relative bg-gcbp-primary py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16">
      <div className="timeline-container relative max-w-7xl mx-auto px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Background Bubble Pattern */}
        <div className="absolute inset-0 pointer-events-none bubble-pattern">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06)_0%,transparent_50%)]"></div>
        </div>
        
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block">
          <div className="timeline-line h-full bg-white/40 origin-top"></div>
        </div>

        {/* Program Blocks */}
        {programs.map((program, index) => (
          <div
            key={program.id}
            id={program.id}
            className="relative py-12 mobile-small:py-14 xs:py-16 sm:py-20 md:py-24 flex items-center gap-5 mobile-small:gap-6 xs:gap-8 sm:gap-10"
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 mobile-small:w-7 xs:w-8 h-6 mobile-small:h-7 xs:h-8 rounded-full bg-white/60 border-2 mobile-small:border-3 xs:border-4 border-gcbp-primary z-10 timeline-dot shadow-lg hidden md:block"></div>

            <div
              className={`flex-1 flex flex-col md:flex-row items-center gap-6 mobile-small:gap-8 xs:gap-10 sm:gap-12 ${
                program.imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Images */}
              <div className="flex-1 w-full grid grid-cols-2 gap-3 mobile-small:gap-4">
                {program.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`program-image overflow-hidden rounded-lg shadow-2xl ${
                      imgIndex === 0 ? 'col-span-2 h-[180px] mobile-small:h-[200px] xs:h-[240px] sm:h-[280px] md:h-64 lg:h-[300px] xl:h-[360px]' : 'h-[140px] mobile-small:h-[160px] xs:h-[180px] sm:h-[200px] md:h-48 lg:h-[220px] xl:h-[260px]'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${program.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Program Card */}
              <div className="flex-1 w-full">
                <div className="program-card bg-white rounded-2xl p-5 mobile-small:p-6 xs:p-8 sm:p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] mobile-small:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gcbp-primary mb-3 mobile-small:mb-4 xs:mb-5">
                    {program.title}
                  </h2>
                  <div className="divider-line h-0.5 bg-gcbp-primary mb-4 mobile-small:mb-5 origin-left scale-x-0"></div>
                  <p className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
