import React from 'react';
import Navbar from './common/Navbar';
import AI from './others/dashboardchatgpt';
import Footer from './common/Footer';


function DashboardAI() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <AI />
      <Footer />
    </div>
  );
}

export default DashboardAI;