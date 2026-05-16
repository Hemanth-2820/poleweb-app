import React from 'react';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Works from './components/Works';
import Industries from './components/Industries';

const HomePage = () => {
  return (
    <>
      <Hero />
      <BrandsMarquee />
      <Advantages />
      <Services />
      <Works />
      <Industries />
    </>
  );
};

export default HomePage;
