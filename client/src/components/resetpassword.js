import React from 'react';
import Navbar from './common/Navbar';
import ResetPasswords from './others/resetpassword';
import Footer from './common/Footer';


function ResetPassword() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <ResetPasswords />
      <Footer />
    </div>
  );
}

export default ResetPassword;