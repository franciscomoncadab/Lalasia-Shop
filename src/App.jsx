import React from 'react'
import './App.css';
import Discover from './components/Discover';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="sm:mx-[24px]">
      <NavBar />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
