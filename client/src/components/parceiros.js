import React from 'react';
import Navbar from './common/Navbar';
import Parceiros from './others/parceiros';
import Footer from './common/Footer';


function Parceiro() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Parceiros />
      <Footer />
    </div>
  );
}

export default Parceiro;