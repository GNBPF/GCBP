import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Play, ArrowLeft, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    date: 'March 15, 2024',
    category: 'Impact Story',
    title: 'Impactful Story: Community Transformation in Kenya',
    description: 'How our water access project changed lives in rural communities through sustainable infrastructure.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    date: 'March 10, 2024',
    category: 'Initiative',
    title: 'Upcoming Initiatives: Green Energy Expansion',
    description: 'We are launching solar panel installations across 12 new communities this spring.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    date: 'March 5, 2024',
    category: 'News',
    title: 'Partnership Announcement: Global Tech Leaders',
    description: 'Major technology companies join forces with GCBP to accelerate climate solutions.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
  },
];

const events = [
  {
    id: 1,
    title: 'Green School Webinar',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Climate Action Summit 2024',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Community Planting Day',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80',
  },
];

const faqs = [
  {
    question: 'How can I become a volunteer in your organization?',
    answer: 'You can apply to become a volunteer by visiting our volunteer opportunities page and filling out the application form. We welcome individuals from all backgrounds who are passionate about environmental conservation and community development.',
  },
  {
    question: 'Is there a donation fee?',
    answer: 'No, there is no fee for making a donation. 100% of your contribution goes directly to supporting our programs and initiatives. We are transparent about our use of funds and provide regular updates on how donations are utilized.',
  },
  {
    question: 'What kind of projects does the collective work on?',
    answer: 'GCBP works on a wide range of projects including conservation efforts, clean energy initiatives, environmental education programs, and sustainable agriculture. Visit our Programs page to learn more about each area of focus.',
  },
  {
    question: 'How can I apply for corporate sponsorship?',
    answer: 'Corporate partners can apply for sponsorship by contacting our partnerships team through the form on this page or by emailing partnerships@gcbp.org. We offer various sponsorship tiers with different benefits and engagement opportunities.',
  },
];

export const Media: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Gradient parallax
      gsap.to('.hero-gradient', {
        backgroundPosition: '0% 10%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Blog cards stagger
      gsap.from('.blog-card', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.blogs-section',
          start: 'top 80%',
        },
      });

      // Volunteer section divider animation
      gsap.from('.section-divider', {
        scaleX: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.volunteer-section',
          start: 'top 80%',
        },
      });

      gsap.from('.volunteer-heading', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.volunteer-section',
          start: 'top 80%',
        },
      });

      // Video zoom effect
      gsap.to('.volunteer-video', {
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.volunteer-video-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Donation section animations
      gsap.from('.donation-content', {
        x: -40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.donation-section',
          start: 'top 75%',
        },
      });

      gsap.from('.donation-image', {
        x: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.donation-section',
          start: 'top 75%',
        },
      });

      // Sponsorship section
      gsap.from('.sponsorship-content', {
        x: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.sponsorship-section',
          start: 'top 75%',
        },
      });

      gsap.from('.sponsorship-image', {
        x: -40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.sponsorship-section',
          start: 'top 75%',
        },
      });

      // Events carousel fade
      gsap.from('.event-slide', {
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.events-section',
          start: 'top 80%',
        },
      });

      // FAQ accordion animations
      gsap.utils.toArray<HTMLElement>('.faq-item').forEach((item) => {
        const answer = item.querySelector('.faq-answer');
        if (answer) {
          gsap.set(answer, { height: 0, opacity: 0 });
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Auto-play carousel with pause on hover
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  
  React.useEffect(() => {
    if (isCarouselPaused) return;
    
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 5000);

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
          rotation: 180,
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
    <div ref={rootRef} className="relative">
      {/* Hero Section */}
      <section className="hero-section relative bg-gradient-to-b from-gcbp-primary to-white pt-20 mobile-small:pt-24 xs:pt-28 sm:pt-32 md:pt-36 pb-12 mobile-small:pb-16 xs:pb-18 sm:pb-20 overflow-hidden">
        <div className="hero-gradient absolute inset-0 bg-gradient-to-b from-gcbp-primary via-blue-600 to-white opacity-100"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-10 text-center">
          <h1 className="hero-title text-[clamp(2rem,6vw,3.5rem)] mobile-small:text-[clamp(2.5rem,7vw,4rem)] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-4 mobile-small:mb-5 xs:mb-6 sm:mb-8">
            Media & Events
          </h1>
          <p className="hero-subtitle text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed px-2">
            A global collective making community partners and programs for a sustainable future.
          </p>
        </div>
      </section>

      {/* Blogs & Insights Section */}
      <section className="blogs-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mobile-small:gap-6 xs:gap-7 sm:gap-8 md:gap-10">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg mb-3 mobile-small:mb-4 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[180px] mobile-small:h-[200px] xs:h-[240px] sm:h-64 md:h-[280px] lg:h-[300px] object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>
                <div className="text-[10px] mobile-small:text-xs xs:text-sm uppercase tracking-wider text-slate-500 mb-2 mobile-small:mb-2.5">
                  {post.date} • {post.category}
                </div>
                <h3 className="text-base mobile-small:text-lg xs:text-xl sm:text-2xl font-bold text-slate-900 mb-2 mobile-small:mb-3 group-hover:text-gcbp-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-[12px] mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="volunteer-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="section-divider h-[1px] bg-slate-300 mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12"></div>
          <h2 className="volunteer-heading text-[clamp(1.5rem,4vw,2.25rem)] mobile-small:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-3 mobile-small:mb-4 xs:mb-5 sm:mb-6">
            VOLUNTEER OPPORTUNITIES
          </h2>
          <p className="text-center text-slate-700 text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12 max-w-3xl mx-auto px-4">
            Volunteering means becoming part of a community making a real-world change. Join us in creating sustainable solutions that impact lives across the globe.
          </p>
          
          <div className="volunteer-video-container relative h-[280px] mobile-small:h-[320px] xs:h-[380px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
            <video
              className="volunteer-video w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="w-14 mobile-small:w-16 xs:w-18 sm:w-20 md:w-24 h-14 mobile-small:h-16 xs:h-18 sm:h-20 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95"
              >
                <Play className="w-6 mobile-small:w-7 xs:w-8 sm:w-10 md:w-12 h-6 mobile-small:h-7 xs:h-8 sm:h-10 md:h-12 text-gcbp-primary ml-0.5 mobile-small:ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donations & Support Section */}
      <section className="donation-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 mobile-small:gap-10 xs:gap-12 sm:gap-14 items-center">
            <div className="donation-image order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80"
                alt="Donations"
                className="w-full h-[300px] mobile-small:h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="donation-content order-1 md:order-2">
              <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] mobile-small:text-3xl xs:text-4xl sm:text-5xl font-bold text-gcbp-primary mb-4 mobile-small:mb-5 xs:mb-6 sm:mb-8">DONATIONS</h2>
              <p className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 mobile-small:mb-7 xs:mb-8 sm:mb-10">
                Your contributions directly support communities in need. Every donation helps us expand our programs and reach more people with sustainable solutions.
              </p>
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 mobile-small:gap-5 xs:gap-6 sm:gap-8 mb-6 mobile-small:mb-7 xs:mb-8">
                <Link to="/contact" className="bg-gcbp-primary text-white px-6 mobile-small:px-7 xs:px-8 py-2.5 mobile-small:py-3 text-sm mobile-small:text-base xs:text-lg font-bold hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg active:scale-95 w-full xs:w-auto inline-block text-center rounded-full">
                  Donate
                </Link>
                <div className="text-center">
                  <p className="text-[10px] mobile-small:text-xs xs:text-sm font-bold text-slate-700 mb-1.5 mobile-small:mb-2">SUPPORT GCBP</p>
                  <div className="w-24 mobile-small:w-28 xs:w-32 sm:w-36 h-24 mobile-small:h-28 xs:h-32 sm:h-36 bg-white p-1.5 mobile-small:p-2 rounded-lg shadow-lg">
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-[9px] mobile-small:text-xs text-slate-500">
                      QR Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Sponsorship Section */}
      <section className="sponsorship-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mobile-small:gap-10 xs:gap-12 sm:gap-14 items-center">
            <div className="sponsorship-content order-2 md:order-1">
              <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] mobile-small:text-3xl xs:text-4xl sm:text-5xl font-bold text-gcbp-primary mb-4 mobile-small:mb-5 xs:mb-6 sm:mb-8">CORPORATE SPONSORSHIP</h2>
              <ul className="space-y-3 mobile-small:space-y-4 mb-6 mobile-small:mb-7 xs:mb-8 sm:mb-10">
                <li className="flex items-start gap-2 mobile-small:gap-3">
                  <span className="text-gcbp-primary font-bold text-lg mobile-small:text-xl">•</span>
                  <span className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700">Brand Visibility: Showcase your commitment to sustainability</span>
                </li>
                <li className="flex items-start gap-2 mobile-small:gap-3">
                  <span className="text-gcbp-primary font-bold text-lg mobile-small:text-xl">•</span>
                  <span className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700">Corporate Social Responsibility: Align with meaningful impact</span>
                </li>
                <li className="flex items-start gap-2 mobile-small:gap-3">
                  <span className="text-gcbp-primary font-bold text-lg mobile-small:text-xl">•</span>
                  <span className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700">Community Engagement: Connect with global communities</span>
                </li>
              </ul>
              <Link to="/contact" className="border-2 border-gcbp-primary text-gcbp-primary px-6 mobile-small:px-7 xs:px-8 py-2.5 mobile-small:py-3 text-sm mobile-small:text-base xs:text-lg font-bold hover:bg-gcbp-primary hover:text-white transition-all hover:-translate-y-1 active:scale-95 w-full md:w-auto inline-block text-center rounded-full">
                Become a Sponsor
              </Link>
            </div>
            <div className="sponsorship-image order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Sponsorship"
                className="w-full h-[300px] mobile-small:h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Carousel Section */}
      <section className="events-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative h-[300px] mobile-small:h-[350px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] rounded-lg overflow-hidden shadow-2xl group"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`event-slide absolute inset-0 transition-opacity duration-500 ${
                  index === currentEventIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 mobile-small:p-5 xs:p-6 sm:p-8 md:p-10">
                  <h3 className="text-lg mobile-small:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white">{event.title}</h3>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={prevEvent}
              className="absolute left-2 mobile-small:left-3 xs:left-4 top-1/2 -translate-y-1/2 w-8 mobile-small:w-10 xs:w-12 h-8 mobile-small:h-10 xs:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-all z-20 opacity-0 group-hover:opacity-100 active:scale-95"
            >
              <ArrowLeft className="w-4 mobile-small:w-5 xs:w-6 h-4 mobile-small:h-5 xs:h-6 text-gcbp-primary" />
            </button>
            <button
              onClick={nextEvent}
              className="absolute right-2 mobile-small:right-3 xs:right-4 top-1/2 -translate-y-1/2 w-8 mobile-small:w-10 xs:w-12 h-8 mobile-small:h-10 xs:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-all z-20 opacity-0 group-hover:opacity-100 active:scale-95"
            >
              <ArrowRight className="w-4 mobile-small:w-5 xs:w-6 h-4 mobile-small:h-5 xs:h-6 text-gcbp-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentEventIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] mobile-small:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12">Frequently Asked Questions</h2>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item faq-item-${index} border-b border-slate-200`}
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full py-4 mobile-small:py-5 xs:py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-sm mobile-small:text-base xs:text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-gcbp-primary transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="faq-chevron w-4 mobile-small:w-5 xs:w-6 h-4 mobile-small:h-5 xs:h-6 text-gcbp-primary transition-transform flex-shrink-0" />
                </button>
                <div className="faq-answer overflow-hidden">
                  <p className="pb-4 mobile-small:pb-5 xs:pb-6 text-[12px] mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

