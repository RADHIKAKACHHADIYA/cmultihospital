import React, { useContext } from 'react';
import Switch from "react-switch";
import { NavLink } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import Alert from './Alert/Alert';
import { useDispatch } from 'react-redux';
import { signoutUser } from '../redux/actions/signup.action';

function Header() {

    const theme = useContext(ThemeContext);
    const sessionUid = sessionStorage.getItem("user")
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(signoutUser())
    }

    return (
        <>
            <div className={`main-header ${theme.theme}`}>
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className={`container d-flex justify-content-between ${theme.theme}`}>
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                            <i className="bi bi-phone" /> +91 9988776655
                        </div>
                        <Alert />
                        <div className="d-none d-lg-flex social-links align-items-center">
                            <NavLink className="twitter" to={{ pathname: "https://twitter.com/" }} target="_blank">
                                <i className="bi bi-twitter" />
                            </NavLink>
                            <NavLink className="facebook" to={{ pathname: "https://www.facebook.com/" }} target="_blank">
                                <i className="bi bi-facebook" />
                            </NavLink>
                            <NavLink className="instagram" to={{ pathname: "https://www.instagram.com/" }} target="_blank">
                                <i className="bi bi-instagram" />
                            </NavLink>
                            <NavLink className="linkedin" to={{ pathname: "https://www.linkedin.com/" }} target="_blank">
                                <i className="bi bi-linkedin" />
                            </NavLink>
                            <Switch
                                onChange={() => theme.toggleTheme(theme.theme)}
                                checked={theme.theme === 'light' ? true : false} />

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
                        <NavLink to='/bookAppointment' className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>Appointment</NavLink>
                        {
                            sessionUid !== null ?
                                <NavLink to='/login' className="appointment-btn scrollto" onClick={() => handleLogout()}>
                                    <span className="d-none d-md-inline">Logout</span>
                                </NavLink>
                                :
                                <NavLink to='/login' className="appointment-btn scrollto">
                                    <span className="d-none d-md-inline">Login</span>
                                </NavLink>
                        }

                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;