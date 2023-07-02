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
import ProfileEmployeePage from './pages/profile_employee_page';
import ProfileEmployerPage from './pages/profile_employer_page';


function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Navbar />}>
      <Route path='' element={<Home />} />
      <Route path='sign_up' element={<UserSignup />} />
      <Route path='login' element={<UserLogin />} />
      <Route path='sign_up_success' element={<SignupSuccess />} />
      <Route path='employee_signup_details' element={<EmployeeSignUpDetails />} />
      <Route path='employer_signup_details' element={<EmployerSignUpDetails />} />
      <Route path='profile_employee_page' element={<ProfileEmployeePage />} />
      <Route path='profile_employer_page' element={<ProfileEmployerPage />} />
      <Route path='user_type' element={<UserType />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
    </Routes>
    </div>
  );
}

export default App;
