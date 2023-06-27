import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignUpEmployee() {

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

  return (
    <div className="Sign-up-employee">
            <h1>Create an Account</h1>
            <h3>Set up your WorkConnect App in seconds</h3>
            <small>We only need a few details</small>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName:
                    <input
                    type="text"
                    name="UserName"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label htmlFor="firstname">FirstName: 
                    <input
                    type="email"
                    name="FirstName"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} />
                </label>
                <br />
                <label htmlFor="lastname">LastName: 
                    <input
                    type="text"
                    name="LastName"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)} />
                </label>
                <label htmlFor="email">Email: 
                    <input
                    type="email"
                    name="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor="pass">PassWord: 
                <input type="password" name="Password" id="pass" value={password}/>
                </label>
                <br />
                <label htmlFor="pass_confirm">Confirm PassWord: 
                    <input type="password" name="confirmPassword" id="pass_confirm" value={confirmpassword} />
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