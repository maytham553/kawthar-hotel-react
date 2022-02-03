import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
// import Swiper core and required modules
import SwiperCore, {
        Autoplay
} from 'swiper';

SwiperCore.use([Autoplay]);


class ShowImages extends React.Component {


        render() {


                return (

                        <Swiper
                                spaceBetween={10}
                                loop={true}
                                ltr
                                breakpoints={{
                                        // when window width is >= 640px
                                        0: {
                                                width: 640,
                                                slidesPerView: 1,
                                        },
                                        // when window width is >= 768px
                                        768: {
                                                width: 768,
                                                slidesPerView: 2,
                                        },
                                        1024: {
                                                width: 1024,
                                                slidesPerView: 3,
                                        },
                                }}

                                autoplay={{
                                        "delay": 2500,
                                        "disableOnInteraction": false
                                }}
                                className="mySwiper"
                        >

                                {this.props.srcs.map((src, index) => <SwiperSlide  key={index}><img src={src} height="375" alt="hotel" /> </SwiperSlide>)}
                        </Swiper>

                )
        }
}

export default ShowImages;



