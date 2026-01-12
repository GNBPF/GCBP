import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '../components/Programs/HeroSection';
import { ProgramsTimelineSection } from '../components/Programs/ProgramsTimelineSection';
import { CommunitySection } from '../components/Programs/CommunitySection';
import { CTASection } from '../components/Programs/CTASection';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    id: 'conservation',
    title: 'Conservation',
    description: 'Protecting marine ecosystems and coastal communities through sustainable practices and habitat restoration.',
    imagePosition: 'left',
    images: [
      '/images/img3.jpg',
      '/images/img4.jpg',
      '/images/img5.jpg',
    ],
  },
  {
    id: 'clean-energy',
    title: 'Clean Energy',
    description: 'Accelerating the transition to renewable energy sources, empowering communities with solar and wind solutions.',
    imagePosition: 'right',
    images: [
      '/images/img6.jpg',
      '/images/img7.jpg',
      '/images/img8.jpg',
    ],
  },
  {
    id: 'education',
    title: 'Environmental Education',
    description: 'Inspiring the next generation of environmental stewards through hands-on learning and nature immersion programs.',
    imagePosition: 'right',
    images: [
      '/images/img1.jpg',
      '/images/img2.jpg',
      '/images/img3.jpg',
    ],
  },
  {
    id: 'agriculture',
    title: 'Sustainable Agriculture',
    description: 'Supporting regenerative farming practices that restore soil health and ensure food security for future generations.',
    imagePosition: 'left',
    images: [
      '/images/img4.jpg',
      '/images/img5.jpg',
      '/images/img6.jpg',
    ],
  },
];

export const Programs: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Initial refresh for responsive setup
      ScrollTrigger.refresh();
      // ===== 1. PAGE LOAD — "OUR PROGRAMS" HEADING =====
      // Set initial state
      gsap.set('.hero-title', { opacity: 0, scale: 0.96 });
      
      // Heading animation: Opacity 0 → 100, Scale 0.96 → 1, Duration: 0.8s
      gsap.to('.hero-title', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Outline text stroke: Stroke opacity animates in slightly after fill (100ms delay)
      // (Handled by CSS if using stroke, otherwise skip)

      // ===== 2. BLUE TIMELINE SECTION =====
      // A. Timeline Spine (Vertical Line + Dots)
      // Timeline line: Height animates with scroll, grows top → bottom
        gsap.fromTo('.timeline-line', 
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
          ease: 'none',
            scrollTrigger: {
              trigger: '.timeline-container',
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            invalidateOnRefresh: true
          }
        }
      );

      // B. Background Bubble Pattern
      // Subtle parallax: Moves slower than content (0.7x)
      gsap.to('.bubble-pattern', {
        y: (i, target) => {
          return ScrollTrigger.maxScroll(window) * 0.3; // 0.7x means 30% movement
        },
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // Very light opacity pulse: 6% → 8%, Duration: 25–30s loop
      gsap.to('.bubble-pattern', {
        opacity: 0.08,
        duration: 28,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      // ===== 3. PROGRAM BLOCKS =====
      programs.forEach((program, index) => {
        const programSelector = `#${program.id}`;
        const cardSelector = `${programSelector} .program-card`;
        const imageSelector = `${programSelector} .program-image`;
        const dotSelector = `${programSelector} .timeline-dot`;
        const dividerSelector = `${programSelector} .divider-line`;

        // A. Program Text Card (White Box)
        // Set initial states
        gsap.set(cardSelector, { opacity: 0, y: 24 });
        gsap.set(dividerSelector, { scaleX: 0 });
        
        // On scroll into view: Fade in, Slide from timeline side, Y offset: 24px
        gsap.to(cardSelector, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: programSelector,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        });

        // Divider inside card: Width animates 0 → 100%
        gsap.to(dividerSelector, {
          scaleX: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: programSelector,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        });

        // Card hover: Very subtle lift (Y: -4px), Soft shadow increase (handled by CSS)

        // B. Image Clusters (Stacked Photos)
        // Set initial states
        gsap.set(imageSelector, { opacity: 0, scale: 0.95 });
        
        // Entry: Images animate one-by-one, Fade + scale 0.95 → 1
        gsap.to(imageSelector, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: programSelector,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        });

        // Z-depth illusion: Front image slightly larger (handled by CSS)
        // Hover: Individual image zoom 1 → 1.05, Others dim to 80% (handled by CSS)

        // Timeline dot activation
        // Active node: Scales 1 → 1.3, Changes color slightly (lighter blue)
        // Inactive nodes: Opacity 60%
        gsap.to(dotSelector, {
          scale: 1.3,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: programSelector,
            start: 'top 60%',
            end: 'bottom 40%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        });

        // Set inactive dots to 60% opacity
        gsap.utils.toArray<HTMLElement>('.timeline-dot').forEach((dot, i) => {
          if (i !== index) {
            gsap.set(dot, { opacity: 0.6 });
          }
        });
      });

      // ===== 4. TRANSITION BETWEEN PROGRAMS =====
      // Dotted timeline section: Dots animate downward as scroll continues
      // Small pause zone (white space): No animation (handled by spacing)

      // ===== 5. "BE PART OF THE CHANGE" IMAGE GRID =====
      // Set initial states
      gsap.set('.community-grid img', { opacity: 0 });
      
      // Grid reveal: Images fade in in a diagonal sequence
      gsap.to('.community-grid img', {
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          grid: 'auto',
          from: 'start'
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.community-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Hover: Image lifts slightly, Soft shadow (handled by CSS)

      // ===== 6. "LET'S DO THIS TOGETHER" CTA =====
      // Set initial states
      gsap.set('.cta-title', { opacity: 0, y: 20 });
      gsap.set('.cta-button', { opacity: 0, scale: 0.9 });
      
      // Text: Fade + slight upward motion
      gsap.to('.cta-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Buttons: Slight stagger entry (80ms each)
      gsap.to('.cta-button', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Hover: Scale 1 → 1.04, Background color deepens (handled by CSS)
      // Click: Press effect (scale 0.96) (handled by CSS active:scale-96)

      // ===== 7. FOOTER =====
      // (Already handled in Footer component)

    }, rootRef);

    // Handle window resize for responsive animations
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={rootRef} className="relative bg-white">
      <style>{`
        .program-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .program-image:first-child {
          transform: scale(1.02);
          z-index: 2;
        }
        .program-image:hover {
          transform: scale(1.05);
          z-index: 3;
        }
        .program-image:hover ~ .program-image {
          opacity: 0.8;
        }
        .community-grid img:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .cta-button:hover {
          transform: scale(1.04);
          background-color: #1e3a8a;
        }
      `}</style>
      <HeroSection />
      <ProgramsTimelineSection />
      <CommunitySection />
      <CTASection />
    </div>
  );
};

export default Programs;