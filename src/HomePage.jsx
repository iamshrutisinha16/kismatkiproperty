import React from 'react';
import HeroSection from './sections/HeroSection';
import SearchFilter from './sections/SearchFilter';
import FeaturedProperties from './sections/FeaturedProperties';
import PopularCities from './sections/PopularCities';
import Testimonials from "./sections/TestiMonials";
import WhyChooseUs from './sections/WhyChooseUs';
import SellProperty from './sections/SellProperty';
import FaqAndBlog from './sections/FaqAndBlog';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <SearchFilter />
      <FeaturedProperties />
      <PopularCities />
      <Testimonials />
      <WhyChooseUs/>
      <SellProperty/>
      <FaqAndBlog/>
    </div>
  );
}

export default HomePage;
