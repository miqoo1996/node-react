import React from 'react';

const Footer = ({ text }) => {
    return <footer id="footer" className="footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <span className="copyright">{text}</span>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a href="https://github.com/miqoo1996/">
                                <i className="fab fa-github"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.facebook.com/miqoo1996/">
                                <i className="fab fa-facebook-f"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/miqayel-ishkhanyan-50bb28bb/">
                                <i className="fab fa-linkedin-in"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li className="list-inline-item">
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;