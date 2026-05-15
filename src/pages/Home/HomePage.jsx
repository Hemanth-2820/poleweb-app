import React from 'react';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import BlogSection from './components/BlogSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <BrandsMarquee />
      <Advantages />
      <Services />
      <Works />
      <Testimonials />
      <Industries />
      <BlogSection />
    </>
  );
};

export default HomePage;
