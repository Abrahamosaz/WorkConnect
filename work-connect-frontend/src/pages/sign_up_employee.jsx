import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function SignUpEmployee() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const url = 'http://localhost:8000/api/users/';
        const response = fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                first_name: firstname,
                last_name: lastname,
                confirm_password: confirmpassword
            })
        });
        const data = await response;
        const json_data = await data.json()
        if (data.status !== 201) {
        } else {
        
        }

        navigate('employee_signup_details');
    }

  return (
    <div className="Sign-up-employee">
            <h1>Create an Account</h1>
            <h3>Set up your WorkConnect Job Seeker Account in seconds</h3>
            <small>We only need a few details</small>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName:
                    <input
                    type="text"
                    name="UserName"
                    placeholder='Username'
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label htmlFor="firstname">FirstName: 
                    <input
                    type="email"
                    name="FirstName"
                    placeholder='First name'
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} />
                </label>
                <br />
                <label htmlFor="lastname">LastName: 
                    <input
                    type="text"
                    name="LastName"
                    placeholder='Last name'
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)} />
                </label>
                <br />
                <label htmlFor="email">Email: 
                    <input
                    type="email"
                    name="Email"
                    placeholder='Email'
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label htmlFor="pass">PassWord: 
                <input type="password" name="Password" placeholder='Password' id="pass" value={password}/>
                </label>
                <br />
                <label htmlFor="pass_confirm">Confirm PassWord: 
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' id="pass_confirm" value={confirmpassword} />
                </label>
                <br />

                <input type="submit" value="Sign Up" />
            </form>
            <br />

            <p>Already signed up?</p>
            <Link to='/login'>Login</Link>
        </div>)
  }

export default SignUpEmployee;