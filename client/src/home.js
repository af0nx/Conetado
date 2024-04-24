import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import Footer from './components/common/Footer';
import Newsletter from './components/common/Newsletter';


function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
