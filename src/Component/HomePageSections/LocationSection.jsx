import React, { Component } from 'react';


class LocationSection extends React.Component {
        render() {
                return <section className="mapSection">
                        <div className="container ">
                                <div className="row">
                                        <div className="col-2 col-flex">
                                                <div className=" text-with-icon">
                                                        <i className="fas fa-mosque location-icons"></i>

                                                        <h1> {this.props.metaData.text_1} </h1>
                                                </div>
                                                <div className=" text-with-icon">
                                                        <i className="fas fa-plane-departure location-icons"></i>


                                                        <h1> {this.props.metaData.text_2} </h1>
                                                </div>
                                                <div className=" text-with-icon">
                                                        <i className="fas fa-city location-icons"></i>
                                                        <h1> {this.props.metaData.text_3} </h1>
                                                </div>
                                        </div>

                                        <div className="col-2">
                                                <iframe
                                                        className="map"
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.7688928192183!2d44.30991021516236!3d31.99427988121541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155ed10c7dcace0f%3A0x6b824cfa386f2f87!2sKowsar%20International%20Hotel%20of%20Najaf!5e0!3m2!1sen!2siq!4v1642069348209!5m2!1sen!2siq"
                                                        allowFullScreen
                                                        loading="lazy" />
                                        </div>
                                </div>
                        </div>

                </section>;
        }
}

export default LocationSection;