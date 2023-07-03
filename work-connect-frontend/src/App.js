import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Home from './pages/home';
import UserSignup from './pages/user_signup';
import UserLogin from  './pages/user_login';
import SignupSuccess from './pages/signup_success';
import NoMatch from './pages/nomatch';
import UserType from './pages/user_type';
import EmployeeSignUpDetails from './pages/employee_signup_details';
import EmployerSignUpDetails from './pages/employer_signup_details';


function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Navbar />}>
      <Route path='' element={<Home />} />
      <Route path='auth/sign_up' element={<UserSignup />} />
      <Route path='auth/login' element={<UserLogin />} />
      <Route path='sign_up_success' element={<SignupSuccess />} />
      <Route path='auth/employee_signup_details' element={<EmployeeSignUpDetails />} />
      <Route path='auth/employer_signup_details' element={<EmployerSignUpDetails />} />
      <Route path='user_type' element={<UserType />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
    </Routes>
    </div>
  );
}

export default App;
