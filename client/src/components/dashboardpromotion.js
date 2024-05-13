import React from 'react';
import Navbar from './common/Navbar';
import DashboardPromotions from './others/dashboardpromocoes';
import Footer from './common/Footer';


function DashboardPromotion() {
  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardPromotions />
    </div>
  );
}

export default DashboardPromotion;