import React from 'react';
import '../../css/home.css';
import '../../css/index.css';

const Section4 = () => {
    return (
        <div className='row py-5 my-3 my-lg-5 py-5 px-3 px-md-4 px-lg-5 flex-r flexx'>
                    <div className='col-lg'>
                        <h3 className='small-heading mt-3 mt-md-0'>DEVELOPERS</h3>
                        <h1 className='bd-600 mb-3'> Unlock High-Paying Job Opportunities</h1>
                        <p>Experience the power of WorkConnect's AI matching technology, 
                            connecting you to lucrative U.S. tech jobs. Once you successfully pass 
                            our rigorous vetting tests and interviews, seize the chance to work with 
                            esteemed clients seeking your expert skills.
                        </p>
                        <button className="btn btn-lg btn-primary">Apply for jobs</button>
                    </div>
                    <div className='col-md'><img src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
        </div>
    )
}

export default Section4;