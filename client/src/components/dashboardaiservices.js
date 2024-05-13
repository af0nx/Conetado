import React from 'react';
import Navbar from './common/Navbar';
import DashboardServices from './others/dashboardservicosai';
import Footer from './common/Footer';


function DashboardService() {
  return (
    <div className=" min-h-screen bg-gray-900">
      <DashboardServices />
    </div>
  );
}

export default DashboardService;