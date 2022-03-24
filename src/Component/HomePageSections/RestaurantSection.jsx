import React, { Component } from 'react';

class RestaurantSection extends React.Component {
        render() {
                const metaData = this.props.metaData;
                return <>
                        <section className="restaurant" id="restaurant">
                                <div className="container">
                                        <div className="row ">
                                                <div className="col-2 padding-right">
                                                        <div className="text-box">
                                                                <h2>{metaData.sectionTitle}</h2>
                                                                <p>
                                                                        {metaData.text.upper}
                                                                </p>
                                                                {/* <button className="btn btn-white">استمتع بالعشاء معنا</button>  */}
                                                        </div>
                                                </div>
                                                <div className="col-2">
                                                        <img className="full-w-img" src="images/restaurant.jpg" alt="image" />
                                                </div>
                                        </div>
                                </div>
                        </section>
                </>
                        ;
        }
}

export default RestaurantSection;