import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const manifestoLines = [
  'We are a purpose-led collective uniting communities, innovators, and institutions to build a healthier planet.',
  'We believe that real change begins with collective action and responsible stewardship of our shared future.',
  'Every collaboration, every project, and every voice moves us closer to a sustainable, equitable world.',
];

const stats = [
  { label: 'Lives Impacted', value: 10000, suffix: '+', id: 'impact' },
  { label: 'Communities Reached', value: 42, suffix: '+', id: 'communities' },
  { label: 'Projects Active', value: 18, suffix: '', id: 'projects' },
];

const team = [
  { name: 'Ava Patel', role: 'Impact Lead', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
  { name: 'Liam Chen', role: 'Partnerships', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80&sat=-50' },
  { name: 'Maya Rivera', role: 'Programs', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80&hue=20' },
  { name: 'Noah Kim', role: 'Advocacy', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80&sat=10' },
];

const supporters = [
  { quote: 'Their dedication inspires our own.', name: 'Mera Desai' },
  { quote: 'We trust their impact-first approach.', name: 'Arun Bedi' },
  { quote: 'Collaboration that truly delivers.', name: 'Leah Morgan' },
  { quote: 'A partner that listens and acts.', name: 'Jonas Reed' },
];

export const About: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Hero text parallax on mouse
      const heroText = document.querySelector('.hero-text');
      if (heroText) {
        const handleMove = (e: MouseEvent) => {
          const { innerWidth, innerHeight } = window;
          const x = (e.clientX - innerWidth / 2) / innerWidth;
          const y = (e.clientY - innerHeight / 2) / innerHeight;
          gsap.to(heroText, { x: x * -15, y: y * -15, duration: 0.6, ease: 'expo.out' });
        };
        window.addEventListener('mousemove', handleMove);
        gsap.to('.hero-gradient', { opacity: 1, duration: 1.2, ease: 'power2.out' });
        gsap.from('.hero-heading', { y: 24, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
        gsap.from('.hero-sub', { y: 24, opacity: 0, duration: 0.8, delay: 0.25, ease: 'power3.out' });
        gsap.to('.hero-bg', { backgroundPosition: '10% 50%', duration: 12, ease: 'none', repeat: -1, yoyo: true });

        return () => window.removeEventListener('mousemove', handleMove);
      }

      // Manifesto lines scrubbing
      gsap.utils.toArray<HTMLElement>('.manifesto-line').forEach((line) => {
        gsap.set(line, { opacity: 0.2, color: '#1f2937' });
        gsap.to(line, {
          opacity: 1,
          color: '#1e40af',
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        });
      });

      // Paragraph fade-in
      gsap.from('.about-paragraph', {
        opacity: 0,
        y: 16,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.about-paragraph',
          start: 'top 85%',
        },
      });

      // Parallax images
      const parallaxPairs = [
        { selector: '.pillar-img-top', y: 20 },
        { selector: '.pillar-img-mid', y: 40 },
        { selector: '.pillar-img-bot', y: 25 },
      ];
      parallaxPairs.forEach(({ selector, y }) => {
        gsap.to(selector, {
          y,
          ease: 'none',
          scrollTrigger: {
            trigger: '.pillars',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Pillar cards stagger
      gsap.from('.pillar-card', {
        x: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pillars',
          start: 'top 80%',
        },
      });

      // Pillar dividers draw
      gsap.utils.toArray<SVGPathElement>('.divider-path').forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: path,
            start: 'top 85%',
          },
        });
      });

      // Achievements list stagger
      gsap.from('.achievement-item', {
        x: -16,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.achievements',
          start: 'top 85%',
        },
      });

      // Impact video reveal
      gsap.from('.impact-video', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.impact-video',
          start: 'top 85%',
        },
      });

      // Buttons pop
      gsap.from('.cta-btn', {
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.cta-buttons',
          start: 'top 90%',
        },
      });

      // Count up stats
      stats.forEach((stat) => {
        const el = document.getElementById(`stat-${stat.id}`);
        if (!el) return;
        gsap.fromTo(
          { val: 0 },
          { val: stat.value, duration: 1.2, ease: 'power1.out', scrollTrigger: { trigger: el, start: 'top 90%' } },
          {
            val: stat.value,
            onUpdate: function () {
              el.textContent = `${Math.floor((this.targets()[0] as any).val)}${stat.suffix}`;
            },
          }
        );
      });

      // Team cards stagger
      gsap.from('.team-card', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 85%',
        },
      });

      // Supporter floating cards
      gsap.utils.toArray<HTMLElement>('.supporter-card').forEach((card, i) => {
        gsap.to(card, {
          y: 10,
          duration: 3 + i * 0.4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
      });

      // CTA pulse
      gsap.to('.join-btn', {
        scale: 1.04,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-white text-slate-900">
      <style>{`
        .hero-gradient { opacity: 0; }
        .hero-bg { background-position: center; background-size: cover; }
        .ripple-bg {
          background: radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(30,64,175,0.6) 35%, rgba(30,64,175,0.9) 70%);
          animation: ripple 8s ease-in-out infinite alternate;
        }
        @keyframes ripple {
          0% { background-size: 100% 100%; }
          100% { background-size: 110% 110%; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover hero-bg"
          src="https://cdn.coverr.co/videos/coverr-mist-over-the-forest-1608/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 hero-gradient" style={{ background: 'linear-gradient(to bottom, rgba(30, 64, 175, 0.7), rgba(30,64,175,0.9))' }} />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6 hero-text">
          <p className="tracking-[0.2em] text-sm uppercase hero-sub">Our Collective Commitment</p>
          <h1 className="text-5xl md:text-6xl font-black mt-4 hero-heading">GCBP — About Company</h1>
          <p className="max-w-2xl mt-4 text-base md:text-lg text-blue-100">
            A global network uniting communities, partners, and changemakers for a sustainable future.
          </p>
        </div>
      </section>

      {/* Manifesto + Intro */}
      <section className="py-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6">
          <span className="text-sm tracking-[0.25em] text-gcbp-primary font-semibold uppercase">About Us</span>
          <p className="about-paragraph text-lg leading-relaxed text-slate-700 max-w-2xl">
            GCBP is a purpose-led initiative bringing together communities, innovators, and institutions to create sustainable, inclusive,
            and impactful solutions for a healthier planet. We drive real change through collective action and responsible stewardship of our shared future.
          </p>
        </div>
        <div className="flex-1 bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="space-y-3">
            {manifestoLines.map((line, idx) => (
              <p key={idx} className="manifesto-line text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 px-6 md:px-12 lg:px-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start pillars">
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl shadow-lg h-52 pillar-img-top">
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80" alt="Community" className="w-full h-full object-cover" />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg h-52 pillar-img-mid">
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80" alt="Collaboration" className="w-full h-full object-cover" />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg h-52 pillar-img-bot">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" alt="Volunteer" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-6">
          {[
            { title: 'Our Mission', body: 'Advance collective action for climate resilience, equity, and sustainable prosperity across communities.' },
            { title: 'Our Vision', body: 'A healthier planet where every community thrives through sustainable innovation and shared stewardship.' },
            { title: 'Our Funding', body: 'Impact-backed investments, philanthropic partners, institutional grants, and community-driven initiatives.' },
            { title: 'Our Challenges', body: 'Bridging resource gaps, scaling local solutions, and accelerating measurable climate outcomes.' },
          ].map((item, i) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm pillar-card relative overflow-hidden">
              <svg className="absolute -top-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                <path className="divider-path" d="M0 2 H100" stroke="#1e40af" strokeWidth="2" fill="none" />
              </svg>
              <h3 className="text-lg font-semibold text-gcbp-primary mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Impact */}
      <section className="py-24 px-6 md:px-12 lg:px-24 grid lg:grid-cols-[1fr_1fr_1fr] gap-12 items-center achievements">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Achievements & Impact</h2>
          <ul className="space-y-4">
            {[
              'UN SDG recognition in 2024',
              'Clean water access for 12k rural households',
              'Climate education in 40+ communities',
              'Published research on circular solutions',
            ].map((item) => (
              <li
                key={item}
                className="achievement-item flex items-start gap-3 rounded-lg bg-slate-50 border border-slate-100 p-3 hover:shadow-sm hover:border-gcbp-primary/40 transition"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-gcbp-primary" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg impact-video border border-slate-100">
          <video
            className="w-full h-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-hands-in-a-circle-1985/1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <p className="text-sm uppercase tracking-wide text-slate-500">{stat.label}</p>
                <div className="mt-2 text-3xl font-bold text-gcbp-primary" id={`stat-${stat.id}`}>
                  0{stat.suffix}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 cta-buttons">
            <button className="cta-btn px-5 py-3 bg-gcbp-primary text-white rounded-full shadow-md hover:bg-blue-800 transition">
              Donate
            </button>
            <button className="cta-btn px-5 py-3 bg-white text-gcbp-primary border border-gcbp-primary rounded-full hover:bg-blue-50 transition">
              Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Our Team</h2>
        </div>
        <div className="team-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="team-card bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition">
              <div className="overflow-hidden rounded-full w-28 h-28 mx-auto">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-semibold text-slate-900">{member.name}</p>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supporters */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gcbp-primary text-white ripple-bg">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Our Supporters</h2>
          <p className="text-blue-100 mt-2">The backbone of our mission—every story, every impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supporters.map((s, idx) => (
            <div key={idx} className="supporter-card bg-white/10 border border-white/15 rounded-xl p-5 shadow-lg backdrop-blur-sm">
              <p className="text-sm text-blue-50 leading-relaxed mb-4">“{s.quote}”</p>
              <p className="text-sm font-semibold">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Want to be a part of it?</h3>
        <p className="text-slate-600 mb-6">Join our collective and drive change where it matters most.</p>
        <button className="join-btn px-6 py-3 bg-gcbp-primary text-white rounded-full shadow-md hover:bg-blue-800 transition">
          Join Us
        </button>
      </section>

    </div>
  );
};

export default About;

