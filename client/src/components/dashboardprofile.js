import React from 'react';
import Navbar from './common/Navbar';
import DashboardProfiles from './others/dashboardprofile';
import Footer from './common/Footer';


function DashboardProfile() {
  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardProfiles />
    </div>
  );
}

export default DashboardProfile;