import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserSignup from './user_signup';
import UserLogin from './user_login';
import NoMatch from './nomatch';
import Home from './home';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign_up' element={<UserSignup />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </div>
  );
}

export default App;
