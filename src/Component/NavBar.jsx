import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
        state = { navIsOpen: false };
        classname = { hiddenIcon: 'hidden', openNav: 'openNav' }
        changeMobileNavStatus = () => {
                this.setState({ navIsOpen: !(this.state.navIsOpen) })
        }
        render() {

                const metaData = this.props.metaData;
                return <div className="container ar" >
                        <nav className="navbar">
                                <ul className={this.state.navIsOpen ? "nav-list openNav" : "nav-list"}>
                                        <li className="nav-item"><Link to={"/"} className="nav-link" onClick={this.changeMobileNavStatus}>{metaData.buttons.home}</Link></li>
                                        {/* <li className="nav-item"><a href="#rooms" className="nav-link" onClick={this.changeMobileNavStatus}>{metaData.buttons.rooms}</a></li> */}
                                        {/* <li className="nav-item"><a href="#restaurant" className="nav-link" onClick={this.changeMobileNavStatus}>{metaData.buttons.restaurant}</a></li> */}
                                        <li className="nav-item"><Link to="/about" className="nav-link" onClick={this.changeMobileNavStatus}>{metaData.buttons.about}</Link></li>
                                        <li className="nav-item"><Link to="/marsa" className="nav-link" onClick={this.changeMobileNavStatus}>{metaData.buttons.marsa}</Link></li>
                                        <li className="nav-item"><a href="#" className="nav-link" onClick={this.props.changeLanguage}>{metaData.buttons.lang}</a></li>
                                </ul>
                                <div className="logo" >
                                        <Link to={"/"} className="logo-text"  onClick={this.changeMobileNavStatus}>{metaData.hotelName}</Link>
                                        <div>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>

                                        </div>
                                </div>



                                <label onClick={this.changeMobileNavStatus} >
                                        <i className={this.state.navIsOpen ? this.classname.hiddenIcon : "fas fa-bars apper"} id="open"></i>
                                        <i className={this.state.navIsOpen ? "fas fa-times apper" : this.classname.hiddenIcon} id="close"></i>
                                </label>
                        </nav>
                </div>;
        }
}

export default NavBar;