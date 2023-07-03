import React from 'react'

const Profile = ({ props }) => {
    console.log(props);
  return (
    <div className='profile'>
        <div>
            <div>
            </div>
            <div><h2>About me: <small>{props.about_me}</small></h2></div>
        </div>
        <div>
            <div>

            </div>
            <div><h2>Work experience: <small>{props.work_experience}</small></h2></div>
        </div>
        <div>
            <div>

            </div>
            <div><h2>Education: <small>{props.education}</small></h2></div>
        </div>
        <div>
            <div>

            </div>
            <div><h2>Skills: <small>{props.skill}</small></h2></div>         
        </div>
        <div>
            <div>

            </div>
            <div><h2>Country: <samll>{props.country}</samll></h2></div>          
        </div>
        <div>
            <div><h2>Location: <small>{props.location}</small></h2></div>
        </div>
    </div>
  )
}

export default Profile