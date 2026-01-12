import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'DONATION GREEN SCHOOL WEBINAR',
    description: 'JOIN EXPERTS ONLINE TO EXPLORE SUSTAINABLE PRACTICES THAT CAN TRANSFORM SCHOOLS INTO ECO-FRIENDLY LEARNING SPACES.',
    date: 'SEPT 28, 2025',
    type: 'VIRTUAL',
    image: '/images/img5.jpg',
  },
  {
    id: 2,
    title: 'Climate Action Summit 2024',
    description: 'A global gathering of leaders, activists, and changemakers committed to accelerating climate solutions.',
    date: 'OCT 15, 2024',
    type: 'HYBRID',
    image: '/images/img6.jpg',
  },
  {
    id: 3,
    title: 'Community Planting Day',
    description: 'Join us for a day of tree planting and community engagement in local neighborhoods.',
    date: 'NOV 5, 2024',
    type: 'IN-PERSON',
    image: '/images/img7.jpg',
  },
];

interface EventsSectionProps {
  currentEventIndex: number;
  onNextEvent: () => void;
  onPrevEvent: () => void;
  onEventSelect: (index: number) => void;
  onCarouselPause: (paused: boolean) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  currentEventIndex,
  onNextEvent,
  onPrevEvent,
  onEventSelect,
  onCarouselPause,
}) => {
  return (
    <section className="events-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8 mobile-small:mb-10">
          <div className="flex items-center w-full max-w-7xl px-4">
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
            <div className="flex-1 h-0.5 bg-gcbp-primary mx-2 section-divider"></div>
            <div className="w-3 h-3 rounded-full bg-gcbp-primary"></div>
          </div>
        </div>
        
        <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] mobile-small:text-3xl xs:text-4xl sm:text-5xl font-bold text-gcbp-primary mb-4 mobile-small:mb-5 xs:mb-6 text-center">EVENTS</h2>
        <p className="text-[13px] mobile-small:text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-8 mobile-small:mb-10 xs:mb-12 text-center max-w-4xl mx-auto">
          DISCOVER IMPACTFUL EVENTS THAT BRING TOGETHER IDEAS, ACTION AND COLLABORATION. OUR EVENTS ARE DESIGNED TO INSPIRE CHANGE, DRIVE SUSTAINABILITY, AND CREATE MEASURABLE OUTCOMES. FROM AWARENESS TO ACTION, OUR EVENTS CREATE SPACES WHERE PURPOSE MEETS PARTICIPATION.
        </p>
        
        <div 
          className="relative h-[300px] mobile-small:h-[350px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] rounded-lg overflow-hidden shadow-2xl group"
          onMouseEnter={() => onCarouselPause(true)}
          onMouseLeave={() => onCarouselPause(false)}
        >
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`event-slide absolute inset-0 transition-opacity duration-500 ${
                index === currentEventIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {index === 0 && currentEventIndex === 0 ? (
                <video
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source src="/images/vid4.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 mobile-small:p-8 xs:p-10 sm:p-12">
                <div className="event-overlay-text opacity-0">
                  <h3 className="text-xl mobile-small:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 mobile-small:mb-4 xs:mb-5">
                    {event.title}
                  </h3>
                  <p className="text-sm mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 mb-4 mobile-small:mb-5 xs:mb-6 max-w-3xl">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 mobile-small:gap-6">
                    <span className="text-xs mobile-small:text-sm xs:text-base sm:text-lg text-white font-semibold">{event.date}</span>
                    <span className="text-xs mobile-small:text-sm xs:text-base sm:text-lg text-white font-semibold">{event.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={onPrevEvent}
            className="absolute left-2 mobile-small:left-3 xs:left-4 top-1/2 -translate-y-1/2 w-8 mobile-small:w-10 xs:w-12 h-8 mobile-small:h-10 xs:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-all z-20 opacity-0 group-hover:opacity-100 active:scale-95"
          >
            <ArrowLeft className="w-4 mobile-small:w-5 xs:w-6 h-4 mobile-small:h-5 xs:h-6 text-gcbp-primary" />
          </button>
          <button
            onClick={onNextEvent}
            className="absolute right-2 mobile-small:right-3 xs:right-4 top-1/2 -translate-y-1/2 w-8 mobile-small:w-10 xs:w-12 h-8 mobile-small:h-10 xs:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-all z-20 opacity-0 group-hover:opacity-100 active:scale-95"
          >
            <ArrowRight className="w-4 mobile-small:w-5 xs:w-6 h-4 mobile-small:h-5 xs:h-6 text-gcbp-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => onEventSelect(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentEventIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
