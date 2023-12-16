import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode } from "swiper";

/* 
Props Define  :- 

breakpoints={{
                    0: {
                        spaceBetween: 5,
                        slidesPerView: 2
                    },
                    400: {
                        spaceBetween: 5,
                        slidesPerView: 3
                    },
                    700: {
                        spaceBetween: 5,
                        slidesPerView: 4
                    },
                    1000: {
                        spaceBetween: 5,
                        slidesPerView: 4
                    },

                }}


*/

const SwiperCompo = ({ ComponentData, Component, freeModeBool = false, loopBool = false, swiperBreakpoints }) => {
    return (
        <>
            <Swiper
                className="MenuImgSwiper"
                freeMode={freeModeBool}
                modules={[ Autoplay , FreeMode]}
                loop={loopBool}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                
                breakpoints={swiperBreakpoints}
            >
                {ComponentData.map((item, index) => <SwiperSlide key={index}><Component data={item} /></SwiperSlide>)}
            </Swiper>
        </>
    )
}

export default SwiperCompo;