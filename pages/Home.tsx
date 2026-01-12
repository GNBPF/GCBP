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
      // --- ANIMATION 1: HERO BUBBLE BACKGROUND & IMAGES ---
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        // Bubble background: scale-in (1.05 → 1) + opacity fade (0 → 100%, 1.2s)
        gsap.from(".bubble-bg", {
          scale: 1.05,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out"
        });

        // Images: Staggered float animation (Y: +6px → -6px, 6-8s, infinite, alternate)
        const floatDurations = [6, 7, 8, 6.5, 7.5, 8, 6];
        document.querySelectorAll(".float-img-1, .float-img-2, .float-img-3, .float-img-4, .float-img-5, .float-img-6, .float-img-7").forEach((img, index) => {
          gsap.to(img, {
            y: -6,
            duration: floatDurations[index] || 7,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
          });
        });

        // Scroll: Bubble blur + fade, parallax (0.8x)
        const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        });

        heroTimeline.to(".bubble-bg", {
          filter: "blur(4px)",
          opacity: 0.8,
          ease: "none"
        }, 0);

        // Parallax for images (0.8x speed)
        heroTimeline.to(".hero-img", {
          y: (i, target) => {
            const scrollAmount = window.scrollY * 0.2; // 0.8x means 20% movement
            return scrollAmount;
          },
          ease: "none"
        }, 0);
        
        // TOP ROW (4 images) → goes DOWN
        heroTimeline.to(".row-1", {
          y: () => window.innerHeight * 0.45,
          scale: 0.95,
          ease: "none"
        }, 0);

        // BOTTOM ROW (3 images) → goes UP
        heroTimeline.to(".row-2", {
          y: () => -window.innerHeight * 0.45,
          scale: 1.05,
          ease: "none"
        }, 0);
      }

      // --- ANIMATION 2: THE GCBP SPLIT REVEAL + TEXT REVEAL ---
      const revealSection = document.querySelector("#reveal");
      if (revealSection) {
        // Hide hero content initially
        gsap.set(".hero-badge", { opacity: 0, y: 10 });
        gsap.set(".hero-title-line", { opacity: 0, y: 20 });
        gsap.set(".line-1, .line-2, .line-3", { opacity: 0, y: 20 });
        gsap.set(".hero-btn-group", { opacity: 0, y: 10 });
        
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#reveal",
          start: "top top",
          end: "+=1500",
          pin: true,
          scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: () => {
              // Ensure text is visible after scroll starts
              gsap.to(".hero-badge, .hero-title-line, .line-1, .line-2, .line-3, .hero-btn-group", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.5
              });
            }
        }
      });

        // Split text animation
      tl.to("#left-text", { x: -500, duration: 2 }, "split")
        .to("#right-text", { x: 500, duration: 2 }, "split")
          .to(".reveal-bg", { opacity: 1, scale: 1, duration: 1 }, "split+=0.5")
          // Badge reveal
          .to(".hero-badge", { 
            opacity: 1, 
            y: 0, 
            duration: 0.6,
            ease: "power2.out"
          }, "split+=0.8")
          // Title reveal
          .to(".hero-title-line", { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power2.out"
          }, "split+=1")
          // Line-by-line text reveal (120ms delay per line)
          .to(".line-1", { 
            opacity: 1, 
            y: 0, 
            duration: 0.6,
            ease: "power2.out"
          }, "split+=1.2")
          .to(".line-2", { 
            opacity: 1, 
            y: 0, 
            duration: 0.6,
            ease: "power2.out"
          }, "split+=1.32")
          .to(".line-3", { 
            opacity: 1, 
            y: 0, 
            duration: 0.6,
            ease: "power2.out"
          }, "split+=1.44")
          // Fade in buttons
          .to(".hero-btn-group", { 
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "split+=1.5");
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