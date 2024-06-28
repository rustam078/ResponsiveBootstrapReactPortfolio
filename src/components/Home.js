import React from 'react'
import './Home.css';
import TypingEffect from './TypingEffect';
import UncontrolledExample from './UncontrolledExample';
import SliderCard from './SliderCard';
import Carousel from 'react-bootstrap/Carousel';
import ReactCardSliderComponents from './ReactCardSliderComponents';
import Footer from './Footer';
import Subscribe from './Subscribe';
import Testimonial from './Testimonial';
import webdev1 from '../assests/images/img/webdev.jpg';
import webdev2 from '../assests/images/img/webdev2.jpg';
import webdev3 from '../assests/images/bg/vtech.jpg';
const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container-fluid px-0 top-banner1" data-aos="fade-down" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <h1>Hello! I' m <br />Rustam Ali And My Expertise in</h1>
                                <TypingEffect />
                                <p> Java Full stack Developer with 3+ years of hands-on experience in developing java applications, API writing and Code Testing along strong with frontend. </p>
                                <div className="mt-4 order-btn">
                                    <button className="main-btn order-btn d-block d-lg-inline-block" data-aos="fade-up" >Download CV <i className="fa-regular fa-file ps-2"></i></button>
                                    <button className="white-btn ms-lg-4 mt-lg-0 mt-4">Contact Us
                                        <i class="fa-regular fa-address-book ps-3"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="about">
                <section id="home">
                    <div className="container-fluid px-0 top-banner" data-aos="fade-down" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 ms-auto ">
                                    <h1>SKills</h1>
                                    <Carousel>
                                        <Carousel.Item interval={3000} >
                                            <div className='row'>
                                                <div className="col-sm-6" data-aos="fade-down-right">
                                                    <h4>FrontEnd</h4>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>HTML</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Java Script</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>CSS</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>React js</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Angular</span>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6" data-aos="fade-down-left">
                                                    <h4>Backend</h4>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Java</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Spring Boot</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Microservices</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Servlet</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Hibernate</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>

                                        <Carousel.Item interval={3000}>
                                            <div className='row'>
                                                <div className="col-sm-6" data-aos="fade-down-right">
                                                    <h4>Devops</h4>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Jenkins</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>AWS</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Linux</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Docker</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Kubernetes</span>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6" data-aos="fade-down-left">
                                                    <h4>Tools</h4>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Git</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Maven</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Splunk</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Npm</span>
                                                    </div>
                                                    <div className='d-flex gap-2 align-items-center '>
                                                        <i className="fa-solid fa-check text-center " style={{ color: '#A82C48' }}></i>
                                                        <span>Jira</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
            <section className='laptopview'>
                <div className='container mt-4 mb-3  '>
                    <div className='row'>
                        <Carousel>
                            <Carousel.Item interval={3000} >
                                <div className='row'>
                                <SliderCard imgs={webdev1}/>
                                <SliderCard imgs={webdev2}/>
                                <SliderCard imgs={webdev3}/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={3000} >
                                <div className='row'>
                                <SliderCard imgs={webdev1}/>
                                <SliderCard imgs={webdev2}/>
                                <SliderCard imgs={webdev3}/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className='mobileview'>
                <div className='container mt-4 mb-3  '>
                    <div className='row'>
                        <Carousel>
                            <Carousel.Item interval={3000} >
                                <div className='row'>
                                    <SliderCard imgs={webdev1}/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={3000} >
                                <div className='row'>
                                    <SliderCard imgs={webdev3}/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>
            {/* <section id="counter">
                <section className="counter-section">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-3 mb-lg-0 mb-md-0  mb-5">
                                <h2>
                                    <span className="count1">1000</span>+
                                </h2>
                                <p>SAVINGS</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0  mb-5">
                                <h2>
                                    <span className="count2">1300</span>+
                                </h2>
                                <p>PHOTOS</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0  mb-5">
                                <h2>
                                    <span className="count3">2100</span>+
                                </h2>
                                <p>ROCKETS</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0  mb-5">
                                <h2>
                                    <span className="count4">3000</span>+
                                </h2>
                                <p>GLORES</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section> */}
            <Testimonial/>
          <Subscribe/>
            <section id='footer'>
                <Footer/>
            </section>
        </div>
    )
}

export default Home