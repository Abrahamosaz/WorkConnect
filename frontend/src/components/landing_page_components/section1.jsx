import React from 'react';
import '../../css/home.css';
import '../../css/index.css';


const Section1 = () => {
    return (
        <div className='text-start text-lg-center my-5 px-3 px-md-4 px-lg-5 px-lg-0 bgg-padding-y light-grey w-100'>
                    <h1 className='bd-600 mb-4 mb-lg-5'>Redefine Your Hiring Strategy, Amplify Your Results.</h1>
                    <p className='bd-300 lead mb-4 mb-lg-5'>Experience the power of the Talent Cloud as over 900 companies have already done</p>
                    
                    <div className="">
                            <span className='fs-1 fst-italic bi bi-meta me-3 me-md-5'></span>
                            <span className='fs-1 fst-italic bi bi-apple me-3 me-md-5'></span>
                            <span className='fs-1 fst-italic bi bi-tencent-qq me-3 me-md-5'></span>
                            <span className='fs-1 fst-italic bi bi-google me-3 me-md-5'></span>
                            <span className='fs-1 fst-italic bi bi-microsoft'></span>
                    </div>
        </div>
    )
}

export default Section1;