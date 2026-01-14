import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-sans tracking-wide transition-all duration-300 ease-out focus:outline-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-brand-offWhite text-brand-blue border border-transparent hover:bg-white hover:shadow-lg hover:shadow-brand-blue/10",
    outline: "bg-transparent text-brand-offWhite border border-brand-offWhite/30 hover:border-brand-offWhite hover:bg-brand-offWhite/5",
    text: "px-0 py-2 text-brand-blue border-b border-brand-blue/20 hover:border-brand-blue hover:text-brand-purple"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};