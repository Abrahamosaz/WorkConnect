import React from 'react'
import '../css/index.css';
import '../css/home.css';

import MainHeader from '../components/landing_page_components/main-header';
import Section1 from '../components/landing_page_components/section1';
import Section2 from '../components/landing_page_components/section2';
import Section3 from '../components/landing_page_components/section3';
import Section4 from '../components/landing_page_components/section4';
import Section5 from '../components/landing_page_components/section5';
import Section6 from '../components/landing_page_components/section6';
import Section7 from '../components/landing_page_components/section7';
import Carousel from '../components/landing_page_components/carousel';
import PreFooter from '../components/landing_page_components/prefooter';
import Footer from '../components/landing_page_components/footer';

const LandingPage = () => {
 return (
        <div className="container-fluid px-0"> 
            <MainHeader />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <hr className='hr' />
            <Carousel />
            <PreFooter />
            <Footer />
        </div>
  )
}

export default LandingPage;