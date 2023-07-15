import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/index.css';


const CreateJobs = () => {
  const [jobFormInfo, setJobFormInfo] = useState({
    position: '',
    job_description: '',
    location: '',
    skills_required: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setJobFormInfo({...jobFormInfo, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://workconnect-production.up.railway.app/api/jobs/';
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Token ${localStorage.getItem('token')}`},
      body: JSON.stringify(jobFormInfo)
    });

    if (response.status === 201) {
      navigate('/jobs')
    } else {
      console.log('error');
    }
  };


  return (
    <div className='container'>
      <div className='jobs-form'>
        <form onSubmit={handleSubmit}>
          <label>Positon:</label>
          <input type='text' name='position' value={jobFormInfo.position}
          onChange={handleChange}/>
          <br></br>

          <label>Job Description:</label>
          <textarea row='20' col='60' name='job_description' value={jobFormInfo.job_description}
          onChange={handleChange}></textarea>
          <br></br>

          <label>Location:</label>
          <input  type='text' name='location' value={jobFormInfo.location}
          onChange={handleChange}/>
          <br></br>

          <label>Skills Required:</label>
          <input type='text' name='skills_required' value={jobFormInfo.skills_required}
          onChange={handleChange}/>

          <br></br>
          <button type='submit' >Submit</button>
        </form>

      </div>

    </div>
  )
}

export default CreateJobs;