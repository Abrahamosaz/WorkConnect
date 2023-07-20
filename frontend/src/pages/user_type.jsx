import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/user_type.css';
import '../css/home.css';
import '../css/index.css';


function UserType() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className='outer-box bg-padding-x gx-md-5 margin-nav'>
        <div onClick={() => navigate('/employer_signup_details')} className='inner-box mt-5 mt-md-0'>
          <h1 className="text-primary fw-bold">Sign Up As An Employer</h1>
        </div>
        <div onClick={() => navigate('/employee_signup_details')} className='inner-box mt-5 mt-md-0'>
          <h1 className="text-primary fw-bold">Sign Up As A Job Seeker</h1>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserType;