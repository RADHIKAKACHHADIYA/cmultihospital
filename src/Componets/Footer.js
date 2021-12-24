import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Footer(props) {
    return (
        <>
            <div>
                <footer id="footer">
                    <div className="container d-md-flex py-4">
                        <div className="me-md-auto text-center text-md-start">
                            <div>
                                <h4>Address</h4>
                                <p>
                                    F-505, <br />
                                    Inovative Plazza<br />
                                    New Delhi, India<br /><br />
                                    <strong>Phone:</strong> +91 9988776655<br />
                                    <strong>Email:</strong> cityhospital@example.com<br />
                                </p>
                            </div>
                        </div>
                        <div className="social-links text-center text-md-right pt-3 pt-md-0">
                            
                            <NavLink className="twitter" to={{pathname:"https://twitter.com/"}} target="_blank">
                                <i className="bx bxl-twitter"/>
                            </NavLink>
                            <NavLink className="facebook" to={{pathname:"https://www.facebook.com/"}} target="_blank">
                                <i className="bx bxl-facebook" />
                            </NavLink>
                            <NavLink className="instagram" to={{pathname:"https://www.instagram.com/"}} target="_blank">
                                <i className="bx bxl-instagram" />
                            </NavLink>
                            <NavLink className="google-plus" to={{pathname:"https://www.skype.com/"}} target="_blank">
                                <i className="bx bxl-skype" />
                            </NavLink>
                            <NavLink className="linkedin" to={{pathname:"https://www.linkedin.com/"}} target="_blank">
                                <i className="bx bxl-linkedin" />
                            </NavLink>
                        </div>
                    </div>
                </footer>
                {/* <div id="preloader" /> */}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>

        </>
    );
}

export default Footer;