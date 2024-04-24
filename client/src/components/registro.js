import React from 'react';
import Navbar from './common/Navbar';
import Registers from './others/register';
import Footer from './common/Footer';


function Register() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Registers />
      <Footer />
    </div>
  );
}

export default Register;