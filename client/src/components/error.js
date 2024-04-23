import React from 'react';
import Navbar from './common/Navbar';
import Errors from './others/error';
import Footer from './common/Footer';


function Error() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Errors />
      <Footer />
    </div>
  );
}

export default Error;