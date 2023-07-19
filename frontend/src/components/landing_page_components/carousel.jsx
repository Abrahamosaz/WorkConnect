import React from 'react';
import '../../css/home.css';
import '../../css/index.css';


const Carousel = () => {
    return (
        <div className='my-5 bg-padding text-center'>
                    <h1 className='bd-600'>People <i className='bi bi-heart-fill fs-2' style={{color: 'red'}}></i> <span className='text-primary'>WorkConnect</span></h1>
                    <h3 className='bd-500 mb-3 fs-5'>See what others have to say about us</h3>
                
                        <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                <h5 className="mb-3">Maria Kate</h5>
                                <p>Django Developer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    WorkConnect has transformed my career. Their rigorous vetting process ensured 
                                    that I was matched with challenging and rewarding projects that aligned perfectly 
                                    with my skills and aspirations. The exclusive developer success support they 
                                    provide has been invaluable in helping me grow and excel in my role. I'm grateful 
                                    for the income stability they offer through their high rematch rate. WorkConnect 
                                    truly cares about the success and growth of developers.
                                </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                            </div>
                            <div className="carousel-item">
                            <img className="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                <h5 className="mb-3">Jerry Thomas</h5>
                                <p>Full Stack Developer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    WorkConnect's commitment to my success and their exclusive developer support 
                                    program have provided me with the resources and guidance to thrive in my career. 
                                    I highly recommend WorkConnect to any developer seeking meaningful and fulfilling work.
                                </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                            </div>
                            <div className="carousel-item">
                            <img className="rounded-circle shadow-1-strong mb-4"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" />
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                <h5 className="mb-3">Anna Deynah</h5>
                                <p>CEO CodeX</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    WorkConnect has been a game-changer for our startup. Their platform allowed us to access a 
                                    diverse pool of talented developers with specialized skills that perfectly matched our needs.
                                </p>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
        </div>
    )
}

export default Carousel;