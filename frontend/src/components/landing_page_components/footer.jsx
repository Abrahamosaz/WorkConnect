import React from 'react';
import '../../css/home.css';
import '../../css/index.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    const date_ = new Date();
    const date = date_.getFullYear();
    // const currentMonth = date_.getMonth();
    return (
        <footer className='py-5 px-lg-5 text-bg-dark'>
                    <div className='row me-3 gx-4'>
                        <div className='col'>
                            <h2 className='smaller-heading'><Link to='/'>WorkConnect</Link></h2>
                        </div>
                        <div className='col'>
                            <h2 className='smaller-heading'>Companies</h2>
                            <ul className='list-unstyled'>
                                <li>Hire developers</li>
                                <li>Book a call</li>
                                <li>Explore services</li>
                                <li>Our Service offerings</li>
                                <li>Hire Specific Skills</li>
                                <li>Customer reviews</li>
                                <li>How to Hire</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h2 className='smaller-heading'>Developers</h2>
                            <ul className='list-unstyled'>
                                <li>Apply for Jobs</li>
                                <li>Developer Login</li>
                                <li>Remote Developer Jobs</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h2 className='smaller-heading'>Company</h2>
                            <ul className='list-unstyled'>
                                <li>Blog</li>
                                <li>Press</li>
                                <li>About Us</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h2 className='smaller-heading'>Contact</h2>
                            <ul className='list-unstyled'>
                                <li>Contact Us</li>
                                <li>Health Center</li>
                                <li>Developer Support</li>
                                <li>Customer Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                        <div className=''>
                            <span className='bi bi-facebook fs-3 me-3' style={{color: '#3b5998'}}></span>
                            <span className='bi bi-twitter fs-3 me-3' style={{color: '#00acee'}}></span>
                            <span className='bi bi-youtube fs-3 me-3' style={{color: '#c4302b'}}></span>
                            <span className='bi bi-instagram fs-3' style={{color: '#fccc63'}}></span>
                        </div>
                        <p>Copyright &copy; {date} WorkConnect</p>
                        <small>6, Lekki phase 1, Lagos state, Nigeria.</small>
                        </div>
                        <div className='col display-flex'>

                            <p className="me-3">Site Map</p>
                            <p className="me-3">Terms of Service</p>
                            <p className="me-3">Privacy Policy</p>
                        </div>
                    </div>
        </footer>
    )
}

export default Footer;