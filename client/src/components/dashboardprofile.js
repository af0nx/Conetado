import React from 'react';
import Navbar from './common/Navbar';
import DashboardProfiles from './others/dashboardprofile';
import Footer from './common/Footer';


function Dashboard() {
  return (
    <div className="bg-gray-900">
      <DashboardProfiles />
    </div>
  );
}

export default Dashboard;