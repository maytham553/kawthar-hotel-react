import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
// import Swiper core and required modules
import SwiperCore, {
        Autoplay
} from 'swiper';
class MarsaPage extends React.Component {
        srcs = [
                "images/marsa/1.jpg",
                "images/marsa/2.jpg",
                "images/marsa/3.jpg",
                "images/marsa/4.jpg",
                "images/marsa/5.jpg",
                "images/marsa/6.jpg",
                "images/marsa/7.jpg",
                "images/marsa/8.jpg",
                "images/marsa/9.jpg",
        ];

        componentDidMount() {

                window.scroll({
                        top: 100,
                        left: 0,
                        behavior: 'smooth'
                });
        }

        render() {
                const metaData = this.props.metaData;
                return <div id="marsa" className="marsa-page">

                        <div className="top-section ">

                        </div>

                        <div className="absolute-section">
                                <Swiper
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{
                                                "delay": 2500,
                                                "disableOnInteraction": false
                                        }}
                                        centeredSlidesBounds
                                        className="mySwiper"
                                >

                                        {this.srcs.map((src, index) => <SwiperSlide key={index}><img src={src} className="one-slide-image" alt="hotel" /> </SwiperSlide>)}
                                </Swiper>
                        </div>


                        <div className="bottom-section">
                                <p >
                                        <h1>{metaData.marsaPage.title}</h1> <br />
                                        {metaData.marsaPage.text}
                                </p>

                                <br />
                                <br />
                                <br />
                                <br />




                                <h1>{metaData.marsaPage.vision.title}</h1>
                                <br />
                                <p>
                                        {metaData.marsaPage.vision.text}



                                        <div className="vision">
                                                <i className="fas fa-check-square"></i>
                                                <span className="vision-text">{metaData.marsaPage.vision.point_1}</span>
                                        </div>
                                        <br />
                                        <div className="vision">
                                                <i className="fas fa-check-square"></i>
                                                <span className="vision-text"> {metaData.marsaPage.vision.point_2}</span>
                                        </div>
                                        <br />
                                        <div className="vision">
                                                <i className="fas fa-check-square"></i>
                                                <span className="vision-text">{metaData.marsaPage.vision.point_3}</span>
                                        </div>
                                        <br />
                                        <div className="vision">
                                                <i className="fas fa-check-square"></i>
                                                <span className="vision-text">{metaData.marsaPage.vision.point_4}</span>
                                        </div>
                                        <br />
                                </p>

                        </div>

                </div>;
        }
}

export default MarsaPage;