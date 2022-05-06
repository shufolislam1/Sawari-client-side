import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li>Import Sport Bikes</li>
                                <li>Import Any Kinf of Parts</li>
                                <li>Import 200cc Bikes (special service)</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>SAWARI</h3>
                            <p>We are always there for you.Any kind of information or discussion , please feel free to contact us.We will be happy to hear you.</p>
                        </div>
                    </div>
                    <p className="copyright">SAWARI © 2022</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;