import React from 'react';
import '../../css/home.css';
import '../../css/index.css';

const Section7 = () => {
    return (
        <div  className='row py-5 px-3 my-3 my-lg-5 px-md-4 px-lg-5 flex-rr flexx'>
                    <div className='col-lg'><img src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                    <div className='col-lg'>
                        <h1 className="text-secondary my-4 my-lg-0 bd-600">Why are the best developers joining WorkConnect?
                            <span className="text-primary"> Because they want careers, not gigs.</span>
                        </h1>
                        <ul className='list-unstyled gx-3'>
                            <li className='fs-4 my-4'><span className='bi bi-person-check-fill text-primary me-3'></span>Vetted once, eligible for life</li>
                            <li className='fs-4 mb-4'><span className='bi bi-star-fill text-primary me-3'></span>Exclusive WorkConnect developer success rate</li>
                            <li className='fs-4 my-4'><span className='bi bi-wrench-adjustable text-primary me-3'></span>Income stability, thanks to 99% rematch rate</li>
                        </ul>
                        <button className="btn btn-lg btn-primary">Apply for jobs</button>
                    </div>
        </div>
    )
}

export default Section7;