import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <div className="main-header">
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container d-flex justify-content-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                            <i className="bi bi-phone" /> +91 9988776655
                        </div>
                        <div className="d-none d-lg-flex social-links align-items-center">
                            <NavLink className="twitter" to={{pathname:"https://twitter.com/"}} target="_blank">
                                <i className="bi bi-twitter" />
                            </NavLink>
                            <NavLink className="facebook" to={{pathname:"https://www.facebook.com/"}} target="_blank">
                                <i className="bi bi-facebook" />
                            </NavLink>
                            <NavLink className="instagram" to={{pathname:"https://www.instagram.com/"}} target="_blank">
                                <i className="bi bi-instagram" />
                            </NavLink>
                            <NavLink className="linkedin" to={{pathname:"https://www.linkedin.com/"}} target="_blank">
                                <i className="bi bi-linkedin" />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <div className="logo">
                            <a href="index.html">
                                <h1 className="logo me-auto">City</h1><br />
                                <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                            </a>
                        </div>
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li>
                                    <NavLink exact to='/' className="nav-link scrollto"> Home </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Departments' className="nav-link scrollto"> Departments </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Doctors' className="nav-link scrollto"> Doctors </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/About' className="nav-link scrollto"> About </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/medicine' className="nav-link scrollto"> Medicine </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Contact' className="nav-link scrollto"> Contact </NavLink>
                                </li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        <NavLink to='/Appointment'  className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>Appointment</NavLink>
                        
                        <NavLink to='/login' className="appointment-btn scrollto">
                            <span className="d-none d-md-inline">Login</span>
                        </NavLink>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;