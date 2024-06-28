import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a className="footer-link" href="#">Register</a>
                                <a className="footer-link" href="#">Forum</a>
                                <a className="footer-link" href="#">Affiliate</a>
                                <a className="footer-link" href="#">FAQ</a>
                                <div className="footer-social pt-4 text-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-dribbble"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="footer-copy">
                                    <div className="copy-right text-center pt-5">
                                        <p className="text-light">© 2021. Rustam Ali. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </footer >
        </>
    )
}

export default Footer