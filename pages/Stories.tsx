import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '../components/Stories/HeroSection';
import { AllStoriesSection } from '../components/Stories/AllStoriesSection';
import { VisualStoriesSection } from '../components/Stories/VisualStoriesSection';
import { PlanetOfStoriesSection } from '../components/Stories/PlanetOfStoriesSection';

gsap.registerPlugin(ScrollTrigger);

export const Stories: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // ===== 1. MOSAIC IMAGE GRID (Top Left) =====
      // Images appear asynchronously: Opacity 0 → 100, Scale 0.95 → 1, Duration: 0.6s, Randomized delay (0–0.4s)
      gsap.utils.toArray<HTMLElement>('.mosaic-tile').forEach((tile, index) => {
        gsap.set(tile, { opacity: 0, scale: 0.95 });
        const randomDelay = Math.random() * 0.4;
        gsap.to(tile, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: randomDelay,
          ease: 'power2.out'
        });
      });

      // Hover: Image slightly lifts (Y: 0 → -6px), Shadow softens (handled by CSS)

      // ===== 2. "PLANET OF STORIES" TEXT BLOCK (Right) =====
      // Heading: Appears after images settle, Opacity 0 → 100, Y: +24px → 0, Letter spacing: +2% → 0
      gsap.set('.hero-title', { opacity: 0, y: 24, letterSpacing: '0.02em' });
      gsap.to('.hero-title', {
        opacity: 1,
        y: 0,
        letterSpacing: '0',
        duration: 0.8,
        delay: 0.8, // After images settle
        ease: 'power2.out'
      });

      // Paragraph: Fade only (no movement), Delay: 0.25s
      gsap.set('.hero-description', { opacity: 0 });
      gsap.to('.hero-description', {
        opacity: 1,
        duration: 0.8,
        delay: 1.05, // 0.8 + 0.25
        ease: 'power2.out'
      });

      // Buttons: Slide in from bottom
      gsap.set('.read-btn, .submit-btn', { opacity: 0, y: 20 });
      gsap.to('.read-btn, .submit-btn', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 1.3,
        ease: 'power2.out'
      });

      // Hover: Fill animates left → right, Text color inverts (handled by CSS)

      // ===== 3. DIVIDER LINE =====
      // Width: 0% → 100%, Trigger: When section is 40% in viewport, Duration: 0.6s
      gsap.utils.toArray<HTMLElement>('.section-divider').forEach((divider) => {
        gsap.set(divider, { scaleX: 0, transformOrigin: 'left center' });
        gsap.to(divider, {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: divider,
            start: 'top 60%', // 40% in viewport
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        });
      });

      // ===== 4. "ALL THE STORIES" (3 Story Cards) =====
      // Card Entry: Triggered on scroll, Each card: Opacity 0 → 100, Y: +32px → 0, Stagger: 0.15s
      gsap.set('.story-card', { opacity: 0, y: 32 });
      gsap.to('.story-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.all-stories-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Image Hover: Scale 1 → 1.06, Subtle blur: 0 → 1px (handled by CSS)
      // Click Transition: Smart Animate (handled by React routing)

      // ===== 5. "VISUAL STORIES THAT INSPIRE CHANGE" =====
      // Heading: Fade + slight Y movement
      gsap.set('.visual-stories-section h2', { opacity: 0, y: 20 });
      gsap.to('.visual-stories-section h2', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.visual-stories-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Full-Width Image: Parallax effect (Image scrolls slower than page), Very subtle zoom-in on scroll (1 → 1.04)
      gsap.to('.visual-image-container img', {
        y: (i, target) => {
          return ScrollTrigger.maxScroll(window) * 0.2; // Slower than page
        },
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: '.visual-image-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // CTA Button: Hover arrow nudges right, Button glows slightly (handled by CSS)

      // ===== 6. #PLANETOFSTORIES SECTION (Blue Background) =====
      // Section Reveal: Background wave/gradient fades in from bottom
      gsap.set('.planet-bg', { opacity: 0, y: 50 });
      gsap.to('.planet-bg', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.planet-stories-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Hashtag text: Opacity 0 → 100, Scale 0.97 → 1
      gsap.set('.planet-title', { opacity: 0, scale: 0.97 });
      gsap.to('.planet-title', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.planet-stories-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Image Grid Animation: Images appear row by row, Each image: Opacity + Y
      // Top row first, then bottom row
      gsap.set('.planet-image', { opacity: 0, y: 30 });
      gsap.to('.planet-grid > div:first-child .planet-image', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.planet-stories-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });
      gsap.to('.planet-grid > div:last-child .planet-image', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.planet-stories-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // On hover: Slight zoom, Dark overlay + "View" (handled by CSS)

      // ===== 7. "JOIN US" CTA =====
      // Button appears last
      gsap.set('.join-us-btn', { opacity: 0 });
      gsap.to('.join-us-btn', {
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.planet-stories-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Micro-interaction: Idle pulse every 8–10 seconds, Hover: scale 1 → 1.04 (handled by CSS)

      // ===== 8. FOOTER =====
      // (Already handled in Footer component)

    }, rootRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={rootRef} className="relative bg-white">
      <style>{`
        /* Hover effects */
        .mosaic-tile {
          transition: all 0.3s ease;
        }
        .mosaic-tile:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .story-card img {
          transition: all 0.5s ease;
        }
        .story-card:hover img {
          transform: scale(1.06);
          filter: blur(1px);
        }
        .visual-image-container {
          transition: all 0.3s ease;
        }
        .planet-image:hover {
          transform: scale(1.05);
        }
        .join-us-btn {
          animation: pulse 9s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .join-us-btn:hover {
          transform: scale(1.04);
          animation: none;
        }
      `}</style>
      <HeroSection />
      <AllStoriesSection />
      <VisualStoriesSection />
      <PlanetOfStoriesSection />
    </div>
  );
};

export default Stories;
