import React, { useEffect, useState } from 'react'
import '../css/index.css';
import Profile from '../components/Profile';

const ProfileEmployerPage = () => {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async (url) => {
    const response  = await fetch(url, {
      headers : { Authorization:  `Token ${localStorage.getItem('token')}` }
    });
    const data = await response.json();
    if (response.status === 200) {
      setUserInfo(data);
    } else {
      console.log('error');
    }

  }

  useEffect (() => {
    getUserInfo('https://workconnect-production.up.railway.app/api/user_info/?user=employer');
  }, [])

  return (
    <div className='container py-5 bg-padding-x margin-nav'>
        <Profile props={userInfo} />
    </div>
  )
}

export default ProfileEmployerPage;