import React from 'react';
import HeroSection from './sections/HeroSection';
import FeaturedProperties from './sections/FeaturedProperties';
import PopularCities from './sections/PopularCities';
import WhyChooseUs from './sections/WhyChooseUs';
import SellProperty from './sections/SellProperty';
import FaqAndBlog from './sections/FaqAndBlog';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProperties />
      <PopularCities />
      <WhyChooseUs/>
      <SellProperty/>
      <FaqAndBlog/>
    </div>
  );
}

export default HomePage;
