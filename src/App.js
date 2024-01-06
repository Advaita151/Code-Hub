import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './components/pages/landingpage';
import Register from './components/pages/register-login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
       
      </Routes>
    </Router>
  );
}

export default App;

