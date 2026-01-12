import React, { useState } from 'react';

interface ContactFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  isSubmitting: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ formData, isSubmitting, onInputChange, onSubmit }) => {
  return (
    <div className="contact-form-card bg-white rounded-2xl shadow-2xl p-5 mobile-small:p-6 xs:p-7 sm:p-8 md:p-10 lg:p-12">
      <h2 className="text-[clamp(1.5rem,4vw,2rem)] mobile-small:text-2xl xs:text-3xl sm:text-4xl font-bold text-slate-900 mb-4 mobile-small:mb-5 xs:mb-6 sm:mb-8">GET IN TOUCH</h2>
      <form onSubmit={onSubmit} className="space-y-4 mobile-small:space-y-5 xs:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mobile-small:gap-5 xs:gap-6">
          <div>
            <label htmlFor="firstName" className="block text-xs mobile-small:text-sm xs:text-base font-medium text-slate-700 mb-1.5 mobile-small:mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={onInputChange}
              required
              className="w-full px-3 mobile-small:px-4 py-2.5 mobile-small:py-3 text-sm mobile-small:text-base border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xs mobile-small:text-sm xs:text-base font-medium text-slate-700 mb-1.5 mobile-small:mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={onInputChange}
              required
              className="w-full px-3 mobile-small:px-4 py-2.5 mobile-small:py-3 text-sm mobile-small:text-base border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs mobile-small:text-sm xs:text-base font-medium text-slate-700 mb-1.5 mobile-small:mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            required
            className="w-full px-3 mobile-small:px-4 py-2.5 mobile-small:py-3 text-sm mobile-small:text-base border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
            placeholder="john.doe@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs mobile-small:text-sm xs:text-base font-medium text-slate-700 mb-1.5 mobile-small:mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onInputChange}
            required
            className="w-full px-3 mobile-small:px-4 py-2.5 mobile-small:py-3 text-sm mobile-small:text-base border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all"
            placeholder="+91 1234567890"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs mobile-small:text-sm xs:text-base font-medium text-slate-700 mb-1.5 mobile-small:mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onInputChange}
            required
            rows={5}
            className="w-full px-3 mobile-small:px-4 py-2.5 mobile-small:py-3 text-sm mobile-small:text-base border border-slate-300 rounded-lg focus:border-gcbp-primary focus:ring-2 focus:ring-gcbp-primary/20 outline-none transition-all resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gcbp-primary text-white px-6 mobile-small:px-7 xs:px-8 py-3 mobile-small:py-3.5 xs:py-4 rounded-full font-bold text-sm mobile-small:text-base xs:text-lg hover:bg-blue-800 transition-all hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
