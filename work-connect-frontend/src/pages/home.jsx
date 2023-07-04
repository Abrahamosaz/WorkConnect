import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/user.contexts';
import Posts from '../components/posts';
/* css import */
import '../css/home.css';




function Home() {

    const currentMonth = '';
    const date = '';
    const [posts, setPosts] = useState([]);
    const [searchpost, setSearchPost] = useState('');
    const [checkpost, setCheckpost] = useState('');

    const {isLoggedIn } = useContext(UserContext);
    const [ displayLandingPage, setDisplayLandingPage ] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            setDisplayLandingPage(false);
        } else {
            setDisplayLandingPage(true);
        }
    })

    const getPost = async (url) => {
        const token = localStorage.getItem('token');
        if (token)
        {
            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Token ${token}`
                    }});
                const data = await response.json();
                if (response.status === 200) {
                    setPosts(data);
                } else {
                    console.log(data.error);
                }
            } catch (error) {
                console.log(error);
        }
    
    }};

    useEffect (() => {
        const url = 'http://localhost:8000/api/post/';
        getPost(url);

    }, [])

    useEffect(() => {}, [posts]);

    const handleSearch = async () => {
        const  response = await fetch(`http://localhost:8000/api/post/?title=${searchpost}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        if (data.length > 0) {
            setPosts(data);
            setCheckpost(false);
        } else {
            setCheckpost(true);
        }
    };

    if (displayLandingPage) {
    return (
    <React.Fragment>
        <div className="container-fluid px-0">
            
                <div className='row my-5 bg-padding-x'>
                <div className='col'>
                    <h1>Your one stop hub for the most vetted talents</h1>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum
                    </p>
                    <button type='button' className="btn btn-lg btn-primary me-3">Hire Developers</button>
                    <button type='button' className="btn btn-lg btn-outline-primary">Explore Services</button>
                </div>
                <div className='col'><img src="..\" alt="" /></div>
                <p className="mt-2">Looking for jobs instead? <Link to=''>Apply for jobs</Link></p>
                </div>
                <div className='text-center my-5 bg-padding-y light-grey'>
                    <h2>Traditional recruiting is over. Welcome to the Talent Cloud</h2>
                    <p>Join hundreds of individuals and companies that trust WorkConnect</p>
                    <div className="row">
                        <span className='col'>C</span>
                        <span className='col'>D</span>
                        <span className='col'>E</span>
                        <span className='col'>F</span>
                    </div>
                </div>
                <div className='my-5 bg-padding row'>
                    <div className='col'>
                    <h3 className='fs-5'>COMPANIES</h3>
                    <h2>Hire deeply vetted software developers</h2>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                    <button className='btn btn-lg btn-primary my-btn'>Hire developers</button>
                    </div>
                    <div className='col'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='bgg-padding-y row light-grey'>
                    <div className="col"><img src="" alt="" /></div>
                    <div className="col">
                        <h3>COMPANIES</h3>
                        <h2>Get fully managed services</h2>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>
                        <button className="btn btn-lg btn-primary">More about Services</button>
                    </div>
                </div>
                <div className='bg-padding row'>
                    <div className='col'>
                        <h3>DEVELOPERS</h3>
                        <h2>Apply for jobs</h2>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>
                        <button className="btn btn-lg btn-primary">Apply for jobs</button>
                    </div>
                    <div className='col'><img src="" alt="" /></div>
                </div>
                <div className='py-5 text-center'>
                    <h2>Why businesses choose WorkConnect</h2>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <span></span>
                                <h3>Speed</h3>
                            </div>
                            <h1>4 days</h1>
                            <p>to fill most roles, sometimes same day</p>
                        </div>
                        <div className='col'>
                            <div>
                                <span></span>
                                <h3>Time saved</h3>
                            </div>
                            <h1>50+ hours</h1>
                            <p>of engineering team time saved per developer for interviewing</p>
                        </div>
                        <div className='col'>
                            <div>
                                <span></span>
                                <h3>Retention</h3>
                            </div>
                            <h1>97%</h1>
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
                    <div>
                        <button className="btn btn-lg btn-light text-primary">Hire developers</button>
                        <button className="btn btn-lg btn-outline-white">Apply for jobs</button>
                    </div>
                    </div>
                    <div className='col'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div  className='row my-5 p-5'>
                    <div className='col'><img src="" alt="" /></div>
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
                <div className='my-5 p-5'>
                    <h2>People love WorkConnect</h2>
                    <p>See what people have to say about us</p>
                    <div>

                    </div>
                    <h2>4.7 star out of 5</h2>
                    <p>Based on developers reviews as of {currentMonth} 2023</p>
                </div>
                <div className='my-5 p-5'>
                    <div id="carouselExampleDark" class="carousel carousel-dark slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                            <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
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
                <footer className='p-5 text-bg-dark'>
                    <div className='row me-3 gx-4'>
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
                    <div className='row'>
                        <div className='col'>
                        <div className=''>
                            <span>Facebook icon</span>
                            <span>Twitter icon</span>
                            <span>YouTube icon</span>
                            <span>Instagram icon</span>
                        </div>
                        <p>Copyright {date} WorkConnect</p>
                        <small>6, Lekki phase 1, Lagos state, Nigeria.</small>
                        </div>
                        <div className='col'>
                            <p>Site Map</p>
                            <p>Terms of Service</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
        )
        } else {
        return (
            <section className="App-header">
                <div className='search-post'>
                    <input
                    type='text'
                    name='search'
                    value={searchpost}
                    onChange={(e) => setSearchPost(e.target.value)}></input>
                    <button onClick={handleSearch}>Search</button>
                </div>
                {!checkpost? <Posts posts={posts} /> : <h3>no post found</h3>}
            </section>
            )
        }
}

export default Home;