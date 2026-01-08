import React, { useLayoutEffect, useRef, useState } from 'react';
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
      <section className="hero-section relative bg-gradient-to-b from-gcbp-primary to-white pt-32 pb-20 overflow-hidden">
        <div className="hero-gradient absolute inset-0 bg-gradient-to-b from-gcbp-primary via-blue-600 to-white opacity-100"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="hero-title text-6xl md:text-7xl font-bold text-slate-900 mb-6">
            Media & Events
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-slate-700 leading-relaxed">
            A global collective making community partners and programs for a sustainable future.
          </p>
        </div>
      </section>

      {/* Blogs & Insights Section */}
      <section className="blogs-section py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg mb-4 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                  {post.date} • {post.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gcbp-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="volunteer-section py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider h-[1px] bg-slate-300 mb-12"></div>
          <h2 className="volunteer-heading text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6">
            VOLUNTEER OPPORTUNITIES
          </h2>
          <p className="text-center text-slate-700 text-lg mb-12 max-w-3xl mx-auto">
            Volunteering means becoming part of a community making a real-world change. Join us in creating sustainable solutions that impact lives across the globe.
          </p>
          
          <div className="volunteer-video-container relative h-[500px] rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
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
                className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              >
                <Play className="w-10 h-10 text-gcbp-primary ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donations & Support Section */}
      <section className="donation-section py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center">
            <div className="donation-image">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80"
                alt="Donations"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="donation-content">
              <h2 className="text-4xl font-bold text-gcbp-primary mb-6">DONATIONS</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Your contributions directly support communities in need. Every donation helps us expand our programs and reach more people with sustainable solutions.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <button className="bg-gcbp-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg">
                  Donate
                </button>
                <div className="text-center">
                  <p className="text-xs font-bold text-slate-700 mb-2">SUPPORT GCBP</p>
                  <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-lg">
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-xs text-slate-500">
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
      <section className="sponsorship-section py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="sponsorship-content">
              <h2 className="text-4xl font-bold text-gcbp-primary mb-6">CORPORATE SPONSORSHIP</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-gcbp-primary font-bold">•</span>
                  <span className="text-slate-700">Brand Visibility: Showcase your commitment to sustainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gcbp-primary font-bold">•</span>
                  <span className="text-slate-700">Corporate Social Responsibility: Align with meaningful impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gcbp-primary font-bold">•</span>
                  <span className="text-slate-700">Community Engagement: Connect with global communities</span>
                </li>
              </ul>
              <button className="border-2 border-gcbp-primary text-gcbp-primary px-8 py-3 rounded-full font-bold hover:bg-gcbp-primary hover:text-white transition-all hover:-translate-y-1">
                Become a Sponsor
              </button>
            </div>
            <div className="sponsorship-image">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Sponsorship"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Carousel Section */}
      <section className="events-section py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl group"
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-white">{event.title}</h3>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={prevEvent}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-all z-20 opacity-0 group-hover:opacity-100"
            >
              <ArrowLeft className="w-6 h-6 text-gcbp-primary" />
            </button>
            <button
              onClick={nextEvent}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-all z-20 opacity-0 group-hover:opacity-100"
            >
              <ArrowRight className="w-6 h-6 text-gcbp-primary" />
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
      <section className="faqs-section py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item faq-item-${index} border-b border-slate-200`}
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold text-slate-900 group-hover:text-gcbp-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown className="faq-chevron w-5 h-5 text-gcbp-primary transition-transform" />
                </button>
                <div className="faq-answer overflow-hidden">
                  <p className="pb-6 text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

