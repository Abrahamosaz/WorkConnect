import React from 'react';
import '../../css/home.css';
import '../../css/index.css';

const Section2 = () => {
    return (
        <div className='row my-3 my-md-5 py-5 px-3 px-md-4 px-lg-5 flex-r flexx gx-5'>
                    <div className='col-md'>
                    <h3 className='small-heading mt-3 mt-md-0'>COMPANIES</h3>
                    <h1 className='bd-600 mb-3'>Unleash the Potential of Remote Development</h1>
                    <p>Harness the capabilities of WorkConnect to source and oversee top-tier remote developers, leads, and tech talent.
                        Streamline your resource allocation and tackle any engineering problem with confidence.
                    </p>
                    <button className='btn btn-lg btn-primary my-btn'>Hire developers</button>
                    </div>
                    <div className='col-md'>
                        <img src="https://images.pexels.com/photos/7688454/pexels-photo-7688454.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
        </div>
    )
}

export default Section2;