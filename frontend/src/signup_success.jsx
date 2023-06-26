import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

function SignupSuccess (props) {
    const navigate = useNavigate();
    useEffect(() => {
        const redirect = () => {
            navigate('/')
        };
        const timer = setTimeout(redirect, 2500);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div className="App App-header">
            <h1>Welcome {props.name}</h1>
            <h4>You have successfully created your WorkConnect account</h4>
            <p>Don't worry; this page redirects authomatically.</p>
            <br />
            <small>If it doesn't, please click <Link to='/'>here</Link>
            </small>
        </div>
    )
}

export default SignupSuccess;