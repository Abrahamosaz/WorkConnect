import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function EmployeeSignUpDetails() {
    const navigate = useNavigate();

    const [date_of_birth, setDOB] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [skills, setSkills] = useState('');
    const [location, setLocation] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [profile_pic, setProfilePic] = useState('');
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'http://localhost:8000/api/register-employee/';
        const response = fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                date_birth: date_of_birth,
                location: location,
                skill: skills,
                phone_number: phone_number,
                profile_pic: profile_pic,
                country: country,
                state: state,
            })
        });
        const data  = await response;
        const json_data = await data.json();
        if (data.status === 201) {
            console.log('success');
            setIsError(false);
            setError("");
            setDOB("");
            setCountry("");
            setLocation("");
            setPhoneNumber("");
            setProfilePic("");
            setSkills("");
            setState("");
            navigate("/sign_up_success");
        } else {
            setIsError(true);
            setError(json_data.error);
        }
    }

  return (
    <div className="">
            <h1>WorkConnect Account Setup</h1>
            <h3>We need a few more details to create a great personalised experience for you</h3>
            <br />
            <br />
            {isError && error}
            <form onSubmit={handleSubmit}>
                <label htmlFor="dob">Date of Birth:
                    <input
                    type="date"
                    name="date_of_birth"
                    placeholder='Date of Birth'
                    id="dob"
                    value={date_of_birth}
                    onChange={(e) => setDOB(e.target.value)} />
                </label>
                <br />
                <label htmlFor="phone">Phone number: 
                    <input
                    type="tel"
                    name="phone_number"
                    placeholder='Phone number'
                    id="phone"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <br />
                <label htmlFor="skills">Skills: 
                    <p>List out your skills and seperate them with ',' like this:
                    <br />react, html, css, python.
                    <br />This will help us match you with jobs that fit the kind of skills you posses</p>
                    <input
                    type="text"
                    name="skills"
                    placeholder='JavaScript, React, Django.'
                    id="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)} />
                </label>
                <br />
                <label htmlFor="location">Location: 
                    <input
                    type="text"
                    name="location"
                    placeholder='Location'
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />
                </label>
                <br />
                <label htmlFor="state">State: 
                    <input
                    type="text"
                    name="state"
                    placeholder='State'
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)} />
                </label>
                <br />
                <label htmlFor="country">Country: 
                    <input
                    type="text"
                    name="country"
                    placeholder='Country'
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)} />
                </label>
                <br />
                <label htmlFor="profile_pic">Profile Picture: 
                    <input
                    type="file"
                    name="profile_pic"
                    id="profile_pic"
                    value={profile_pic}
                    onChange={(e) => setProfilePic(e.target.value)} />
                </label>
                <br />

                <input type="submit" value="Save" />
            </form>
            <br />
        </div>)
  }

export default EmployeeSignUpDetails;