import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import '../css/posts.css';
import '../css/home.css';


const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [checkUser, setCheckuser] = useState('');
  const user_id = localStorage.getItem('user_id');

  const navigate = useNavigate();

  async function getJobs (url) {
    const response = await fetch(url, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
    })
    const data = await response.json();
    if (response.status === 200) {
      setAllJobs(data);
    } else {
        console.log('error', data);
    }
  };

  useEffect(() => {
    getJobs('https://workconnect-production.up.railway.app/api/jobs/');
    fetch('https://workconnect-production.up.railway.app/api/check_user/', {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
    })
    .then(response => response.json())
    .then((data) => {
        setCheckuser(data.user);
    })
    .catch(error => console.log(error));

  }, []);

  return (
    <div className='py-5 bg-padding-x margin-nav'>
        {checkUser === 'employer' && <button className="btn btn-outline-primary px-5 py-2 mb-4" onClick={() => navigate('/create-jobs')}>Create Job</button>}
        <div>
          {allJobs.map((job) => {
            return (<div key={job.id} className="post">
              <div className="mb-2">
                <h2 className="mb-2 fw-bold">{job.position}</h2>
                <h3>{job.skills_required}</h3>
                <h3>{job.location}</h3>
                <h3>{job.job_description}</h3>
              </div>
              <div>{user_id === job.employer_user_id && <button className="btn btn-block btn-outline-danger px-4 py-2">Delete</button>}</div>
              
            </div>)
          })}
        </div>
    </div>
  )
}

export default Jobs