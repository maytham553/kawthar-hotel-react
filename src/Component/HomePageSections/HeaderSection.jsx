import React, { Component } from 'react';

class HeaderSection extends React.Component {
        render() {
                const metaData = this.props.metaData;

                return <header>
                        <div id="hero" className="hero">
                                <div className="container ">
                                        <div className="hero__text-box">
                                                <h1 className="hero__text">
                                                        <span className="hero__text-top">{metaData.text.upper}</span>
                                                        <span className="hero__text-bottom">{metaData.text.lower}</span>
                                                </h1>
                                                <button className="btn btn-green">{metaData.buttonText}</button>
                                        </div>
                                </div>
                        </div>
                </header>;
        }
}

export default HeaderSection;