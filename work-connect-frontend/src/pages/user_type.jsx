import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/user_type.css';


function UserType() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className='user-type'>
        <div onClick={() => navigate('/auth/employer_signup_details')}>
          <Link><h1>Sign Up As An Employer</h1></Link>
        </div>
        <div onClick={() => navigate('/auth/employee_signup_details')}>
          <Link><h1>Sign Up As A job Seeker</h1></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserType;