import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import Footer from './components/common/Footer';


function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
