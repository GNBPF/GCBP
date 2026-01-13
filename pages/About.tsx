import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '../components/About/HeroSection';
import { ManifestoSection } from '../components/About/ManifestoSection';
import { PillarsSection } from '../components/About/PillarsSection';
import { AchievementsSection } from '../components/About/AchievementsSection';
import { TeamSection } from '../components/About/TeamSection';
import { SupportersSection } from '../components/About/SupportersSection';
import { CTASection } from '../components/About/CTASection';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  // Auto-scroll team carousel (if needed in future)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamIndex((prev) => (prev + 1) % 4);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  // Hero animations - run only once on mount
  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Detect mobile/tablet for performance optimization
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      // Initial refresh for responsive setup
      ScrollTrigger.refresh();
      
      // Configure ScrollTrigger for mobile/tablet
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: false
      });
      // ===== 1. HERO SECTION =====
      // Set initial states
      gsap.set('.hero-bg', { opacity: 0 });
      gsap.set('.hero-watermark', { scale: 1.08, opacity: 0 });
      gsap.set('.hero-line-1', { y: 20, opacity: 0 });
      gsap.set('.hero-line-2', { y: 20, opacity: 0 });

      // Background gradient fade in
      gsap.to('.hero-bg', { 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out' 
      });

      // GCBP watermark: slow scale 1.08 → 1, opacity 0 → 8%
      gsap.to('.hero-watermark', {
        scale: 1,
        opacity: 0.08,
        duration: 1.5,
        ease: 'power2.out'
      });

      // Heading text: vertical reveal (Y: 20px → 0), delay 120ms per line
      gsap.to('.hero-line-1', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.12,
        ease: 'power2.out'
      });
      gsap.to('.hero-line-2', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.24,
        ease: 'power2.out'
      });

      // On scroll: background gradient parallax (0.85x)
      ScrollTrigger.create({
        trigger: '.hero-bg',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          gsap.to('.hero-bg', {
            y: self.progress * 100 * 0.15, // 0.85x means 15% movement
            ease: 'none'
          });
        }
      });

      // ===== 2. INTRO TEXT - About Us Paragraph =====
      // Set initial state
      gsap.set('.about-paragraph', { y: 24, opacity: 0 });
      
      // Text block: fade + slight upward movement (Y: 24px)
      gsap.to('.about-paragraph', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-paragraph',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Highlight "GCBP - Global Collective for a Better Planet": color emphasis after 300ms
      gsap.fromTo('.gcbp-highlight',
        { color: '#1e293b' },
        {
          color: '#1e40af',
          duration: 0.6,
          delay: 0.3,
          scrollTrigger: {
            trigger: '.about-paragraph',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        }
      );

      // ===== 3. IMAGE + MISSION/VISION/FUNDING/CHALLENGES =====
      // Set initial states
      gsap.set('.pillar-img-top, .pillar-img-mid, .pillar-img-bot', { scale: 0.96, opacity: 0 });
      gsap.set('.pillar-card', { opacity: 0 });
      gsap.set('.pillar-card h3', { opacity: 0 });
      gsap.set('.pillar-card p', { opacity: 0 });
      gsap.set('.divider-line', { scaleX: 0 });
      
      // Left Image Stack: stagger, fade + scale 0.96 → 1
      gsap.to('.pillar-img-top, .pillar-img-mid, .pillar-img-bot', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pillars',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Image hover: zoom 1 → 1.04, soft shadow (handled by CSS)

      // Right Text Blocks: each section reveals independently
      gsap.utils.toArray<HTMLElement>('.pillar-card').forEach((card, i) => {
        // Divider lines: animate width 0 → 100%
        const divider = card.querySelector('.divider-line');
        if (divider) {
          gsap.to(divider, {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true
            }
          });
        }

        // Heading: fade first
        const heading = card.querySelector('h3');
        if (heading) {
          gsap.to(heading, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true
            }
          });
        }

        // Paragraph: appears 150ms later
        const paragraph = card.querySelector('p');
        if (paragraph) {
          gsap.to(paragraph, {
            opacity: 1,
            duration: 0.6,
            delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
              trigger: card,
            start: 'top 85%',
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true
            }
          });
        }
      });

      // ===== 4. ACHIEVEMENTS & IMPACT SECTION =====
      // Set initial states
      gsap.set('.achievements', { y: 30, opacity: 0 });
      gsap.set('.achievement-item', { x: -20, opacity: 0 });
      gsap.set('.impact-video', { scale: 1.06, opacity: 0 });
      
      // Section reveal: fade-in + gentle slide from bottom
      gsap.to('.achievements', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.achievements',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Achievements list: bullet points appear one-by-one (80ms delay)
      gsap.to('.achievement-item', {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.achievements',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Impact image: slow zoom-out (1.06 → 1)
      gsap.to('.impact-video', {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.impact-video',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // "Learn More" arrow micro-move (+6px) on hover (handled by CSS)

      // Donate / Volunteer Buttons: hover scale 1 → 1.03, soft glow (handled by CSS)

      // ===== 5. OUR TEAM (Carousel) =====
      // Cards: default grayscale + 90% opacity, active/hover: full color, scale 1 → 1.04
      // (handled by CSS classes)

      // Carousel: auto-scroll every 6-7s, pause on hover (handled by React state)
      // Team dots animation is handled separately in useEffect below

      // ===== 6. OUR SUPPORTERS (Blue Section) =====
      // Background: subtle radial pulse animation (VERY slow, 20-30s loop)
      // (handled by CSS)

      // Set initial states
      gsap.set('.supporter-card', { y: 40, opacity: 0 });
      gsap.set('.supporter-card p', { opacity: 0 });

      // Cards: float-in from bottom, slight stagger
      gsap.to('.supporter-card', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.supporter-card',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // On hover: card lifts (Y: -6px), shadow increases (handled by CSS)

      // Quotes: fade-in only (no motion)
      gsap.utils.toArray<HTMLElement>('.supporter-card p').forEach((quote) => {
        gsap.to(quote, {
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: quote,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        });
      });

      // ===== 7. CTA - "Want to Be a Part of It?" =====
      // Button: hover background slide animation, slight scale up (handled by CSS)
      // On click: quick press feedback (scale 0.96) (handled by CSS active:scale-95)

      // ===== 8. FOOTER =====
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
  }, []); // Empty dependency array - animations run only once

  // Separate effect for team dots animation that updates with activeTeamIndex
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.team-dot').forEach((dot, i) => {
      if (i === activeTeamIndex) {
        gsap.to(dot, {
          scale: 1.2,
          backgroundColor: '#1e40af',
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#cbd5e1',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });
  }, [activeTeamIndex]);

  return (
    <div ref={rootRef} className="bg-white text-slate-900">
      <style>{`
        .hero-bg { 
          background: linear-gradient(to bottom, rgba(30, 64, 175, 0.05), rgba(30, 64, 175, 0.02));
        }
        .hero-gradient { 
          opacity: 0; 
        }
        .ripple-bg {
          background: radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(30,64,175,0.6) 35%, rgba(30,64,175,0.9) 70%);
          animation: ripple 25s ease-in-out infinite alternate;
        }
        @keyframes ripple {
          0% { background-size: 100% 100%; background-position: center; }
          100% { background-size: 110% 110%; background-position: center; }
        }
        .pillar-img-top:hover,
        .pillar-img-mid:hover,
        .pillar-img-bot:hover {
          transform: scale(1.04);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .learn-more-btn:hover .arrow-icon {
          transform: translateX(6px);
        }
        .cta-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 24px rgba(30, 64, 175, 0.15);
        }
        .team-card {
          transition: all 0.3s ease;
        }
        .team-card:hover {
          transform: scale(1.04);
        }
        .supporter-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
      `}</style>
      <HeroSection />
      <ManifestoSection />
      <PillarsSection />
      <AchievementsSection />
      <TeamSection />
      <SupportersSection />
      <CTASection />
    </div>
  );
};

export default About;
