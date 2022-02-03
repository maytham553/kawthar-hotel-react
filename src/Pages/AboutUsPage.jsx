import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
// import Swiper core and required modules
import SwiperCore, {
        Autoplay
} from 'swiper';

SwiperCore.use([Autoplay]);

class AboutPage extends React.Component {
        srcs = [
                "images/collection-1.jpg",
                "images/collection-2.jpg",
                "images/collection-3.jpg",
                "images/collection-4.jpg",
                "images/collection-5.jpg",
                "images/collection-6.jpg",
                "images/collection-7.jpg",
                "images/collection-8.jpg",
                "images/collection-9.jpg",
                "images/collection-10.jpg",
                "images/collection-11.jpg",
                "images/collection-12.jpg",
                "images/collection-14.jpg",
                "images/collection-15.jpg",
                "images/collection-16.jpg",

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
                return <div id="about-us" className="home-page">

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
                                        <h1>{metaData.title}</h1> <br />

                                        {metaData.aboutPage.text._1}
                                </p>

                                <br />
                                <p>
                                        {metaData.aboutPage.text._2}
                                </p>
                                <br />

                                <p>
                                        {metaData.aboutPage.text._3}
                                </p>
                                <br />
                                <br />

                                <h1>{metaData.aboutPage.features.title}</h1>
                                <br />
                                <p>

                                        <div className="vision">
                                                <i className="fas fa-check-square"></i>
                                                <span className="vision-text">{metaData.aboutPage.features.point_1}  </span>
                                        </div>
                                        <br />
                                        <div className="vision">
                                                <i className="fas fa-check-square"></i>
                                                <span className="vision-text">{metaData.aboutPage.features.point_2}</span>
                                        </div>
                                        <br />
                                        <div className="vision">
                                                <i className="fas fa-check-square"></i>
                                                <span className="vision-text">{metaData.aboutPage.features.point_3} </span>
                                        </div>
                                        <br />
                                        <div className="vision">
                                                <i className="fas fa-check-square"></i>
                                                <span className="vision-text">{metaData.aboutPage.features.point_3}</span>
                                        </div>
                                        <br />
                                </p>

                                <p>
                                        {metaData.aboutPage.text._4}
                                </p>

                                <br />

                                <p>
                                        {metaData.aboutPage.text._5}

                                </p>

                        </div>

                </div>;
        }
}

export default AboutPage;