import React from 'react'
import '../css/profile.css';

const Profile = ({ props }) => {
    // const firtname = props.firstname;
    // const lastname = props.lastname;
  return (
    <div className='py-5 bg-padding-x'>
        <div>
            <h1 className='fs-1 text-center my-5 fw-bold'>Welcome</h1>
        </div>
        <div className='upper'>
            {props.profile_picture?
            <p className='fs-1 text-white'>WorkConnect Profile</p>:
            <img src={props.profile_picture} alt="user_profile_picture" className='fs-1 text-white profile-img rounded-circle' />}
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#about" aria-expanded="false" aria-controls="about">
            About Me:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="about">
            <div className="card card-body fs-4" style={{}}>
            {props.about_me}
            </div>
        </div>
        </div>
        </div>
        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#work" aria-expanded="false" aria-controls="work">
            Work Experience:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="work">
            <div className="card card-body fs-4" style={{}}>
            
            {props.work_experience}
            </div>
        </div>
        </div>
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#edu" aria-expanded="false" aria-controls="edu">
            Education:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="edu">
            <div className="card card-body fs-4" style={{}}>
            
            {props.education}
            </div>
        </div>
        </div>
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#skills" aria-expanded="false" aria-controls="skills">
            Skills:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="skills">
            <div className="card card-body fs-4" style={{}}>
            
            {props.skills}
            </div>
        </div>
        </div>
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#country" aria-expanded="false" aria-controls="country">
            Country:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="country">
            <div className="card card-body fs-4" style={{}}>
            
            {props.country}
            </div>
        </div>
        </div>
        </div>


        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#state" aria-expanded="false" aria-controls="state">
            State:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="state">
            <div className="card card-body fs-4" style={{}}>
            
            {props.state}
            </div>
        </div>
        </div>
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#location" aria-expanded="false" aria-controls="location">
            Location:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="location">
            <div className="card card-body fs-4" style={{}}>
            
            {props.location}
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Profile;