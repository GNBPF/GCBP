import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  const isFlex = className.includes('flex');
  return (
    <section 
      id={id} 
      className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden ${className}`}
    >
      <div className={`relative z-10 max-w-7xl mx-auto ${isFlex ? 'h-full flex flex-col' : 'h-full w-full'}`}>
        {children}
      </div>
    </section>
  );
};