import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function SignUpEmployee() {

    const navigate = useNavigate();

    const [datebirth, setDatebirth] = useState('');
    const [location, setLocation] = useState('');
    const [skills, setSkills] = useState('');
    const [country, setCountry] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [state, setState] = useState('');

  return (
    <div className="Sign-up-employee">
            <h1>Create an Account</h1>
            <h3>Set up your WorkConnect Job Seeker Account in seconds</h3>
            <h3>fill the below details</h3>
            <br />
            <br />
            <form >
                <label htmlFor="date_birth">DateBirth:</label>
                    <input
                    type="text"
                    name="dateBirth"
                    id="date_birth"
                    value={datebirth}
                    onChange={(e) => setDatebirth(e.target.value)} />
                <br />
                <label htmlFor="location">Location:</label>
                    <input
                    type="text"
                    name="Location"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />
                <br />
                <label htmlFor="skills">Skills:</label> 
                    <input
                    type="text"
                    name="Skills"
                    id="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)} />
                <br />
                <label htmlFor="phone_number">Phone Number:</label>
                    <input
                    type="text"
                    name="PhoneNumber"
                    id="phone_number"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)} />
                <br />
                <label htmlFor="country">Country:</label>
                    <input
                    type="text"
                    name="Country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}/>
                <br />
                <label htmlFor="state">State:</label> 
                    <input
                    type="text"
                    name="State"
                    id="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}/>
                <br />
                <input type="submit" value="Next" />
            </form>
        </div>)
  }

export default SignUpEmployee;