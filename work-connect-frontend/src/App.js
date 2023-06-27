import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import UserSignup from './pages/user_signup';
import UserLogin from  './pages/user_login';
import SignupSuccess from './pages/signup_success';
import NoMatch from './pages/nomatch';
import SignUpEmployee from './pages/sign_up_employee';
import SignUpEmployer from './pages/sign_up_employer';
import userType from './pages/user_type';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign_up' element={<UserSignup />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup_success' element={<SignupSuccess />} />
      <Route path='/sign_up_employee' element={<SignUpEmployee />} />
      <Route path='/sign_up_employer' element={<SignUpEmployer />} />
      <Route path='/user_type' element={<userType/>} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </div>
  );
}

export default App;
