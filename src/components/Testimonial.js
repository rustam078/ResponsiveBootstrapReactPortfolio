import React from 'react'
import './Testimonial.css';
import rev1 from '../assests/images/review/review-1.jpg';
import rev2 from '../assests/images/review/review-2.jpg';
import Carousel from 'react-bootstrap/Carousel';
const Testimonial = () => {
    return (
        <section id="testimonial">
            <div class="wrapper testimonial-section">
                <div class="container text-center">
                    <div class="text-center pb-4">
                        <h2>Testimonial</h2>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-lg-10 offset-lg-1">
                            {/* <div id="carousel ExampleDark" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                                        aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carousel ExampleDark" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="carousel-caption">
                                            <img src={rev1} alt='rev1'/>
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                                    live the blind texts. "</p>
                                                <h5>Johnthan Doe UX Designer</h5>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="carousel-caption">
                                            <img src={rev2} alt='rev2'/>
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                                    live the blind texts. "</p>
                                                <h5>Maccy Doe Front End</h5>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="carousel-caption">
                                                <img src={rev1} rev='alt3'/>
                                                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                                        live the blind texts. "</p>
                                                    <h5>Johnthan Doe UX Designer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <Carousel>
                        <Carousel.Item interval={3000}>
                        <img src={rev1} alt='rev1'/> 
                            <Carousel.Caption>
                            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                                    live the blind texts. "</p>
                                                <h5>Maccy Doe Front End</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                        <img src={rev2} alt='rev1'/>
                            <Carousel.Caption>
                            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                                    live the blind texts. "</p>
                                                <h5>Maccy Doe Front End</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                        <img src={rev1} alt='rev1'/>
                            <Carousel.Caption>
                            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                                        live the blind texts. "</p>
                                                    <h5>Johnthan Doe UX Designer</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Testimonial