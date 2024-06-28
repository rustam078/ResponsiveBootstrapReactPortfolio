import React from 'react'
import logo from '../assests/images/logo.jpg';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container">
          <NavLink className="navbar-brand" to="#"><img src={logo}/> </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-stream "></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav align-items-center ms-auto gap-lg-4">
                    <li className="nav-item">
                      <NavLink className="nav-link " aria-current="page" to="">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="test">Test</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="review">Review</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="table">Details</NavLink>
                    </li>
                    <li><button className="main-btn">+91 8804840441</button></li>
                    </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Navbar