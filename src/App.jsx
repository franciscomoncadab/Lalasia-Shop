import React from 'react'
import './App.css';
import Articles from './components/Articles';
import Benefits from './components/Benefits';
import Crafter from './components/Crafter';
import Discount from './components/Discounts';
import Discover from './components/Discover';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProductSlider from './components/ProductSlider';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="container mx-auto px-[24px] xl:px-[100px]">
      <NavBar />
      <Discover />
      <Benefits />
      <ProductSlider />
      <Crafter />
      <Testimonials />
      <Articles />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
