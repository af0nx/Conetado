import React from 'react';
import Navbar from './common/Navbar';
import Dashboards from './others/dashboard';
import Footer from './common/Footer';


function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Dashboards />
    </div>
  );
}

export default Dashboard;