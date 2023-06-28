import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

function SignupSuccess () {
    const navigate = useNavigate();

    useEffect(() => {
        const redirect = () => {
            navigate('/')
        };
        const timer = setTimeout(redirect, 5000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div className="App App-header">
            <h1>Welcome</h1>
            <h4>You have successfully created your WorkConnect account</h4>
            <p>Don't worry; this page redirects authomatically.</p>
            <br />
            <p>If it doesn't, please click <Link to='/'>here</Link>
            </p>
        </div>
    )
}

export default SignupSuccess;