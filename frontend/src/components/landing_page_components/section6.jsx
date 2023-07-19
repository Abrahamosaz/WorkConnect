import React from 'react';
import '../../css/home.css';
import '../../css/index.css';

const Section6 = () => {
    return (
        <div className='row py-5 px-3 px-md-4 px-lg-5 bg-prim text-white flex-r flexx'>
                    <div className='col-lg mt-3 mt-lg-0'>
                    <h1 className='bg-head mb-4'><span>2 Million+</span> developers from <span>150+ countries</span> have already joined WorkConnect</h1>
                    <div className='row mb-4'>
                        <div className='col'>
                            <h1 className='bd-600'>15+</h1>
                            <p>job types</p>
                        </div>
                        <div className='col'>
                            <h1 className='bd-600'>100+</h1>
                            <p>Technologies</p>
                        </div>
                        <div className='col'>
                            <h1 className='bd-600'>7+</h1>
                            <p>Seniority levels</p>
                        </div>
                    </div>
                    <div className='row px-2 gy-3 gy-md-0 px-md-2 mb-4 width-75'>
                        <button className="btn btn-lg btn-light col-sm me-sm-3 text-primary bd-600">Hire developers</button>
                        <button className="btn btn-lg btn-outline-light col-sm bd-600">Apply for jobs</button>
                    </div>
                    </div>
                    <div className='col-lg'>
                        <img src="https://images.pexels.com/photos/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
        </div>
    )
}

export default Section6;