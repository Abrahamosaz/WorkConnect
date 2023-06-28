import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function EmployerSignUpDetails() {
    const navigate = useNavigate();

    const [date_of_birth, setDOB] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [profile_pic, setProfilePic] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/sign_up_success", { replace: true });
    }

  return (
    <div className="EmployerSignUpDetails">
            <h1>WorkConnect Account Setup</h1>
            <h3>We need a few more details to create a great personalised experience for you</h3>
            <br />
            <br />
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
                <label htmlFor="company">Company name: 
                    <input
                    type="text"
                    name="company"
                    placeholder='Last name'
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)} />
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

export default EmployerSignUpDetails;