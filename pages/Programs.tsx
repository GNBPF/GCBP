import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    id: 'conservation',
    title: 'Conservation',
    description: 'Protecting marine ecosystems and coastal communities through sustainable practices and habitat restoration.',
    imagePosition: 'left',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'clean-energy',
    title: 'Clean Energy',
    description: 'Accelerating the transition to renewable energy sources, empowering communities with solar and wind solutions.',
    imagePosition: 'right',
    images: [
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'education',
    title: 'Environmental Education',
    description: 'Inspiring the next generation of environmental stewards through hands-on learning and nature immersion programs.',
    imagePosition: 'right',
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'agriculture',
    title: 'Sustainable Agriculture',
    description: 'Supporting regenerative farming practices that restore soil health and ensure food security for future generations.',
    imagePosition: 'left',
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

const communityImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
];

export const Programs: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.from('.hero-title', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Background watermark rotation
      gsap.to('.watermark', {
        rotation: 6,
        duration: 25,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });

        // Timeline line growth
        gsap.fromTo('.timeline-line', 
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            scrollTrigger: {
              trigger: '.timeline-container',
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          }
        );

      // Program blocks animations
      programs.forEach((program, index) => {
        const programSelector = `#${program.id}`;
        const cardSelector = `${programSelector} .program-card`;
        const imageSelector = `${programSelector} .program-image`;
        const dotSelector = `${programSelector} .timeline-dot`;

        // Card animation
        gsap.from(cardSelector, {
          x: program.imagePosition === 'left' ? 40 : -40,
          opacity: 0,
          duration: 0.45,
          scrollTrigger: {
            trigger: programSelector,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });

        // Images stagger animation
        gsap.from(`${imageSelector}`, {
          y: 20,
          opacity: 0,
          scale: 0.94,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: programSelector,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });

        // Parallax effect on images
        gsap.to(`${imageSelector}`, {
          y: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: programSelector,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        // Timeline dot activation
        gsap.to(dotSelector, {
          scale: 1.4,
          opacity: 1,
          boxShadow: '0 0 20px rgba(255,255,255,0.8)',
          scrollTrigger: {
            trigger: programSelector,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: true,
          },
        });
      });

      // Community section transition
      gsap.from('.community-grid img', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.community-section',
          start: 'top 80%',
        },
      });

      // CTA buttons animation
      gsap.from('.cta-button', {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative">
      {/* Hero Section */}
      <section className="relative bg-gcbp-primary min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="watermark w-[800px] h-[800px] rounded-full border-4 border-white/10 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-white/5"></div>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title relative z-10 text-[clamp(4rem,12vw,10rem)] font-black text-transparent stroke-2 stroke-white text-center leading-none">
          OUR PROGRAMS
        </h1>
      </section>

      {/* Programs Timeline Section */}
      <section className="relative bg-gcbp-primary py-32">
        <div className="timeline-container relative max-w-7xl mx-auto px-6 md:px-12">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="timeline-line h-full bg-white/40" style={{ borderLeft: '2px dashed rgba(255,255,255,0.5)' }}></div>
          </div>

          {/* Program Blocks */}
          {programs.map((program, index) => (
            <div
              key={program.id}
              id={program.id}
              className="relative py-32 flex items-center gap-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-gcbp-primary z-10 timeline-dot opacity-50 shadow-lg"></div>

              <div
                className={`flex-1 flex items-center gap-12 ${
                  program.imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Images */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {program.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`program-image overflow-hidden rounded-lg shadow-2xl ${
                        imgIndex === 0 ? 'col-span-2 h-64' : 'h-48'
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
                <div className="flex-1">
                  <div className="program-card bg-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300 cursor-pointer hover:-translate-y-1">
                    <h2 className="text-4xl font-bold text-gcbp-primary mb-4">
                      {program.title}
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transition Section - Be Part of the Change */}
      <section className="community-section bg-[#f3f3f3] py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-slate-900 mb-16">
            BE PART OF THE CHANGE
          </h2>
          <p className="text-xl text-center text-slate-700 mb-16 max-w-3xl mx-auto">
            At the Heart of All We Do: Building Sustainable Communities Through Collective Action
          </p>

          {/* Masonry Grid */}
          <div className="community-grid grid grid-cols-2 md:grid-cols-3 gap-4">
            {communityImages.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg shadow-lg group cursor-pointer ${
                  index === 0 ? 'md:row-span-2' : index === 3 ? 'md:row-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden h-full">
                  <img
                    src={img}
                    alt={`Community ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-white py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-12">
            LET'S DO THIS TOGETHER!
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="cta-button bg-gcbp-primary text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg">
              Donate
            </button>
            <button className="cta-button bg-gcbp-primary text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg">
              Volunteer
            </button>
            <button className="cta-button bg-gcbp-primary text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg">
              Sponsor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

