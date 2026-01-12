import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '../components/Contact/HeroSection';
import { ContactInfoSection } from '../components/Contact/ContactInfoSection';
import { ContactForm } from '../components/Contact/ContactForm';
import { MapSection } from '../components/Contact/MapSection';
import { FAQsSection } from '../components/Contact/FAQsSection';
import { CTASection } from '../components/Contact/CTASection';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.contact-hero-title', {
        y: 24,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out',
      });

      gsap.from('.contact-hero-text', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        delay: 0.15,
        ease: 'power3.out',
      });

      // Form card animation
      gsap.from('.contact-form-card', {
        scale: 0.96,
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
        ease: 'power2.out',
      });

      // Address section stagger
      gsap.from('.address-line', {
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.address-section',
          start: 'top 80%',
        },
      });

      // Map section zoom
      gsap.to('.map-image', {
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: '.map-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // FAQ accordion setup
      gsap.utils.toArray<HTMLElement>('.contact-faq-item').forEach((item) => {
        const answer = item.querySelector('.contact-faq-answer');
        if (answer) {
          gsap.set(answer, { height: 0, opacity: 0 });
        }
      });

      // CTA section fade
      gsap.from('.cta-section-content', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleFaqToggle = (index: number) => {
    const item = document.querySelector(`.contact-faq-item-${index}`);
    const answer = item?.querySelector('.contact-faq-answer') as HTMLElement;
    const chevron = item?.querySelector('.contact-faq-chevron') as HTMLElement;

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
        const prevItem = document.querySelector(`.contact-faq-item-${openFaq}`);
        const prevAnswer = prevItem?.querySelector('.contact-faq-answer') as HTMLElement;
        const prevChevron = prevItem?.querySelector('.contact-faq-chevron') as HTMLElement;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div ref={rootRef} className="relative bg-white">
      <HeroSection />
      <section className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mobile-small:gap-10 xs:gap-12 sm:gap-14 items-start">
            <ContactInfoSection />
            <ContactForm 
              formData={formData}
              isSubmitting={isSubmitting}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
      <MapSection />
      <FAQsSection openFaq={openFaq} onFaqToggle={handleFaqToggle} />
      <CTASection />
    </div>
  );
};

