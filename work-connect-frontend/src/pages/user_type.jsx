import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/user_type.css';


function UserType() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className='user-type'>
        <div>
          <Link onClick={() => navigate('/sign_up_employer')}><h1>Sign Up As An Employer</h1></Link>
        </div>
        <div>
          <Link onClick={() => navigate('/sign_up_emplyee')}><h1>Sign Up As A job Seeker</h1></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserType;