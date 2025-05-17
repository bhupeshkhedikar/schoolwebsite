// Pages/AdminDashboard.js
import React from 'react';
import NoticeManagement from './Components/Admin/NoticeManagement';
import SliderManagement from './Components/Admin/SliderManagement';
import ShiningStarsAdmin from './Components/Admin/ShiningStarsAdmin';
import StaffAdmin from './Components/Admin/StaffAdmin';

const AdminDashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Dashboard</h2>
      <NoticeManagement />
      <SliderManagement />
      <ShiningStarsAdmin />
      <StaffAdmin />
    </div>
  );
};

export default AdminDashboard;
