import React from 'react';
import Navbar from './common/Navbar';
import Passwords from './others/esqueceupassword';
import Footer from './common/Footer';


function Password() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Passwords />
      <Footer />
    </div>
  );
}

export default Password;