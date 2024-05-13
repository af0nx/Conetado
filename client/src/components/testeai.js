import React from 'react';
import Navbar from './common/Navbar';
import AI from './others/faq';
import Footer from './common/Footer';


function Sobre() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <AI />
      <Footer />
    </div>
  );
}

export default Sobre;