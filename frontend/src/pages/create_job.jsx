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
    <div className='py-5 bg-padding-x margin-nav fs-5'>
      <h1 className="text-center fw-bold">Job Page</h1>
      <p className="text-center lead">Fill in the your job details</p>
      <div className='border p-3'>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
          <label>Positon:
          <div className="col-sm-10">
          <input className='form-control' type='text' name='position' value={jobFormInfo.position}
          onChange={handleChange}/>
          </div>
          </label>
          </div>
          
          <div className="row mb-3">
          <label>Job Description:
          <div className="col-sm-10">
          <textarea className='form-control' row='20' col='60' name='job_description' value={jobFormInfo.job_description}
          onChange={handleChange}></textarea>
          </div>
          </label>
          </div>

          <div className="row mb-3">
          <label>Location:
          <div className="col-sm-10">
          <input className='form-control'  type='text' name='location' value={jobFormInfo.location}
          onChange={handleChange}/>
          </div>
          </label>
          </div>

          <div className="row mb-3">
          <label>Skills Required:
          <div className="col-sm-10">
          <input className='form-control' type='text' name='skills_required' value={jobFormInfo.skills_required}
          onChange={handleChange}/>
          </div>
          </label>
          </div>

          <button type='submit' className="btn btn-outline-primary px-md-5 py-2 mt-3 btn-block" >Submit</button>
        </form>

      </div>

    </div>
  )
}

export default CreateJobs;