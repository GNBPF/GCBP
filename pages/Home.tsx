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
      // --- ANIMATION 1: HERO IMAGE SWAP ---
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        gsap.to(".row-1", {
          y: 300,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        });

        gsap.to(".row-2", {
          y: -300,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      }

      // --- ANIMATION 2: THE GCBP SPLIT REVEAL ---
      const revealSection = document.querySelector("#reveal");
      if (revealSection) {
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

        tl.to("#left-text", { x: -500, duration: 2 }, "split")
          .to("#right-text", { x: 500, duration: 2 }, "split")
          .to(".reveal-bg", { opacity: 1, scale: 1, duration: 1 }, "split+=0.5");
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

    }, mainRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef}>
      <style>{`
        /* --- VARIABLES & UTILS based on provided CSS --- */
        :root {
            --primary-blue: #1e40af;
            --light-gray: #f3f4f6;
            --text-gray: #4b5563;
        }

        .btn-main {
            background: var(--primary-blue);
            color: white;
            padding: 10px 25px;
            border-radius: 25px;
            border: none;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        .btn-main:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(30, 64, 175, 0.2);
        }

        /* --- HERO SECTION --- */
        .hero { padding: 140px 0 50px; text-align: center; position: relative; overflow: hidden; }
        
        @media (max-width: 768px) {
          .hero { padding: 120px 0 30px; }
        }
        .hero-images-wrap { height: 450px; position: relative; margin-bottom: 40px; }
        .image-row { display: flex; justify-content: center; gap: 20px; width: 100%; position: absolute; }
        
        .row-1 { top: 0; }
        .row-2 { top: 200px; }
        
        .hero-img { width: 150px; height: 180px; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .hero-img img { width: 100%; height: 100%; object-fit: cover; }
        .hero-content { max-width: 800px; margin: 280px auto 0; position: relative; z-index: 10; padding: 0 20px;}
        
        @media (max-width: 768px) {
          .hero-content { margin: 200px auto 0; }
          .hero-images-wrap { height: 350px; }
          .hero-img { width: 120px; height: 150px; }
        }
        .hero-content h1 { color: var(--primary-blue); font-size: 32px; text-transform: uppercase; line-height: 1.2; margin: 20px 0; font-weight: 800; }
        .hero-btn-group { display: flex; justify-content: center; gap: 15px; margin-top: 30px; flex-wrap: wrap; }
        
        @media (min-width: 768px) {
           .hero-content h1 { font-size: 48px; }
        }

        /* --- IMPACT BENTO GRID --- */
        .impact-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 50px; }
        @media (min-width: 768px) {
            .impact-grid { grid-template-columns: 1.5fr 2fr; }
        }
        .impact-card { background: var(--light-gray); padding: 30px; border-radius: 5px; position: relative; overflow: hidden; }
        .impact-card h4 { font-size: 40px; color: #ddd; position: absolute; top: 20px; right: 20px; font-weight: 900; }
        .impact-flex { display: flex; flex-direction: column; gap: 20px; }
        @media (min-width: 640px) {
            .impact-flex { flex-direction: row; }
        }
        .impact-card img { width: 100%; height: 100%; object-fit: cover; }

        /* --- THE GCBP REVEAL SECTION --- */
        .reveal-container { height: 100vh; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #fff; }
        .reveal-bg { position: absolute; width: 80%; height: 60%; z-index: 1; opacity: 0; transform: scale(0.8); object-fit: cover; border-radius: 10px; }
        .split-text-wrap { display: flex; z-index: 10; pointer-events: none; gap: 0.1em; }
        .letter-block { font-size: 15vw; font-weight: 900; color: var(--primary-blue); line-height: 1; white-space: nowrap; }
        
        @media (max-width: 768px) {
          .letter-block { font-size: 20vw; }
          .reveal-bg { width: 90%; height: 50%; }
        }

        /* --- NEWS SECTION --- */
        .news-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 30px; }
        @media (min-width: 768px) {
            .news-grid { grid-template-columns: 1fr 1fr; }
        }
        .news-card { height: 250px; border-radius: 8px; overflow: hidden; position: relative; transition: transform 0.3s ease; }
        .news-card:hover { transform: scale(1.02); }
        .news-card img { width: 100%; height: 100%; object-fit: cover; }

        /* --- PARTNERS --- */
        .partners { text-align: center; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 60px 0; }
        .logo-flex { display: flex; justify-content: space-around; margin-top: 30px; opacity: 0.5; font-weight: bold; flex-wrap: wrap; gap: 20px; align-items: center; }
        
        @media (max-width: 768px) {
          .partners { padding: 40px 20px; }
          .logo-flex { gap: 15px; }
          .logo-flex div { font-size: 1.25rem; }
        }

        /* --- SUPPORT CARDS --- */
        .support-grid { display: grid; grid-template-columns: 1fr; gap: 25px; }
        @media (min-width: 768px) {
            .support-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .support-card { background: white; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 20px; border-radius: 8px; transition: transform 0.3s ease; }
        .support-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        .support-card h5 { margin: 15px 0 10px; color: var(--primary-blue); font-weight: 700; font-size: 1.1rem; }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-images-wrap">
            <div className="image-row row-1">
                <div className="hero-img"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&w=300&q=80" alt="Nature" className="w-full h-full object-cover" /></div>
                <div className="hero-img"><img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=300&q=80" alt="Community" className="w-full h-full object-cover" /></div>
                <div className="hero-img"><img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=300&q=80" alt="Hands" className="w-full h-full object-cover" /></div>
                <div className="hero-img"><img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=300&q=80" alt="Volunteer" className="w-full h-full object-cover" /></div>
            </div>
            <div className="image-row row-2">
                <div className="hero-img"><img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=300&q=80" alt="Child" className="w-full h-full object-cover" /></div>
                <div className="hero-img"><img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=300&q=80" alt="Donation" className="w-full h-full object-cover" /></div>
                <div className="hero-img"><img src="https://images.unsplash.com/photo-1518398046578-8cca57782e39?auto=format&fit=crop&w=300&q=80" alt="Team" className="w-full h-full object-cover" /></div>
            </div>
        </div>
        <div className="hero-content">
            <div className="text-gcbp-primary font-bold flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 bg-gcbp-primary rounded-full"></span> 
                GCBP
            </div>
            <h1>Connecting Communities For A<br />Better World & Shared Prosperity</h1>
            <div className="hero-btn-group">
                <button 
                  className="btn-main"
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
                  className="btn-main" 
                  style={{ background: 'transparent', color: 'var(--primary-blue)', border: '1px solid var(--primary-blue)' }}
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
                  className="btn-main"
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
      </section>

      {/* About Section */}
      <section id="who-we-are" className="py-20 px-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="about-text">
                <span className="text-gcbp-primary font-bold border-b-2 border-gcbp-primary pb-1 text-sm tracking-widest">WHO WE ARE</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-6 mb-4">Protecting the Planet Through Global Collective Action</h2>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">We provide a platform for sustainable development and environmental protection across the globe. Our mission is to create lasting change through community-led initiatives.</p>
                <button 
                  className="btn-main" 
                  style={{ background: 'transparent', color: 'var(--primary-blue)', border: '1px solid var(--primary-blue)' }}
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
            <div className="about-img h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1518644730709-0835105d93d7?auto=format&fit=crop&w=800&q=80" alt="About" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="flex bg-gray-100 py-10 gap-1 overflow-x-auto hide-scrollbar">
        <div className="flex-1 h-[250px] min-w-[200px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=600&q=80" alt="Gallery 1" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
        <div className="flex-1 h-[250px] min-w-[200px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80" alt="Gallery 2" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
        <div className="flex-1 h-[250px] min-w-[200px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" alt="Gallery 3" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
        <div className="flex-1 h-[250px] min-w-[200px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1504470695779-8aecc583c46a?auto=format&fit=crop&w=600&q=80" alt="Gallery 4" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
      </section>

      {/* Impact Bento Grid */}
      <section id="impact" className="py-20 px-[10%]">
        <h3 className="text-gcbp-primary font-bold text-2xl mb-8">OUR IMPACT</h3>
        <div className="impact-grid">
            <div className="impact-card h-[400px] md:h-auto"><img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="Impact Main" className="w-full h-full object-cover rounded-sm absolute inset-0" /></div>
            <div>
                <div className="impact-flex mb-5">
                    <div className="impact-card flex-1">
                        <h4>01</h4>
                        <p className="mt-8 font-bold text-lg text-slate-800 relative z-10">Strategic Impact</p>
                        <p className="text-sm text-slate-600 relative z-10">Targeted interventions that create ripples of positive change.</p>
                    </div>
                    <div className="impact-card flex-1">
                        <h4>02</h4>
                        <p className="mt-8 font-bold text-lg text-slate-800 relative z-10">Community Growth</p>
                        <p className="text-sm text-slate-600 relative z-10">Empowering local leaders to sustain development.</p>
                    </div>
                </div>
                <div className="impact-card h-[250px]"><img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80" alt="Impact Wide" className="w-full h-full object-cover rounded-sm absolute inset-0" /></div>
            </div>
        </div>
      </section>

      {/* The Reveal Section */}
      <div className="reveal-container" id="reveal">
        <img className="reveal-bg" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80" alt="Reveal Child" />
        <div className="split-text-wrap">
            <div className="letter-block" id="left-text">GC</div>
            <div className="letter-block" id="right-text">BP</div>
        </div>
      </div>

      {/* Latest News */}
      <section id="news" className="py-20 px-[10%]">
        <h3 className="text-gcbp-primary font-bold text-2xl uppercase border-b-2 border-slate-100 pb-4 mb-8">Latest News</h3>
        <div className="news-grid">
            <div className="news-card group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="News 1" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h4 className="text-white font-bold text-lg">Corporate Sustainability Summit 2024</h4>
                </div>
            </div>
            <div className="news-card group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1551845851-32f27f3dd0c2?auto=format&fit=crop&w=800&q=80" alt="News 2" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h4 className="text-white font-bold text-lg">New Water Projects Launched in Kenya</h4>
                </div>
            </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners">
        <p className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase mb-8">Trusted Partnerships</p>
        <div className="logo-flex max-w-4xl mx-auto">
            <div className="text-2xl text-slate-400">PATAGONIA</div>
            <div className="text-2xl text-slate-400">GOOGLE</div>
            <div className="text-2xl text-slate-400">UNICEF</div>
            <div className="text-2xl text-slate-400">WWF</div>
        </div>
      </section>

      {/* Support Cards */}
      <section id="contact" className="py-20 px-[10%] bg-slate-50">
        <div className="support-grid max-w-6xl mx-auto">
            <div className="support-card">
                <div className="h-40 rounded-md overflow-hidden mb-4">
                     <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80" alt="Sustainability" className="w-full h-full object-cover" />
                </div>
                <h5>Sustainability</h5>
                <p className="text-sm text-slate-600">Projects focused on green energy and reducing carbon footprint in urban areas.</p>
            </div>
            <div className="support-card">
                 <div className="h-40 rounded-md overflow-hidden mb-4">
                     <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80" alt="Education" className="w-full h-full object-cover" />
                </div>
                <h5>Education</h5>
                <p className="text-sm text-slate-600">Empowering local leaders through workshops, scholarships, and school building.</p>
            </div>
            <div className="support-card">
                 <div className="h-40 rounded-md overflow-hidden mb-4">
                     <img src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=600&q=80" alt="Health" className="w-full h-full object-cover" />
                </div>
                <h5>Health</h5>
                <p className="text-sm text-slate-600">Providing clean water access and medical supplies to remote villages.</p>
            </div>
        </div>
      </section>
    </div>
  );
};