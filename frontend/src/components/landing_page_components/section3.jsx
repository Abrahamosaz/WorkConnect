import React from 'react';
import '../../css/home.css';
import '../../css/index.css';


const Section3 = () => {
    return (

        <div className='row py-5 px-3 my-3 my-md-5 px-md-4 px-lg-5 flex-rr flexx light-grey'>
                    <div className="col-md"><img src="https://images.pexels.com/photos/5899079/pexels-photo-5899079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='img-addrr' /></div>
                    <div className="col-md">
                        <h3 className='small-heading mt-3 mt-md-0'>COMPANIES</h3>
                        <h1 className='bd-600 mb-3'>Revolutionize Your Business with Expert Management</h1>
                        <p> Drive your business forward with WorkConnect's expert management services.
                            Rely on our seasoned industry professionals and the fully managed teams they
                            forge to deliver exceptional quality, unparalleled speed, and optimal cost
                            efficiency to overcome your most daunting challenges.
                        </p>
                        <button className="btn btn-lg btn-primary">More about Services</button>
                    </div>
        </div>
    )
}

export default Section3;