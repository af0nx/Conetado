import React from 'react';
import Navbar from './common/Navbar';
import Blog from './others/blog';
import Footer from './common/Footer';


function Sobre() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}

export default Sobre;