import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden bg-[#163FA5] pt-16 xs:pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Flowing Lines Background - Abstract Community Figures */}
      {/* Hidden on very small mobile for performance */}
      <div className="hero-flowing-lines absolute inset-0 z-[1] opacity-[0.08] pointer-events-none hidden xs:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Abstract human figure 1 - Left side */}
          <g className="flowing-group-1">
            <path
              d="M200 800 Q180 700 200 600 Q220 500 200 400"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              className="flowing-line"
            />
            <path
              d="M200 600 L150 650 L200 700 L250 650 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              className="flowing-line"
            />
            <path
              d="M200 800 L180 900 L200 950 L220 900 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              className="flowing-line"
            />
          </g>

          {/* Abstract human figure 2 - Center left */}
          <g className="flowing-group-2">
            <path
              d="M500 750 Q480 650 500 550 Q520 450 500 350"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              className="flowing-line"
            />
            <path
              d="M500 550 L450 600 L500 650 L550 600 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              className="flowing-line"
            />
            <path
              d="M500 750 L480 850 L500 900 L520 850 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              className="flowing-line"
            />
          </g>

          {/* Abstract human figure 3 - Center right */}
          <g className="flowing-group-3">
            <path
              d="M1400 800 Q1420 700 1400 600 Q1380 500 1400 400"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              className="flowing-line"
            />
            <path
              d="M1400 600 L1450 650 L1400 700 L1350 650 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              className="flowing-line"
            />
            <path
              d="M1400 800 L1420 900 L1400 950 L1380 900 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              className="flowing-line"
            />
          </g>

          {/* Abstract human figure 4 - Right side */}
          <g className="flowing-group-4">
            <path
              d="M1700 750 Q1720 650 1700 550 Q1680 450 1700 350"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              className="flowing-line"
            />
            <path
              d="M1700 550 L1750 600 L1700 650 L1650 600 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              className="flowing-line"
            />
            <path
              d="M1700 750 L1720 850 L1700 900 L1680 850 Z"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              className="flowing-line"
            />
          </g>

          {/* Connecting flowing lines between figures */}
          <path
            d="M300 600 Q600 500 900 550 Q1200 600 1500 550"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
            className="flowing-line flowing-connector-1"
            strokeDasharray="5 10"
          />
          <path
            d="M400 700 Q700 650 1000 700 Q1300 750 1600 700"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
            className="flowing-line flowing-connector-2"
            strokeDasharray="5 10"
          />
          <path
            d="M250 800 Q550 750 850 800 Q1150 850 1450 800"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
            className="flowing-line flowing-connector-3"
            strokeDasharray="5 10"
          />
        </svg>
      </div>

      {/* Subtle System Mesh - Intelligence Layer */}
      <div className="hero-mesh absolute inset-0 z-[1] opacity-[0.06] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M100 300 L400 200 L700 300 L900 150"
            stroke="white"
            strokeWidth="0.6"
            fill="none"
            className="mesh-line mesh-line-1"
          />
          <path
            d="M200 450 L500 350 L800 420"
            stroke="white"
            strokeWidth="0.4"
            fill="none"
            className="mesh-line mesh-line-2"
          />
          <path
            d="M50 150 L300 100 L600 180 L950 80"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            className="mesh-line mesh-line-3"
          />
        </svg>
      </div>

      {/* Brand Gradient Overlay - Soft, blurred, organic */}
      <div className="hero-gradient absolute inset-0 w-full h-full opacity-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(61, 0, 145, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(255, 145, 0, 0.12) 0%, transparent 50%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
        <h1 className="hero-title font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] font-bold text-white mb-6 xs:mb-8 sm:mb-10 md:mb-12 leading-[1.1]">
          <span className="hero-line-1 block opacity-0">Together for a</span>
          <span className="hero-line-2 block opacity-0">Better Planet</span>
          {/* Micro detail underline */}
          <span className="hero-underline block mx-auto mt-3 xs:mt-4 w-20 xs:w-24 h-px bg-white/70 scale-x-0 origin-left" />
        </h1>
        
        <p className="hero-subtitle text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 opacity-0 leading-relaxed font-sans px-2">
          Empowering global communities through environmental action, sustainable living, and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center items-center opacity-0 px-4">
          <button className="cta-primary relative w-full xs:w-auto px-8 xs:px-10 sm:px-12 py-3 xs:py-4 sm:py-5 bg-white text-[#163FA5] font-semibold text-sm xs:text-base sm:text-lg rounded-lg overflow-hidden transition-colors duration-300 font-sans min-h-[44px]">
            <span className="relative z-10">Learn More</span>
          </button>
          <button className="cta-secondary w-full xs:w-auto px-8 xs:px-10 sm:px-12 py-3 xs:py-4 sm:py-5 border-2 border-white text-white font-semibold text-sm xs:text-base sm:text-lg rounded-lg hover:bg-white hover:text-[#163FA5] transition-all duration-300 font-sans min-h-[44px]">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};
