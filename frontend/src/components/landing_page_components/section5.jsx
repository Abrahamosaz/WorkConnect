import React from 'react';
import '../../css/home.css';
import '../../css/index.css';

const Section5 = () => {
    return (
        <div className='px-3 px-lg-5 bgg-padding-y text-center light-grey'>
                    <h1 className='bd-600 mb-5'>Why businesses choose WorkConnect</h1>
                    <div className='row text-start text-lg-center'>
                        <div className='col-lg mb-4 mb-lg-0'>
                            <div className='mb-2'>
                                <span className='success-light bi-battery-charging fs-3 me-2'></span>
                                <h3 className='d-inline caption'>Accelerated Hiring</h3>
                            </div>
                            <h1 className='success-light'>4 days</h1>
                            <p className='custom'>to swiftly fill key roles, sometimes within hours.</p>
                        </div>
                        <div className='col-lg mb-4 mb-lg-0'>
                            <div className='mb-2'>
                                <span className='success-light bi bi-alarm-fill fs-3 me-2'></span>
                                <h3 className='d-inline caption'>Time Efficiency</h3>
                            </div>
                            <h1 className='success-light'>Save 50+ hours</h1>
                            <p className='custom'>of engineering team time per developer on interviews.</p>
                        </div>
                        <div className='col-lg'>
                            <div className='mb-2'>
                                <span className='success-light bi bi-hand-thumbs-up-fill fs-3 me-2'></span>
                                <h3 className='d-inline caption'>High Retention</h3>
                            </div>
                            <h1 className='success-light'>90% Success rate</h1>
                            <p className='custom'>in fostering long-term engagement and loyalty.</p>
                        </div>
                    </div>
        </div>
    )
}

export default Section5;