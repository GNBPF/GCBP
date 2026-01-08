import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Mail, Phone, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactFaqs = [
  {
    question: 'Will I receive a certificate for volunteering?',
    answer: 'Yes, all volunteers who complete their commitment receive a certificate of participation. This recognizes your valuable contribution to our programs and can be used for professional development or personal records.',
  },
  {
    question: 'How long does it take to get a response?',
    answer: 'We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our direct line at +91 999-888-7777.',
  },
  {
    question: 'Can I schedule a meeting with the team?',
    answer: 'Absolutely! You can request a meeting through the contact form or by emailing us at hello@gcbp.org. We welcome the opportunity to discuss how you can get involved.',
  },
  {
    question: 'What information should I include in my message?',
    answer: 'Please include your name, contact information, and a brief description of how you would like to get involved or what questions you have. The more details you provide, the better we can assist you.',
  },
];

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
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="contact-hero-title text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Contact Us
          </h1>
          <p className="contact-hero-text text-xl text-slate-700 leading-relaxed max-w-3xl">
            We'd love to hear from you. Whether you have questions about our programs, want to get involved, or simply want to learn more, our team is here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Address & Contact Info */}
            <div className="address-section space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="address-line flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gcbp-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                      <p className="text-slate-700 leading-relaxed">
                        25-28 F1 St. No-2, Chakrata Road,<br />
                        Nirman Nagar, Dehradun, 248001<br />
                        Mumbai, Maharashtra 400051
                      </p>
                    </div>
                  </div>

                  <div className="address-line flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gcbp-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                      <a href="mailto:hello@gcbp.org" className="text-gcbp-primary hover:underline">
                        hello@gcbp.org
                      </a>
                    </div>
                  </div>

                  <div className="address-line flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gcbp-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                      <a href="tel:+919998887777" className="text-gcbp-primary hover:underline">
                        +91 999-888-7777
                      </a>
                    </div>
                  </div>

                  <div className="address-line flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gcbp-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Availability</h3>
                      <p className="text-slate-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form Card */}
            <div className="contact-form-card bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">GET IN TOUCH</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gcbp-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Location Map"
              className="map-image w-full h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-6 py-3 rounded-full font-semibold text-gcbp-primary">
                View on Map
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-0">
            {contactFaqs.map((faq, index) => (
              <div
                key={index}
                className={`contact-faq-item contact-faq-item-${index} border-b border-slate-200`}
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold text-slate-900 group-hover:text-gcbp-primary transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="contact-faq-chevron w-5 h-5 text-gcbp-primary transition-transform flex-shrink-0" />
                </button>
                <div className="contact-faq-answer overflow-hidden">
                  <p className="pb-6 text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-section-content">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Do You Have Any Questions for Us?
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              If you have any questions, please feel free to reach out to us.
            </p>
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 border border-slate-300 rounded-full focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
                />
              </div>
              <button className="w-full bg-gcbp-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

