import React, { Component } from 'react';
class RoomsSection extends React.Component {
        render() {
                const metaData = this.props.metaData;

                return <section className="rooms" id="rooms">
                        <div className="container">
                                <div className="row">
                                        <div className="col-2">
                                                <div className="text-box">
                                                        <h2 className="headline">{metaData.sectionTitle}</h2>
                                                        <p>
                                                                {metaData.text}
                                                        </p>
                                                        {/* <button className="btn btn-green">اٍستكشفها الان</button>  */}
                                                </div>
                                        </div>
                                        <div className="col-2 ">
                                                <img className={'full-w-img'} src="images/rooms.jpg" alt="image" />
                                        </div>

                                </div>
                        </div>
                </section>;
        }
}

export default RoomsSection;