import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '../components/Media/HeroSection';
import { BlogsSection } from '../components/Media/BlogsSection';
import { VolunteerSection } from '../components/Media/VolunteerSection';
import { DonationsSection } from '../components/Media/DonationsSection';
import { SponsorshipSection } from '../components/Media/SponsorshipSection';
import { EventsSection } from '../components/Media/EventsSection';
import { FAQsSection } from '../components/Media/FAQsSection';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: 1,
    title: 'Green School Webinar',
    image: '/images/img5.jpg',
  },
  {
    id: 2,
    title: 'Climate Action Summit 2024',
    image: '/images/img6.jpg',
  },
  {
    id: 3,
    title: 'Community Planting Day',
    image: '/images/img7.jpg',
  },
];

export const Media: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Initial refresh for responsive setup
      ScrollTrigger.refresh();
      
      // ===== 1. PAGE LOAD — HERO SECTION =====
      // Set initial states
      gsap.set('.hero-gradient', { opacity: 0, scale: 1.05 });
      gsap.set('.hero-title', { opacity: 0, y: 20 });
      gsap.set('.hero-subtitle', { opacity: 0 });
      gsap.set('.hero-watermark', { opacity: 0.05 });
      
      // Background gradient → fade in + slight scale (1.05 → 1)
      gsap.to('.hero-gradient', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out'
      });

      // "Media & Events" text: Opacity 0 → 100, Y: +20px → 0, Duration: 0.8s, Ease: ease-out
      gsap.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Subheading appears 0.2s after heading
      gsap.to('.hero-subtitle', {
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
      });

      // Scroll behavior: Subtle parallax on background (moves slower than text)
      ScrollTrigger.create({
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        onUpdate: (self) => {
          gsap.to('.hero-gradient', {
            y: self.progress * 50 * 0.3, // Moves slower than text
            ease: 'none'
          });
        }
      });

      // Logo watermark (GCBP) → very low opacity, fixed, fades out after hero
      ScrollTrigger.create({
        trigger: '.hero-section',
        start: 'bottom top',
        onEnter: () => {
          gsap.to('.hero-watermark', {
        opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      });

      // ===== 2. BLOGS & INSIGHTS (3 Cards) =====
      // Set initial states
      gsap.set('.blog-card', { opacity: 0, y: 30 });
      
      // Cards animate one by one: Opacity 0 → 100, Y: +30px → 0, Delay: 0s / 0.15s / 0.3s
      gsap.to('.blog-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.blogs-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Hover interaction: Image scale 1 → 1.05, Card shadow increases, Text underline (handled by CSS)

      // ===== 3. SECTION DIVIDER LINES =====
      // Width: 0% → 100%, Trigger: when section enters viewport, Duration: 0.6s
      gsap.utils.toArray<HTMLElement>('.section-divider').forEach((divider) => {
        gsap.set(divider, { scaleX: 0, transformOrigin: 'left center' });
        gsap.to(divider, {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: divider,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        });
      });

      // ===== 4. VOLUNTEER OPPORTUNITIES =====
      // Set initial states
      gsap.set('.volunteer-heading', { opacity: 0, y: 20 });
      gsap.set('.volunteer-text', { opacity: 0 });
      
      // Heading: Fade + Y (20px → 0)
      gsap.to('.volunteer-heading', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.volunteer-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Paragraph: Fade only (keep calm)
      gsap.to('.volunteer-text', {
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.volunteer-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Image animation: Slight horizontal parallax, Moves opposite to scroll (very subtle)
      gsap.to('.volunteer-video', {
        x: (i, target) => {
          return ScrollTrigger.maxScroll(window) * 0.1; // Very subtle
        },
        ease: 'none',
        scrollTrigger: {
          trigger: '.volunteer-video-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // ===== 5. DONATIONS SECTION (Split Layout) =====
      // Set initial states
      gsap.set('.donation-image-mask', { scaleY: 1, transformOrigin: 'bottom center' });
      gsap.set('.donation-content', { opacity: 0 });
      gsap.set('.be-part-title', { letterSpacing: '0.1em' });
      
      // Left image: Mask reveal from bottom → top, Duration: 0.8s
      gsap.to('.donation-image-mask', {
        scaleY: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.donation-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Right content: "Be a part of the change" - Letter spacing tightens slightly on reveal
      gsap.to('.be-part-title', {
        letterSpacing: '0.05em',
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.donation-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Donate button: Hover background fills from left, Arrow slides 6px right (handled by CSS)

      // ===== 6. CORPORATE SPONSORSHIP =====
      // Set initial states
      gsap.set('.sponsorship-benefit', { opacity: 0, x: -20 });
      gsap.set('.sponsorship-image', { opacity: 0, scale: 1.08 });
      
      // List animation: Bullet points appear line by line, Opacity + slight X movement
      gsap.to('.sponsorship-benefit', {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sponsorship-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Image: Fade + scale (1.08 → 1)
      gsap.to('.sponsorship-image', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sponsorship-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Button: Hover border → solid fill, Press scale 0.96 (handled by CSS)

      // ===== 7. EVENTS SLIDER / FEATURE CARD =====
      // Set initial states
      gsap.set('.event-slide', { opacity: 0, scale: 0.96 });
      gsap.set('.event-overlay-text', { opacity: 0 });
      
      // On scroll: Event card Scale 0.96 → 1, Opacity 0 → 100
      gsap.to('.event-slide', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.events-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Overlay text: Fades in after image settles (important for readability)
      gsap.to('.event-overlay-text', {
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.events-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true
        }
      });

      // Carousel: Auto-slide every 5s (handled by React state)
      // Manual arrow: Click → smooth slide + slight blur transition (handled by React)

      // ===== 8. FAQs (Accordion) =====
      // Set initial states
      gsap.utils.toArray<HTMLElement>('.faq-item').forEach((item) => {
        const answer = item.querySelector('.faq-answer');
        if (answer) {
          gsap.set(answer, { height: 0, opacity: 0 });
        }
      });

      // Interaction: Click → Arrow rotates 0° → 90°, Height expands smoothly, Answer fades in with 0.2s delay (handled by React)
      // Active FAQ has slightly darker border (handled by CSS)

      // ===== 9. FOOTER =====
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

  // Auto-play carousel with pause on hover
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  
  React.useEffect(() => {
    if (isCarouselPaused) return;
    
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 5000); // Auto-slide every 5s

    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  const handleFaqToggle = (index: number) => {
    const item = document.querySelector(`.faq-item-${index}`);
    const answer = item?.querySelector('.faq-answer') as HTMLElement;
    const chevron = item?.querySelector('.faq-chevron') as HTMLElement;

    if (openFaq === index) {
      // Close
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });
      gsap.to(chevron, {
        rotation: 0,
        duration: 0.3,
      });
      setOpenFaq(null);
    } else {
      // Close previous if open
      if (openFaq !== null) {
        const prevItem = document.querySelector(`.faq-item-${openFaq}`);
        const prevAnswer = prevItem?.querySelector('.faq-answer') as HTMLElement;
        const prevChevron = prevItem?.querySelector('.faq-chevron') as HTMLElement;
        if (prevAnswer && prevChevron) {
          gsap.to(prevAnswer, { height: 0, opacity: 0, duration: 0.3 });
          gsap.to(prevChevron, { rotation: 0, duration: 0.3 });
        }
      }

      // Open new
      if (answer && chevron) {
        gsap.set(answer, { height: 'auto' });
        const height = answer.offsetHeight;
        gsap.set(answer, { height: 0 });
        gsap.to(answer, {
          height: height,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        });
        gsap.to(chevron, {
          rotation: 90,
          duration: 0.3,
        });
      }
      setOpenFaq(index);
    }
  };

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div ref={rootRef} className="relative bg-white">
      <style>{`
        .blog-card:hover img {
          transform: scale(1.05);
        }
        .blog-card:hover {
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .donate-btn:hover .arrow-icon {
          transform: translateX(6px);
        }
        .sponsor-btn:hover {
          background-color: #1e40af;
          color: white;
        }
        .faq-item.active {
          border-color: #1e40af;
        }
      `}</style>
      <HeroSection />
      <BlogsSection />
      <VolunteerSection />
      <DonationsSection />
      <SponsorshipSection />
      <EventsSection 
        currentEventIndex={currentEventIndex}
        onNextEvent={nextEvent}
        onPrevEvent={prevEvent}
        onEventSelect={setCurrentEventIndex}
        onCarouselPause={setIsCarouselPaused}
      />
      <FAQsSection openFaq={openFaq} onFaqToggle={handleFaqToggle} />
    </div>
  );
};

