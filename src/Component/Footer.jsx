import React, { Component } from 'react';

class Footer extends React.Component {

        backToTop = () => {
                window.scroll({
                        top: 0, 
                        left: 0, 
                        behavior: 'smooth'
                      });
        }
        render() {
                const metaData = this.props.metaData;
                return <footer >
                        <div className="container">
                                <div className="back-to-top" onClick={this.backToTop}>
                                        <i className="fas fa-chevron-up"></i>
                                </div>
                                <div className="footer__content row">

                                        <div className="center-item">
                                                <div className="right-text">
                                                        <h4>{metaData.text.upper}</h4>
                                                        <p>{metaData.text.lower}</p>
                                                </div>
                                                <ul className="social-icons">

                                                        <li>
                                                                <a href="#">
                                                                        <i className="fab fa-facebook-f"></i>
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#">
                                                                        <i className="fab fa-twitter"></i>
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#">
                                                                        <i className="fab fa-instagram"></i>
                                                                </a>
                                                        </li>
                                                </ul>
                                                <p className="copyright">
                                                        {metaData.copyright}
                                                </p>
                                        </div>
                                </div>
                        </div>
                </footer>

                        ;
        }
}

export default Footer;