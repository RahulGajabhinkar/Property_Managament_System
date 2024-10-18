/* eslint-disable no-unused-vars */

import './App.css';
import PendingIssues from './components/PendingIssues';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/AdminProfile';
import AddProperty from './components/AddProperty';
function App() {
  const [isVisible , setIsVisible] =useState(true);
  
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/AdminRegister" element={<AdminRegister/>} />
          <Route path="/AdminLogin"element= {<AdminLogin/>}/>
          <Route path="/PendingIssues" element={<PendingIssues/>}/>
          <Route path="/profile" element = {<Profile/>}/>
          <Route path="/addProperty" element = {<AddProperty/>}/>
        </Routes>
      </Router>
      {/* <AdminRegister/> */}
    </div>
  );
}

export default App;