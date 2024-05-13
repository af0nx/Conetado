import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import TermsAndConditions from './others/termosecondicoes';


function TermsAndCondition() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}

export default TermsAndCondition;