import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/AdminProfile';
import AddProperty from './components/AddProperty';
import React from "react";
function App() {
  const [isVisible , setIsVisible] =useState(true);
  
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/profile" element={<Home/>}/> 
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/AdminRegister" element={<AdminRegister/>} />
          <Route path="/AdminLogin"element= {<AdminLogin/>}/>
          <Route path="/" element = {<Profile/>}/>
          <Route path="/addProperty" element = {<AddProperty/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;