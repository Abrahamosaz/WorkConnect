import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function EmployeeSignUpDetails() {

    const navigate = useNavigate();


    const [employeedetails, setEmployeedetails] = useState({
        date_birth: '',
        location: '',
        skill: '',
        phone_number: '',
        country: '',
        state: '',
        profile_pic: '',
        about_me: '',
        work_experience: '',
        education: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeedetails({...employeedetails, [name]: value});
    };

    const getUser = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    const registerUser = async (url, data) => {
        const form = new FormData();
        form.append('user_id', data.id);

        for (const key in employeedetails) {
            form.append(key, employeedetails[key]);
        }

        const res = await fetch(url, {
            method: 'POST',
            body: form
        });
        const json_data = await res.json();
        console.log(json_data);
        navigate('/login');
    };

    const handleForm =  async (e) => {
        e.preventDefault();
        const user = getUser('http://localhost:8000/api/users/latest/');
        user
        .then((data) => {
            const url = "http://localhost:8000/api/register-employee/";
            registerUser(url, data);
        })
        .catch((err) => console.log(err));
    };

    const handleFile = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];
        setEmployeedetails({...employeedetails, [name]: file});
    };

  return (
    <div className="Sign-up-employee">
            <h1>Create an Account</h1>
            <h3>Set up your WorkConnect Job Seeker Account in seconds</h3>
            <h3>fill the below details</h3>
            <br />
            <br />
            <form id='form' onSubmit={handleForm}>
                <label htmlFor="date_birth">DateBirth:</label>
                    <input
                    type="date"
                    name="date_birth"
                    id="date_birth"
                    value={employeedetails.date_birth}
                    onChange={handleChange} />
                <br />
                <label htmlFor="location">Location:</label>
                    <input
                    type="text"
                    name="location"
                    id="location"
                    value={employeedetails.location}
                    onChange={handleChange} />
                <br />
                <label htmlFor="skills">Skills:</label> 
                    <input
                    type="text"
                    name="skill"
                    id="skills"
                    value={employeedetails.skill}
                    onChange={handleChange} />
                <br />
                <label htmlFor="phone_number">Phone Number:</label>
                    <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    value={employeedetails.phone_number}
                    onChange={handleChange} />
                <br />
                <label htmlFor="country">Country:</label>
                    <input
                    type="text"
                    name="country"
                    id="country"
                    value={employeedetails.country}
                    onChange={handleChange}/>
                <br />
                <label htmlFor="state">State:</label> 
                    <input
                    type="text"
                    name="state"
                    id="State"
                    value={employeedetails.state}
                    onChange={handleChange}/>
                <br />
                <label htmlFor="education">Education:</label> 
                    <input
                    type="text"
                    name="education"
                    id="education"
                    value={employeedetails.education}
                    onChange={handleChange}/>
                <br />
                <label htmlFor="work_experience">Work experience:</label> 
                    <input
                    type="text"
                    name="work_experience"
                    id="work_experience"
                    value={employeedetails.work_experience}
                    onChange={handleChange}/>
                <br />
                <label htmlFor="aboutMe">About me:</label> 
                    <input
                    type="text"
                    name="about_me"
                    id="aboutMe"
                    value={employeedetails.about_me}
                    onChange={handleChange}/>
                <br />
                <label htmlFor="profile_pic">Profile Picture:</label>
                    <input
                    type="file"
                    name="profile_pic"
                    id="profile_pic"
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleFile}/>
                <br />
                <input type="submit" value="Next" />
            </form>
        </div>)
  }

export default EmployeeSignUpDetails;