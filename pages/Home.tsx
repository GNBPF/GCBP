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
      // Detect mobile/tablet for performance optimization
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      // Initial refresh to ensure proper setup
      ScrollTrigger.refresh();
      
      // Configure ScrollTrigger for mobile/tablet - ensure it works on touch devices
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: false
      });
      
      // Reduce animation complexity on mobile for better performance
      const animationMultiplier = isMobile ? 0.7 : 1;
      
      // --- ANIMATION 1: HERO SECTION - Refined editorial entrance ---
      // Set initial states
      gsap.set(".hero-gradient", { opacity: 0 });
      gsap.set(".hero-line-1, .hero-line-2", {
        opacity: 0,
        y: 32,
        clipPath: "inset(0 0 100% 0)"
      });
      gsap.set(".hero-subtitle", { opacity: 0, y: 20 });
      gsap.set(".hero-cta", { opacity: 0, y: 20 });
      
      // News section initial states
      gsap.set(".news-card-left", { x: -60, opacity: 0 });
      gsap.set(".news-card-right", { x: 60, opacity: 0 });
      
      // Mission section initial states
      gsap.set(".mission-statement", { opacity: 0, y: 20 });
      
      // Pillars section initial states
      gsap.set(".pillar-card", { opacity: 0, y: 20 });
      
      // Impact section initial states
      gsap.set(".impact-metric", { opacity: 0, y: 20 });
      
      // Programs section initial states
      gsap.set(".program-card", { opacity: 0, y: 20 });
      
      // Partners section initial states
      gsap.set(".partner-item", { opacity: 0 });
      
      // CTA section initial states
      gsap.set(".cta-section", { opacity: 0, y: 20 });
      
      // MediaHighlight section initial states
      gsap.set(".gcbp-title, .gcbp-media", { opacity: 0 });
      
      // News section initial states
      gsap.set(".news-card", { opacity: 0 });
      
      // Blog section initial states
      gsap.set(".blog-card", { opacity: 0, y: 20 });

      // Flowing lines - abstract community figures animation (continuous flow, no stopping)
      // Optimized for mobile: reduced movement on smaller screens
      const flowingMovement = isMobile ? 0.6 : 1;
      
      gsap.fromTo(".flowing-group-1", 
        { y: 0, x: 0, rotation: 0 },
        { 
          y: `+=${60 * flowingMovement}`,
          x: `-=${40 * flowingMovement}`,
          rotation: 3 * flowingMovement,
          duration: 30,
          repeat: -1,
          ease: "none"
        }
      );

      gsap.fromTo(".flowing-group-2",
        { y: 0, x: 0, rotation: 0 },
        {
          y: `-=${55 * flowingMovement}`,
          x: `+=${35 * flowingMovement}`,
          rotation: -2.5 * flowingMovement,
          duration: 32,
          repeat: -1,
          ease: "none"
        }
      );

      gsap.fromTo(".flowing-group-3",
        { y: 0, x: 0, rotation: 0 },
        {
          y: `+=${65 * flowingMovement}`,
          x: `-=${45 * flowingMovement}`,
          rotation: 3.5 * flowingMovement,
          duration: 35,
          repeat: -1,
          ease: "none"
        }
      );

      gsap.fromTo(".flowing-group-4",
        { y: 0, x: 0, rotation: 0 },
        {
          y: `-=${50 * flowingMovement}`,
          x: `+=${50 * flowingMovement}`,
          rotation: -3 * flowingMovement,
          duration: 33,
          repeat: -1,
          ease: "none"
        }
      );

      // Connecting lines - continuous flowing animation (infinite seamless loop)
      // Optimized for mobile performance
      const connectorSpeed = isMobile ? 1.2 : 1;
      
      gsap.fromTo(".flowing-connector-1",
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: -400,
          duration: 20 * connectorSpeed,
          repeat: -1,
          ease: "none"
        }
      );

      gsap.fromTo(".flowing-connector-2",
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: -450,
          duration: 22 * connectorSpeed,
          repeat: -1,
          ease: "none"
        }
      );

      gsap.fromTo(".flowing-connector-3",
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: -420,
          duration: 24 * connectorSpeed,
          repeat: -1,
          ease: "none"
        }
      );

      // System mesh - very slow, subtle movement
      gsap.to(".mesh-line", {
        x: "+=20",
        y: "-=10",
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 3,
          from: "random"
        }
      });

      // Brand gradient overlay fade-in
      gsap.to(".hero-gradient", {
        opacity: 1,
        duration: 2,
        ease: "power2.out"
      });

      // Brand gradient breathing - very slow organic movement
      gsap.to(".hero-gradient > div", {
        x: "5%",
        y: "3%",
        scale: 1.05,
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Title lines - editorial reveal with clipPath
      gsap.to(".hero-line-1, .hero-line-2", {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3
      });

      // Underline animation - after text settles
      gsap.to(".hero-underline", {
        scaleX: 1,
        duration: 1,
        delay: 0.6,
        ease: "power2.out"
      });

      // Subtitle fade-in
      gsap.to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7
      });

      // CTA buttons fade-in
      gsap.to(".hero-cta", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.9
      });

      // --- ANIMATION 2: MISSION SECTION - Progressive text reveals ---
      const missionSection = document.querySelector("#mission");
      if (missionSection) {
        // Divider line draw
        const dividerLine = missionSection.querySelector(".divider-line") as SVGLineElement;
        if (dividerLine) {
          const pathLength = dividerLine.getTotalLength();
          gsap.set(dividerLine, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
          gsap.to(dividerLine, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#mission",
              start: isMobile ? "top 85%" : "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
              markers: false
            }
          });
        }

        // Mission statements - progressive reveal with fade
        gsap.utils.toArray(".mission-statement").forEach((statement: any, index: number) => {
          gsap.to(statement, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statement,
              start: isMobile ? "top 90%" : "top 85%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });

          // Previous statements fade slightly when new one appears
          if (index > 0) {
            gsap.utils.toArray(".mission-statement").slice(0, index).forEach((prev: any) => {
              ScrollTrigger.create({
                trigger: statement,
                start: isMobile ? "top 90%" : "top 85%",
                onEnter: () => {
                  gsap.to(prev, { opacity: 0.6, duration: 0.3 });
                },
                onLeaveBack: () => {
                  gsap.to(prev, { opacity: 1, duration: 0.3 });
                }
              });
            });
          }
        });
      }

      // --- ANIMATION 3: PILLARS SECTION - Line draw icons & card reveals ---
      const pillarsSection = document.querySelector("#what-we-do");
      if (pillarsSection) {
        // Divider line draw
        const pillarsDivider = pillarsSection.querySelector(".divider-line") as SVGLineElement;
        if (pillarsDivider) {
          const pathLength = pillarsDivider.getTotalLength();
          gsap.set(pillarsDivider, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
          gsap.to(pillarsDivider, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#what-we-do",
              start: isMobile ? "top 85%" : "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });
        }

        // Icon stroke animations
        gsap.utils.toArray(".icon-path").forEach((path: any) => {
          const pathLength = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
        });

        // Pillar cards reveal
        gsap.utils.toArray(".pillar-card").forEach((card: any, index: number) => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: isMobile ? "top 90%" : "top 85%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            },
            onComplete: () => {
              // Animate icon paths after card appears
              const iconPaths = card.querySelectorAll(".icon-path");
              iconPaths.forEach((path: any, pathIndex: number) => {
                const pathLength = path.getTotalLength();
                gsap.to(path, {
                  strokeDashoffset: 0,
                  duration: 1,
                  ease: "power2.out",
                  delay: pathIndex * 0.1
                });
              });
            }
          });
        });
      }

      // --- ANIMATION 4: IMPACT SECTION - Count-up numbers & progress lines ---
      const impactSection = document.querySelector("#impact");
      if (impactSection) {
        // Divider line draw
        const impactDivider = impactSection.querySelector(".divider-line") as SVGLineElement;
        if (impactDivider) {
          const pathLength = impactDivider.getTotalLength();
          gsap.set(impactDivider, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
          gsap.to(impactDivider, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#impact",
              start: isMobile ? "top 85%" : "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });
        }

        // Impact metrics reveal
        gsap.utils.toArray(".impact-metric").forEach((metric: any, index: number) => {
          gsap.to(metric, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: metric,
              start: isMobile ? "top 90%" : "top 85%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            },
            onComplete: () => {
              // Count-up animation
              const countEl = metric.querySelector(".count-up-number");
              if (countEl) {
                const target = parseInt(countEl.getAttribute("data-target") || "0");
                const obj = { value: 0 };
                gsap.to(obj, {
                  value: target,
                  duration: 2,
                  ease: "power1.out",
                  onUpdate: () => {
                    const value = Math.floor(obj.value);
                    countEl.textContent = value.toLocaleString();
                  }
                });

                // Progress line animation
                const progressLine = metric.querySelector(".progress-line");
                if (progressLine) {
                  const lineLength = progressLine.getTotalLength();
                  gsap.set(progressLine, {
                    strokeDasharray: lineLength,
                    strokeDashoffset: lineLength
                  });
                  gsap.to(progressLine, {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: "power1.out"
                  });
                }
              }
            }
          });
        });
      }

      // --- ANIMATION 5: PROGRAMS SECTION ---
      const programsSection = document.querySelector("#programs");
      if (programsSection) {
        // Divider line draw
        const programsDivider = programsSection.querySelector(".divider-line") as SVGLineElement;
        if (programsDivider) {
          const pathLength = programsDivider.getTotalLength();
          gsap.set(programsDivider, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
          gsap.to(programsDivider, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#programs",
              start: isMobile ? "top 85%" : "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });
        }

        // Program cards reveal
        gsap.utils.toArray(".program-card").forEach((card: any, index: number) => {
          gsap.to(card, {
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: isMobile ? "top 90%" : "top 85%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });
        });
      }

      // --- ANIMATION 6: PARTNERS SECTION ---
      const partnersSection = document.querySelector("#partners");
      if (partnersSection) {
        // Divider line draw
        const partnersDivider = partnersSection.querySelector(".divider-line") as SVGLineElement;
        if (partnersDivider) {
          const pathLength = partnersDivider.getTotalLength();
          gsap.set(partnersDivider, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
          gsap.to(partnersDivider, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#partners",
              start: isMobile ? "top 85%" : "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
      });
      }

        // Partner items fade in
        gsap.utils.toArray(".partner-item").forEach((item: any, index: number) => {
          gsap.to(item, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.1,
        scrollTrigger: {
              trigger: item,
          start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
          });
        });
      }

      // --- ANIMATION 7: MEDIA HIGHLIGHT SECTION (GCBP Video) ---
      const gcbpHighlight = document.querySelector(".gcbp-highlight");
      if (gcbpHighlight) {
        // Title fade in
        gsap.to(".gcbp-title", {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gcbp-highlight",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        // Video fade in after title
        gsap.to(".gcbp-media", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".gcbp-highlight",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 8: NEWS SECTION (Alternate directions) ---
      const newsCards = document.querySelectorAll(".news-card");
      if (newsCards.length > 0) {
        gsap.to(".news-card-left", {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".news-card-left",
            start: isMobile ? "top 90%" : "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });

        gsap.to(".news-card-right", {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".news-card-right",
            start: isMobile ? "top 90%" : "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 9: BLOG SECTION ---
      const blogCards = document.querySelectorAll(".blog-card");
      if (blogCards.length > 0) {
        gsap.to(".blog-card", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".blog-card",
            start: isMobile ? "top 90%" : "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 10: CTA SECTION ---
      const ctaSection = document.querySelector("#cta");
      if (ctaSection) {
        // Divider line draw
        const ctaDivider = ctaSection.querySelector(".divider-line") as SVGLineElement;
        if (ctaDivider) {
          const pathLength = ctaDivider.getTotalLength();
          gsap.set(ctaDivider, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          });
          gsap.to(ctaDivider, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#cta",
              start: isMobile ? "top 85%" : "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          });
        }

        // CTA content fade in
        gsap.to(ctaSection, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#cta",
            start: isMobile ? "top 90%" : "top 85%",
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