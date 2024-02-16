import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './components/pages/landingpage.js';
import Register from './components/pages/register-login.js';
import Login from './components/pages/login.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
       
      </Routes>
    </Router>
  );
}

export default App;

