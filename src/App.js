import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './comp/pages/landingpage.js';
import Register from './comp/pages/register-login.js';
import Login from './comp/pages/login.js';
import TableDemo from './comp/pages/temp1.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/temp" element = {<TableDemo/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;

