import React from 'react';
import '../../css/home.css';
import '../../css/index.css';
import { Link } from 'react-router-dom';


const MainHeader = () => {
    return (
        <div className='row my-5 px-3 px-md-4 px-lg-5 flex-r'>
                <div className='col-lg'>
                    <h1 className="display-4 fw-bold text-dark mb-4 mt-3 mt-lg-0">Revolutionize Your Hiring Experience</h1>
                    <p className="lead mb-4"> Discover a pool of skilled experts primed to take your company
                    to new heights. WorkConnect's cutting-edge technology ensures you find the right fit,
                    enabling seamless collaboration and unmatched productivity.
                    </p>

                    <div className='row px-2 gy-3 gy-lg-0 px-lg-2 mb-4 width-75'>
                    <button type='button' className="btn btn-lg btn-primary col-sm me-sm-3">Hire Developers</button>
                    <button type='button' className="btn btn-lg btn-outline-primary col-sm">Explore Services</button>
                    </div>
                    <p className="mt-2">Looking for jobs instead? <Link to=''>Apply for jobs</Link></p>
                </div>
                <div className='col-lg'><img src="https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                {/* <p className="mt-2">Looking for jobs instead? <Link to=''>Apply for jobs</Link></p> */}
        </div>
    )
}

export default MainHeader;