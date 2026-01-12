import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Media } from './pages/Media';
import { Contact } from './pages/Contact';
import { Stories } from './pages/Stories';
import { Footer } from './components/Footer';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ScrollToTop component - scrolls to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
    
    // Also refresh ScrollTrigger after a brief delay to ensure layout is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    // Only initialize Lenis on client side
    if (typeof window === 'undefined') return;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // Connect Lenis to ScrollTrigger
      const scrollHandler = () => {
        ScrollTrigger.update();
      };
      
      if (lenis.on) {
        lenis.on('scroll', scrollHandler);
      }

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }

      rafId = requestAnimationFrame(raf);

      return () => {
        try {
          if (rafId !== null) {
            cancelAnimationFrame(rafId);
          }
          if (lenis) {
            if (lenis.off && scrollHandler) {
              lenis.off('scroll', scrollHandler);
            }
            if (lenis.destroy) {
              lenis.destroy();
            }
          }
        } catch (e) {
          console.error('Error cleaning up Lenis:', e);
        }
      };
    } catch (error) {
      console.error('Error initializing Lenis (continuing without smooth scroll):', error);
      // App continues to work without smooth scroll
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;