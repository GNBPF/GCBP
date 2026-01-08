import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      // --- ANIMATION 1: HERO ROW SWAP (Cross-Swap Transition) ---
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        });

        // Set initial X centering for both rows (already handled with -translate-x-1/2 in CSS)
        // No need to set xPercent since we're using CSS translate
        
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

      // --- ANIMATION 2: THE GCBP SPLIT REVEAL ---
      const revealSection = document.querySelector("#reveal");
      if (revealSection) {
        // Hide hero content initially
        gsap.set(".hero-content", { opacity: 0, y: 20 });
        
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

        // Split text animation
      tl.to("#left-text", { x: -500, duration: 2 }, "split")
        .to("#right-text", { x: 500, duration: 2 }, "split")
          .to(".reveal-bg", { opacity: 1, scale: 1, duration: 1 }, "split+=0.5")
          // Fade in hero content after reveal
          .to(".hero-content", { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power2.out"
          }, "split+=1");
      }

      // --- ANIMATION 3: IMPACT SECTION FADE UP ---
      const impactGrid = document.querySelector(".impact-grid");
      if (impactGrid) {
      gsap.from(".impact-card", {
        y: 60,
        opacity: 0,
        duration: 1,
          stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".impact-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
        }
      });
      }

      // --- ANIMATION 4: SUPPORT SECTION FADE UP ---
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

      // --- ANIMATION 5: GCBP HIGHLIGHT SECTION ---
      const gcbpHighlight = document.querySelector(".gcbp-highlight");
      if (gcbpHighlight) {
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

        gsap.from(".gcbp-line", {
          scaleX: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gcbp-highlight",
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
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

      {/* Hero Section */}
      <section className="hero relative h-[140vh] min-h-[600px] max-h-[1800px] overflow-hidden pt-20 mobile-small:pt-24 xs:pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 2xl:pt-48">
        <div className="hero-images-wrap absolute inset-0 w-full h-full">
            {/* Top Row - 4 images with gaps sized to fit 3 bottom images */}
            {/* Gap calculation: gap = image_width, so 3 gaps = 3 images can fit */}
            <div className="image-row row-1 absolute left-1/2 -translate-x-1/2 flex justify-center items-center w-full top-[8%] mobile-small:top-[9%] sm:top-[10%]">
                <div className="hero-img w-[100px] h-[130px] mobile-small:w-[120px] mobile-small:h-[150px] xs:w-[140px] xs:h-[170px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] 2xl:w-[240px] 2xl:h-[280px] rounded-lg overflow-hidden shadow-lg flex-shrink-0"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&w=300&q=80" alt="Nature" className="w-full h-full object-cover" /></div>
                <div className="hero-img w-[100px] h-[130px] mobile-small:w-[120px] mobile-small:h-[150px] xs:w-[140px] xs:h-[170px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] 2xl:w-[240px] 2xl:h-[280px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[100px] mobile-small:ml-[120px] xs:ml-[140px] sm:ml-[160px] md:ml-[180px] lg:ml-[200px] xl:ml-[220px] 2xl:ml-[240px]"><img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=300&q=80" alt="Community" className="w-full h-full object-cover" /></div>
                <div className="hero-img w-[100px] h-[130px] mobile-small:w-[120px] mobile-small:h-[150px] xs:w-[140px] xs:h-[170px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] 2xl:w-[240px] 2xl:h-[280px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[100px] mobile-small:ml-[120px] xs:ml-[140px] sm:ml-[160px] md:ml-[180px] lg:ml-[200px] xl:ml-[220px] 2xl:ml-[240px]"><img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=300&q=80" alt="Hands" className="w-full h-full object-cover" /></div>
                <div className="hero-img w-[100px] h-[130px] mobile-small:w-[120px] mobile-small:h-[150px] xs:w-[140px] xs:h-[170px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] 2xl:w-[240px] 2xl:h-[280px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[100px] mobile-small:ml-[120px] xs:ml-[140px] sm:ml-[160px] md:ml-[180px] lg:ml-[200px] xl:ml-[220px] 2xl:ml-[240px]"><img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=300&q=80" alt="Volunteer" className="w-full h-full object-cover" /></div>
            </div>
            {/* Bottom Row - 3 images positioned to fit in the 3 gaps between top 4 images */}
            {/* Top row: [Img1] gap [Img2] gap [Img3] gap [Img4] where gap = image_width */}
            {/* Gap centers: Gap1 at 1.5*img_w, Gap2 at 3.5*img_w, Gap3 at 5.5*img_w */}
            {/* Bottom images spaced by 2*image_width (img_w + gap) to align with gap centers */}
            <div className="image-row row-2 absolute left-1/2 -translate-x-1/2 flex justify-center items-center w-full top-[53%] mobile-small:top-[54%] sm:top-[55%]">
                {/* First bottom image: centered in Gap1 (between img1 and img2) */}
                {/* Position: 1.5 * image_width from center-left */}
                <div className="hero-img w-[100px] h-[130px] mobile-small:w-[120px] mobile-small:h-[150px] xs:w-[140px] xs:h-[170px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] 2xl:w-[240px] 2xl:h-[280px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 translate-x-[150px] mobile-small:translate-x-[180px] xs:translate-x-[210px] sm:translate-x-[240px] md:translate-x-[270px] lg:translate-x-[300px] xl:translate-x-[330px] 2xl:translate-x-[360px]"><img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=300&q=80" alt="Child" className="w-full h-full object-cover" /></div>
                {/* Second bottom image: centered in Gap2 (between img2 and img3) */}
                {/* Spacing from first: 2 * image_width (to skip over img2 and align with Gap2) */}
                <div className="hero-img w-[100px] h-[130px] mobile-small:w-[120px] mobile-small:h-[150px] xs:w-[140px] xs:h-[170px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] 2xl:w-[240px] 2xl:h-[280px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[200px] mobile-small:ml-[240px] xs:ml-[280px] sm:ml-[320px] md:ml-[360px] lg:ml-[400px] xl:ml-[440px] 2xl:ml-[480px]"><img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=300&q=80" alt="Donation" className="w-full h-full object-cover" /></div>
                {/* Third bottom image: centered in Gap3 (between img3 and img4) */}
                {/* Spacing from second: 2 * image_width (to skip over img3 and align with Gap3) */}
                <div className="hero-img w-[100px] h-[130px] mobile-small:w-[120px] mobile-small:h-[150px] xs:w-[140px] xs:h-[170px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] 2xl:w-[240px] 2xl:h-[280px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[200px] mobile-small:ml-[240px] xs:ml-[280px] sm:ml-[320px] md:ml-[360px] lg:ml-[400px] xl:ml-[440px] 2xl:ml-[480px]"><img src="https://images.unsplash.com/photo-1518398046578-8cca57782e39?auto=format&fit=crop&w=300&q=80" alt="Team" className="w-full h-full object-cover" /></div>
            </div>
        </div>
      </section>

      {/* The Reveal Section */}
      <div className="reveal-container h-screen relative overflow-hidden flex items-center justify-center bg-white -mt-px" id="reveal">
        <div className="split-text-wrap flex z-10 pointer-events-none gap-[0.1em] absolute">
            <div className="letter-block text-[12vw] mobile-small:text-[13vw] sm:text-[14vw] md:text-[15vw] font-black text-gcbp-primary leading-none whitespace-nowrap" id="left-text">GC</div>
            <div className="letter-block text-[12vw] mobile-small:text-[13vw] sm:text-[14vw] md:text-[15vw] font-black text-gcbp-primary leading-none whitespace-nowrap" id="right-text">BP</div>
        </div>
        {/* Hero Content - Appears after reveal */}
        <div className="hero-content max-w-4xl absolute z-20 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] mobile-small:w-[90%] sm:w-auto">
            <div className="text-gcbp-primary font-bold flex items-center justify-center gap-1.5 mobile-small:gap-2 mb-2.5 mobile-small:mb-3 sm:mb-4 text-[10px] mobile-small:text-xs xs:text-sm sm:text-base md:text-lg">
                <span className="w-1 mobile-small:w-1.5 h-1 mobile-small:h-1.5 xs:w-2 xs:h-2 bg-gcbp-primary rounded-full"></span> 
                GCBP
            </div>
            <h1 className="text-gcbp-primary text-[clamp(1.25rem,3.5vw,2.5rem)] mobile-small:text-[clamp(1.5rem,4vw,3rem)] sm:text-[clamp(1.75rem,5vw,3.5rem)] md:text-[clamp(2rem,6vw,4rem)] lg:text-[clamp(2.25rem,7vw,4.5rem)] xl:text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[1.1] mobile-small:leading-tight my-3 mobile-small:my-4 sm:my-5 md:my-6 lg:my-7 font-extrabold">Connecting Communities For A<br className="hidden mobile-small:block" />Better World & Shared Prosperity</h1>
            <div className="hero-btn-group flex justify-center gap-2 mobile-small:gap-2.5 xs:gap-3 sm:gap-4 md:gap-5 mt-5 mobile-small:mt-6 sm:mt-7 md:mt-8 lg:mt-10 flex-wrap">
                <button 
                  className="bg-gcbp-primary text-white px-4 mobile-small:px-5 xs:px-6 py-2 mobile-small:py-2.5 text-[12px] mobile-small:text-sm xs:text-base rounded-full border-none cursor-pointer font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95"
                  onClick={() => {
                    const element = document.querySelector('#who-we-are');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                    }
                  }}
                >
                  About
                </button>
                <button 
                  className="bg-transparent text-gcbp-primary border border-gcbp-primary px-4 mobile-small:px-5 xs:px-6 py-2 mobile-small:py-2.5 text-[12px] mobile-small:text-sm xs:text-base rounded-full cursor-pointer font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95"
                  onClick={() => {
                    const element = document.querySelector('#impact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                    }
                  }}
                >
                  Impact
                </button>
                <button 
                  className="bg-gcbp-primary text-white px-4 mobile-small:px-5 xs:px-6 py-2 mobile-small:py-2.5 text-[12px] mobile-small:text-sm xs:text-base rounded-full border-none cursor-pointer font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                    }
                  }}
                >
                  Join Us
                </button>
            </div>
        </div>
      </div>


      {/* About Section */}
      <section id="who-we-are" className="min-h-screen flex items-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mobile-small:gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center max-w-7xl mx-auto w-full">
            <div className="about-text order-2 md:order-1">
                <span className="text-gcbp-primary font-bold border-b-2 border-gcbp-primary pb-1 text-[9px] mobile-small:text-[10px] xs:text-xs sm:text-sm tracking-widest">WHO WE ARE</span>
                <h2 className="text-[clamp(1.25rem,3.5vw,2rem)] mobile-small:text-[clamp(1.5rem,4vw,2.25rem)] sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 mt-2.5 mobile-small:mt-3 sm:mt-4 md:mt-5 mb-2 mobile-small:mb-2.5 sm:mb-3 md:mb-3.5 leading-tight">Protecting the Planet Through Global Collective Action</h2>
                <p className="text-slate-600 leading-relaxed mb-4 mobile-small:mb-5 sm:mb-6 md:mb-7 text-[13px] mobile-small:text-sm sm:text-base md:text-lg lg:text-xl">We provide a platform for sustainable development and environmental protection across the globe. Our mission is to create lasting change through community-led initiatives.</p>
                <button 
                  className="bg-transparent text-gcbp-primary border border-gcbp-primary px-5 mobile-small:px-6 py-2 mobile-small:py-2.5 text-sm mobile-small:text-base rounded-full cursor-pointer font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95"
                  onClick={() => {
                    const element = document.querySelector('#impact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                    }
                  }}
                >
                  Read More
                </button>
            </div>
            <div className="about-img h-[220px] mobile-small:h-[250px] xs:h-[280px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] w-full rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1518644730709-0835105d93d7?auto=format&fit=crop&w=800&q=80" alt="About" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="flex bg-gray-100 py-5 mobile-small:py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-14 gap-0.5 mobile-small:gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 overflow-x-auto hide-scrollbar">
        <div className="flex-1 h-[160px] mobile-small:h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] xl:h-[280px] 2xl:h-[320px] min-w-[140px] mobile-small:min-w-[150px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[260px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=600&q=80" alt="Gallery 1" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
        <div className="flex-1 h-[160px] mobile-small:h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] xl:h-[280px] 2xl:h-[320px] min-w-[140px] mobile-small:min-w-[150px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[260px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80" alt="Gallery 2" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
        <div className="flex-1 h-[160px] mobile-small:h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] xl:h-[280px] 2xl:h-[320px] min-w-[140px] mobile-small:min-w-[150px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[260px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" alt="Gallery 3" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
        <div className="flex-1 h-[160px] mobile-small:h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] xl:h-[280px] 2xl:h-[320px] min-w-[140px] mobile-small:min-w-[150px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[260px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1504470695779-8aecc583c46a?auto=format&fit=crop&w=600&q=80" alt="Gallery 4" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
      </section>

      {/* Impact Bento Grid */}
      <section id="impact" className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
        <h3 className="text-gcbp-primary font-bold text-[clamp(1.125rem,2.8vw,1.625rem)] mobile-small:text-[clamp(1.25rem,3vw,1.75rem)] sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-4 mobile-small:mb-5 sm:mb-6 md:mb-7 lg:mb-8">OUR IMPACT</h3>
        <div className="impact-grid grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-3 mobile-small:gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto w-full">
            <div className="impact-card bg-slate-100 p-3 mobile-small:p-4 xs:p-5 sm:p-6 md:p-8 rounded-md relative overflow-hidden h-[220px] mobile-small:h-[250px] xs:h-[280px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-auto"><img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="Impact Main" className="w-full h-full object-cover rounded-sm absolute inset-0" /></div>
            <div>
                <div className="impact-flex flex flex-col sm:flex-row gap-3 mobile-small:gap-4 xs:gap-5 sm:gap-6 mb-3 mobile-small:mb-4 sm:mb-5">
                    <div className="impact-card bg-slate-100 p-3 mobile-small:p-4 xs:p-5 sm:p-6 md:p-8 rounded-md relative overflow-hidden flex-1">
                        <h4 className="text-2xl mobile-small:text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-slate-300 absolute top-2 mobile-small:top-3 right-2 mobile-small:right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 font-black">01</h4>
                        <p className="mt-5 mobile-small:mt-6 sm:mt-7 md:mt-8 font-bold text-sm mobile-small:text-base sm:text-lg md:text-xl text-slate-800 relative z-10">Strategic Impact</p>
                        <p className="text-[11px] mobile-small:text-xs sm:text-sm md:text-base text-slate-600 relative z-10">Targeted interventions that create ripples of positive change.</p>
                    </div>
                    <div className="impact-card bg-slate-100 p-3 mobile-small:p-4 xs:p-5 sm:p-6 md:p-8 rounded-md relative overflow-hidden flex-1">
                        <h4 className="text-2xl mobile-small:text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-slate-300 absolute top-2 mobile-small:top-3 right-2 mobile-small:right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 font-black">02</h4>
                        <p className="mt-5 mobile-small:mt-6 sm:mt-7 md:mt-8 font-bold text-sm mobile-small:text-base sm:text-lg md:text-xl text-slate-800 relative z-10">Community Growth</p>
                        <p className="text-[11px] mobile-small:text-xs sm:text-sm md:text-base text-slate-600 relative z-10">Empowering local leaders to sustain development.</p>
                    </div>
                </div>
                <div className="impact-card bg-slate-100 p-3 mobile-small:p-4 xs:p-5 sm:p-6 md:p-8 rounded-md relative overflow-hidden h-[160px] mobile-small:h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[320px] 2xl:h-[360px]"><img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80" alt="Impact Wide" className="w-full h-full object-cover rounded-sm absolute inset-0" /></div>
            </div>
        </div>
      </section>

      {/* GCBP Media Highlight Section */}
      <section className="gcbp-highlight relative pt-24 md:pt-36 pb-32 md:pb-44 bg-white overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Top Line */}
        <div className="gcbp-line top-line absolute h-0.5 bg-gcbp-primary w-40 md:w-[260px] top-[60px] right-[12%]" />

        <div className="gcbp-content relative max-w-[1200px] mx-auto">
        {/* Big Text */}
        <h2 className="gcbp-title absolute left-[180px] top-[calc(50%-185px)] -translate-y-1/2 text-[28vw] md:text-[clamp(72px,18vw,220px)] font-black text-gcbp-primary tracking-wider z-[1] -translate-x-[35%] pointer-events-none">
          GCBP
        </h2>

        {/* Media */}
        <div className="gcbp-media relative z-[2] mx-auto w-[90%] md:w-[70%] aspect-video rounded-md overflow-hidden shadow-2xl translate-x-[125px] translate-y-[75px]">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80"
            alt="GCBP Impact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>


        {/* Bottom Line */}
        <div className="gcbp-line bottom-line absolute h-0.5 bg-gcbp-primary w-40 md:w-[260px] bottom-[60px] left-[12%]" />
      </section>

      {/* Latest News */}
      <section id="news" className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-[8%] xl:px-[10%] 2xl:px-[12%]">
        <h3 className="text-gcbp-primary font-bold text-[clamp(1.125rem,2.8vw,1.625rem)] mobile-small:text-[clamp(1.25rem,3vw,1.75rem)] sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl uppercase border-b-2 border-slate-100 pb-2 mobile-small:pb-2.5 sm:pb-3 mb-4 mobile-small:mb-5 sm:mb-6 md:mb-7">Latest News</h3>
        <div className="news-grid grid grid-cols-1 md:grid-cols-2 gap-3 mobile-small:gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto w-full">
            <div className="news-card h-[180px] mobile-small:h-[200px] xs:h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] 2xl:h-[320px] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="News 1" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 mobile-small:p-4 xs:p-5 sm:p-6 md:p-7">
                    <h4 className="text-white font-bold text-xs mobile-small:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Corporate Sustainability Summit 2024</h4>
                </div>
            </div>
            <div className="news-card h-[180px] mobile-small:h-[200px] xs:h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] 2xl:h-[320px] rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1551845851-32f27f3dd0c2?auto=format&fit=crop&w=800&q=80" alt="News 2" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 mobile-small:p-4 xs:p-5 sm:p-6 md:p-7">
                    <h4 className="text-white font-bold text-xs mobile-small:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">New Water Projects Launched in Kenya</h4>
                </div>
            </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners text-center border-t border-b border-slate-200 py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 2xl:py-24 px-3 mobile-small:px-4 xs:px-5 sm:px-6 md:px-8">
        <p className="text-[9px] mobile-small:text-[10px] xs:text-xs sm:text-sm font-bold tracking-[0.15em] mobile-small:tracking-[0.2em] sm:tracking-[0.3em] text-slate-400 uppercase mb-5 mobile-small:mb-6 sm:mb-7 md:mb-8">Trusted Partnerships</p>
        <div className="logo-flex flex justify-around mt-5 mobile-small:mt-6 sm:mt-7 md:mt-8 opacity-50 font-bold flex-wrap gap-2 mobile-small:gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center max-w-4xl mx-auto">
            <div className="text-sm mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-400">PATAGONIA</div>
            <div className="text-sm mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-400">GOOGLE</div>
            <div className="text-sm mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-400">UNICEF</div>
            <div className="text-sm mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-400">WWF</div>
        </div>
      </section>

      {/* Support Cards */}
      <section id="contact" className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-6 xs:px-8 sm:px-[6%] md:px-[8%] lg:px-[10%] xl:px-[12%] bg-slate-50">
        <div className="support-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mobile-small:gap-5 xs:gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto w-full">
            <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
                     <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80" alt="Sustainability" className="w-full h-full object-cover" />
                </div>
                <h5 className="my-3 mobile-small:my-4 text-gcbp-primary font-bold text-base mobile-small:text-lg sm:text-xl">Sustainability</h5>
                <p className="text-xs mobile-small:text-sm sm:text-base text-slate-600">Projects focused on green energy and reducing carbon footprint in urban areas.</p>
            </div>
            <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                 <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
                     <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80" alt="Education" className="w-full h-full object-cover" />
                </div>
                <h5 className="my-3 mobile-small:my-4 text-gcbp-primary font-bold text-base mobile-small:text-lg sm:text-xl">Education</h5>
                <p className="text-xs mobile-small:text-sm sm:text-base text-slate-600">Empowering local leaders through workshops, scholarships, and school building.</p>
            </div>
            <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 md:col-span-1">
                 <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
                     <img src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=600&q=80" alt="Health" className="w-full h-full object-cover" />
                </div>
                <h5 className="my-3 mobile-small:my-4 text-gcbp-primary font-bold text-base mobile-small:text-lg sm:text-xl">Health</h5>
                <p className="text-xs mobile-small:text-sm sm:text-base text-slate-600">Providing clean water access and medical supplies to remote villages.</p>
            </div>
        </div>
      </section>
    </div>
  );
};