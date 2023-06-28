import React from 'react';
import { Link } from 'react-router-dom';

function UserType() {
  return (
    <React.Fragment>
        <div>
            <Link to='/sign_up_employer'><h1>Sign Up As An Employer</h1></Link>
        </div>
        <div>
            <Link to='/sign_up_employee'><h1>Sign Up As A job Seeker</h1></Link>
        </div>
    </React.Fragment>
  )
}

export default UserType;