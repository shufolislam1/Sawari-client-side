import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li>Web design</li>
                                <li>Development</li>
                                <li>Hosting</li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                    </div>
                    <p class="copyright">Company Name © 2018</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;