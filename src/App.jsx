import React from 'react'
import './App.css';
import Benefits from './components/Benefits';
import Crafter from './components/Crafter';
import Discover from './components/Discover';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProductSlider from './components/ProductSlider';

function App() {
  return (
    <div className="container mx-auto px-[24px] sm:mx-[24px]">
      <NavBar />
      <Discover />
      <Benefits />
      <ProductSlider />
      <Crafter />
      <Footer />
    </div>
  );
}

export default App;
