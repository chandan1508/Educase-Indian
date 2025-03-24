import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import AccountSettings from './pages/accountSetting/AccountSettings';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;