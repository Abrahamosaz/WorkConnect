import React from 'react';
import '../../css/home.css';
import '../../css/index.css';


const Carousel = () => {
    return (
        <div className='my-5 bg-padding text-center'>
                    <h1 className='bd-600'>People <i className='material-icons fs-3' style={{color: 'red'}}>favorite</i> <span className='text-primary'>WorkConnect</span></h1>
                    <h3 className='bd-500 mb-3'>See what others have to say about us</h3>
                
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                    doloremque.
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
                                <p>Web Developer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis.
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
                                <p>UX Designer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                    doloremque.
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