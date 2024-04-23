import React from 'react';
import Navbar from './common/Navbar';
import Logins from './others/login';
import Footer from './common/Footer';


function Login() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Logins />
      <Footer />
    </div>
  );
}

export default Login;