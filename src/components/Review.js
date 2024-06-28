import React from 'react'

const Review = () => {
    return (
        <div>
            <section id="home">
                <div className="container-fluid px-0 top-banner" data-aos="fade-up" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <h1>Good Food choices are good investments.</h1>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam harum laudantium esse
                                    laborum rem.</p>
                                <div className="mt-4 order-btn">
                                    <button className="main-btn order-btn">Order-now <i className="fas fa-shopping-basket ps-3"></i></button>
                                    <button className="white-btn ms-lg-4 mt-lg-0 mt-4">Order-now <i
                                        className="fas fa-angle-right ps-3"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div data-aos="fade-up">
            <section id="counter">
                <section className="counter-section">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-3 mb-lg-0 mb-md-0  mb-5">
                                <h2>
                                    <span className="count1"></span>+
                                </h2>
                                <p>SAVINGS</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0  mb-5">
                                <h2>
                                    <span className="count2"></span>+
                                </h2>
                                <p>PHOTOS</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0  mb-5">
                                <h2>
                                    <span className="count3"></span>+
                                </h2>
                                <p>ROCKETS</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0  mb-5">
                                <h2>
                                    <span className="count4"></span>+
                                </h2>
                                <p>GLORES</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            </div>
        </div>
    )
}

export default Review