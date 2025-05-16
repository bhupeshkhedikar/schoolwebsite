// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from '.././src/Home';
import AdminDashboard from '.././src/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
