import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full py-16 md:py-20 px-4 md:px-8 lg:px-12 overflow-hidden ${className}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto h-full w-full">
        {children}
      </div>
    </section>
  );
};