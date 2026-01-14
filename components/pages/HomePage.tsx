import React from 'react';
import { Hero } from '../Hero';
import { Mission } from '../Mission';
import { Pillars } from '../Pillars';
import { Impact } from '../Impact';
import { Stories } from '../Stories';
import { Partners } from '../Partners';
import { CTA } from '../CTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Pillars />
      <Impact />
      <Stories />
      <Partners />
      <CTA />
    </>
  );
};