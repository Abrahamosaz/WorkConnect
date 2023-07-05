import React from 'react'

import { Link } from 'react-router-dom';
import '../css/index.css';
import '../css/home.css';
// import '../utils/images/';

const LandingPage = () => {
  const date_ = new Date();
  const date = date_.getFullYear();
  const currentMonth = date_.getMonth();

  return (
    <React.Fragment>
        <div className="container-fluid px-0">
            
                <div className='row my-5 bg-padding-x' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className='col'>
                    <h1 className="front-heading">Your one stop hub for the most vetted talents</h1>
                    <p className="front-p">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    </p>
                    <button type='button' className="btn btn-lg btn-primary me-3">Hire Developers</button>
                    <button type='button' className="btn btn-lg btn-outline-primary">Explore Services</button>
                </div>
                <div className='col'><img src="https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                <p className="mt-2">Looking for jobs instead? <Link to=''>Apply for jobs</Link></p>
                </div>
                <div className='text-center my-5 bgg-padding-y light-grey'>
                    <h2>Traditional recruiting is over. Welcome to the Talent Cloud</h2>
                    <p>Join hundreds of individuals and companies that trust WorkConnect</p>
                    <div className="row">
                        <i className="bi bi-alipay col"></i>
                        <i className="bi bi-android2 col"></i>
                        <i className="bi bi-apple col"></i>
                        <i className="bi bi-android col"></i>
                    </div>
                </div>
                <div className='my-5 bg-padding row display-flex'>
                    <div className='col'>
                    <h3 className='small-heading'>COMPANIES</h3>
                    <h2>Hire deeply vetted software developers</h2>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                    <button className='btn btn-lg btn-primary my-btn'>Hire developers</button>
                    </div>
                    <div className='col'>
                        <img src="https://images.pexels.com/photos/7688454/pexels-photo-7688454.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
                <div className='bg-padding row display-flex light-grey'>
                    <div className="col"><img src="https://images.pexels.com/photos/5899079/pexels-photo-5899079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='img-addrr' /></div>
                    <div className="col">
                        <h3 className='small-heading'>COMPANIES</h3>
                        <h2>Get fully managed services</h2>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>
                        <button className="btn btn-lg btn-primary">More about Services</button>
                    </div>
                </div>
                <div className='bg-padding row display-flex'>
                    <div className='col'>
                        <h3 className='small-heading'>DEVELOPERS</h3>
                        <h2>Apply for jobs</h2>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>
                        <button className="btn btn-lg btn-primary">Apply for jobs</button>
                    </div>
                    <div className='col'><img src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                </div>
                <div className='bgg-padding-y text-center light-grey'>
                    <h2 className='mb-5'>Why businesses choose WorkConnect</h2>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <span></span>
                                <h3 className='text-success'>Speed</h3>
                            </div>
                            <h1 className='text-success'>4 days</h1>
                            <p>to fill most roles, sometimes same day</p>
                        </div>
                        <div className='col'>
                            <div>
                                <span></span>
                                <h3 className='text-success'>Time saved</h3>
                            </div>
                            <h1 className='text-success'>50+ hours</h1>
                            <p>of engineering team time saved per developer for interviewing</p>
                        </div>
                        <div className='col'>
                            <div>
                                <span></span>
                                <h3 className='text-success'>Retention</h3>
                            </div>
                            <h1 className='text-success'>97%</h1>
                            <p>engagement success rate</p>
                        </div>
                    </div>
                </div>
                <div className='bg-padding bg-primary row text-white'>
                    <div className='col'>
                    <h1>2 Million+ developers from 150+ countries have already joined WorkConnect</h1>
                    <div className='row'>
                        <div className='col'>
                            <h1>15+</h1>
                            <p>job types</p>
                        </div>
                        <div className='col'>
                            <h1>100+</h1>
                            <p>Technologies</p>
                        </div>
                        <div className='col'>
                            <h1>7+</h1>
                            <p>Seniority levels</p>
                        </div>
                    </div>
                    <div className='gx-5'>
                        <button className="btn btn-lg btn-light text-primary">Hire developers</button>
                        <button className="btn btn-lg btn-outline-white">Apply for jobs</button>
                    </div>
                    </div>
                    <div className='col rounded-circle'>
                        <img src="https://images.pexels.com/photos/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
                <div  className='row my-5 bg-padding gx-5'>
                    <div className='col'><img src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                    <div className='col'>
                        <h2>Why are the best developers joining WorkConnect?
                            Because they want careers, not gigs.
                        </h2>
                        <ul>
                            <li><span></span>Vetted once, eligible for life</li>
                            <li><span></span>Exclusive WorkConnect developer success rate</li>
                            <li><span></span>Income stability, thanks to 99% rematch rate</li>
                        </ul>
                        <button className="btn btn-lg btn-primary">Apply for jobs</button>
                    </div>
                </div>
                {/* <div className='my-5 bg-padding light-grey'>
                    <h2>People love WorkConnect</h2>
                    <p>See what people have to say about us</p>
                    <div>
                    <img src="https://media.istockphoto.com/id/1173324914/photo/attractive-hands-showing-five-stars-rating-on-a-smart-phone.jpg?b=1&s=612x612&w=0&k=20&c=YJgNlqhroXvtm51G59vUApdjt8zboVY0yF_n_jJegfs=" className="d-block w-25 h-auto" alt="..." />
                    </div>
                    <h2>4.7 star out of 5</h2>
                    <p>Based on developers reviews as of {currentMonth} 2023</p>
                </div> */}
                <hr className='hr' />
                <div className='my-5 bg-padding text-center'>
                    <h1>People love WorkConnect</h1>
                    <h3>See what people have to say about us</h3>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                            <img src="https://media.istockphoto.com/id/1173324914/photo/attractive-hands-showing-five-stars-rating-on-a-smart-phone.jpg?b=1&s=612x612&w=0&k=20&c=YJgNlqhroXvtm51G59vUApdjt8zboVY0yF_n_jJegfs=" className="d-block w-100 h-auto" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Vladok Hriodik</h3>
                                <h6>Head of Operations, Dot Codes Inc.</h6>
                                <i>I hired 50% of my staff base through WorkConnect. I am happy I used WorkConnect.</i>
                            </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100 h-auto" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
                <div className='mt-5 text-center mild-dark bgg-padding-y text-white'>
                    <h2>Hire remote developers</h2>
                    <h3>Tell us the skills you need and we will find the best developer for you</h3>
                    <button className="btn btn-lg btn-primary">Hire developers</button>
                </div>
                <footer className='bg-padding-x py-5 text-bg-dark'>
                    <div className='row me-3 gx-4 mb-4'>
                        <div className='col'>
                            <h2><Link to='/'>WorkConnect</Link></h2>
                        </div>
                        <div className='col'>
                            <h2>Companies</h2>
                            <ul>
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
                            <h2>Developers</h2>
                            <ul>
                                <li>Apply for Jobs</li>
                                <li>Developer Login</li>
                                <li>Remote Developer Jobs</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h2>Company</h2>
                            <ul>
                                <li>Blog</li>
                                <li>Press</li>
                                <li>About Us</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h2>Contact</h2>
                            <ul>
                                <li>Contact Us</li>
                                <li>Health Center</li>
                                <li>Developer Support</li>
                                <li>Customer Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                        <div className='row'>
                            <span className='col'>F icon</span>
                            <span className='col'>T icon</span>
                            <span className='col'>Y icon</span>
                            <span className='col'>I icon</span>
                        </div>
                        <p>Copyright {date} WorkConnect</p>
                        <small>6, Lekki phase 1, Lagos state, Nigeria.</small>
                        </div>
                        <div className="col"></div>
                        <div className='col display-flex'>

                            <p className="col">Site Map</p>
                            <p className="col">Terms of Service</p>
                            <p className="col">Privacy Policy</p>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
  )
}

export default LandingPage;