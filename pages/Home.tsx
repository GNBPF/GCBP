import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '../components/Home/HeroSection';
import { RevealSection } from '../components/Home/RevealSection';
import { AboutSection } from '../components/Home/AboutSection';
import { GalleryStrip } from '../components/Home/GalleryStrip';
import { ImpactSection } from '../components/Home/ImpactSection';
import { MediaHighlightSection } from '../components/Home/MediaHighlightSection';
import { NewsSection } from '../components/Home/NewsSection';
import { PartnersSection } from '../components/Home/PartnersSection';
import { BlogSection } from '../components/Home/BlogSection';
import { SupportSection } from '../components/Home/SupportSection';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      // --- ANIMATION 1: HERO ROW SWAP ON SCROLL ---
      // Initial reveal on load
      gsap.set(".hero-img-inner", {
        y: 40,
        scale: 1.05
      });

      gsap.set(".hero-img-mask", {
        opacity: 1
      });

      // Bubble background: scale-in + opacity fade
      gsap.to(".bubble-bg", {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      });

      // Images: Slide-in reveal with stagger
      gsap.to(".hero-img-inner", {
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.08
      });

      // ROW SWAP ANIMATION - Pinned scroll trigger
      // Top row starts at ~8% from top, bottom row at ~53% from top
      // Distance to swap: ~45% of viewport height (45vh)
      const heroSwapTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=2000", // Scroll distance for the swap
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // Calculate the swap distance: from 8% to 53% = 45% of viewport height
      // TOP ROW (4 images) → Moves DOWN to bottom position
      heroSwapTimeline.to(".row-1", {
        y: "45vh", // Moves down from 8% to 53% position (45vh)
        ease: "power2.inOut"
      }, 0);

      // BOTTOM ROW (3 images) → Moves UP to top position
      heroSwapTimeline.to(".row-2", {
        y: "-45vh", // Moves up from 53% to 8% position (-45vh)
        ease: "power2.inOut"
      }, 0);

      // Optional: Bubble blur during swap
      heroSwapTimeline.to(".bubble-bg", {
        filter: "blur(4px)",
        opacity: 0.7,
        ease: "none"
      }, 0);

      // --- ANIMATION 2: THE GCBP SPLIT REVEAL + TEXT REVEAL ---
      const revealSection = document.querySelector("#reveal");
      if (revealSection) {
        // Set initial states - everything hidden
        gsap.set(".hero-badge", { opacity: 0, y: 10 });
        gsap.set(".hero-title-line", { opacity: 0, y: 20 });
        gsap.set(".line-1, .line-2, .line-3", { opacity: 0, y: 20 });
        gsap.set(".hero-btn-group", { opacity: 0, y: 10 });
        gsap.set("#left-text", { x: 0 });
        gsap.set("#right-text", { x: 0 });
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#reveal",
            start: "top top",
            end: "+=1500",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // PHASE 1: Split GCBP text (0 → 0.4)
        tl.to("#left-text", { 
          x: -500, 
          duration: 0.4,
          ease: "power2.inOut"
        }, 0)
        .to("#right-text", { 
          x: 500, 
          duration: 0.4,
          ease: "power2.inOut"
        }, 0);

        // PHASE 2: Reveal content (0.5 → 1.0)
        // Text appears after GCBP is fully split
        tl.to(".hero-badge", { 
          opacity: 1, 
          y: 0, 
          duration: 0.2,
          ease: "power2.out"
        }, 0.5)
        .to(".hero-title-line", { 
          opacity: 1, 
          y: 0, 
          duration: 0.25,
          ease: "power2.out"
        }, 0.55)
        .to(".line-1", { 
          opacity: 1, 
          y: 0, 
          duration: 0.2,
          ease: "power2.out"
        }, 0.65)
        .to(".line-2", { 
          opacity: 1, 
          y: 0, 
          duration: 0.2,
          ease: "power2.out"
        }, 0.7)
        .to(".line-3", { 
          opacity: 1, 
          y: 0, 
          duration: 0.2,
          ease: "power2.out"
        }, 0.75)
        .to(".hero-btn-group", { 
          opacity: 1, 
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        }, 0.85);

        // Timeline ends at 1.5, keeping text visible
        // On reverse scroll (scrolling up):
        // - Text fades out: 1.0 → 0.5 (completely hidden by 0.5)
        // - GCBP closes: 0.4 → 0 (starts closing at 0.4)
        // Text is hidden by 0.5, GCBP closes 0.4→0, so text is gone before GCBP closes
      }

      // --- ANIMATION 3: ABOUT SECTION (OUR DNA) ---
      const aboutSection = document.querySelector("#who-we-are");
      if (aboutSection) {
        // Section fade + Y translate
        gsap.from(".about-text", {
        opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#who-we-are",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Divider width animation (0 → 100%)
        gsap.from(".divider-line", {
          scaleX: 0,
          duration: 1.2,
          ease: "power2.out",
        scrollTrigger: {
            trigger: "#who-we-are",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
        }
      });
      }

      // --- ANIMATION 4: GALLERY CARDS (Animate in pairs) ---
      const galleryCards = document.querySelectorAll(".gallery-card");
      if (galleryCards.length > 0) {
        gsap.from(".gallery-card", {
          y: 40,
        opacity: 0,
          duration: 0.8,
          stagger: {
            each: 0.15,
            from: "start",
            grid: "auto"
          },
          ease: "power2.out",
        scrollTrigger: {
            trigger: ".gallery-card",
          start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 5: IMPACT SECTION (OUR WORK) - Count-up numbers ---
      const impactSection = document.querySelector("#impact");
      if (impactSection) {
        // Animate cards
        gsap.from("#impact .bg-white", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#impact",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Count-up animation for numbers
        const countUpElements = document.querySelectorAll(".count-up-number");
        countUpElements.forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0");
          const obj = { value: 0 };
          gsap.to(obj, {
            value: target,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el.closest("#impact"),
              start: "top 85%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            },
            onUpdate: () => {
              const value = Math.floor(obj.value);
              el.textContent = value.toLocaleString();
            }
          });
        });
      }

      // --- ANIMATION 6: GCBP VIDEO SECTION (Zoom-out) ---
      const gcbpHighlight = document.querySelector(".gcbp-highlight");
      if (gcbpHighlight) {
        // Feature image: slow zoom-out (1.08 → 1)
        gsap.from(".feature-image img", {
          scale: 1.08,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".gcbp-highlight",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        gsap.from(".gcbp-title", {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gcbp-highlight",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        gsap.from(".gcbp-media", {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gcbp-highlight",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 7: NEWS SECTION (Alternate directions) ---
      const newsCards = document.querySelectorAll(".news-card");
      if (newsCards.length > 0) {
        gsap.from(".news-card-left", {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".news-card-left",
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        gsap.from(".news-card-right", {
          x: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".news-card-right",
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 8: PARTNERS SECTION (Infinite scroll) ---
      const partnersScroll = document.querySelector(".partners-scroll");
      if (partnersScroll) {
        const scrollWidth = partnersScroll.scrollWidth / 2;
        gsap.to(".partners-scroll", {
          x: -scrollWidth,
          duration: 30,
          ease: "none",
          repeat: -1
        });

        // Pause on hover
        const container = document.querySelector(".partners-scroll-container");
        if (container) {
          container.addEventListener("mouseenter", () => {
            gsap.to(".partners-scroll", { timeScale: 0 });
          });
          container.addEventListener("mouseleave", () => {
            gsap.to(".partners-scroll", { timeScale: 1 });
          });
        }
      }

      // --- ANIMATION 9: BLOG SECTION ---
      const blogCards = document.querySelectorAll(".blog-card");
      if (blogCards.length > 0) {
        gsap.from(".blog-card", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".blog-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 10: SUPPORT SECTION FADE UP ---
      const supportGrid = document.querySelector(".support-grid");
      if (supportGrid) {
      gsap.from(".support-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".support-grid",
          start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 11: FOOTER ---
      const footer = document.querySelector("footer");
      if (footer) {
        gsap.from("footer", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Logo pulse every 25s
        gsap.to(".footer-logo", {
          scale: 1.05,
          duration: 0.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 25
        });
      }

    }, mainRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef}>
      <HeroSection />
      <RevealSection />
      <AboutSection />
      <GalleryStrip />
      <ImpactSection />
      <MediaHighlightSection />
      <NewsSection />
      <PartnersSection />
      <BlogSection />
      <SupportSection />
    </div>
  );
};