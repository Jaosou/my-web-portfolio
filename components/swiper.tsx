'use cilent'

import React from 'react'
import { Swiper } from "swiper/react";
import { MdNavigateNext, MdArrowBackIos } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const SwiperBar = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='relative w-full'>
            <div className='mx-10'>
                <Swiper
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    }}
                    slidesPerView={5}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        1300: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                        1800: {
                            slidesPerView: 5,
                        },
                        2560: {
                            slidesPerView: 7,
                        }
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {children}
                </Swiper>
            </div>
            <div className='button-next btnSwiperNext'>
                <MdNavigateNext size={30} className='text-xl text-white' />
            </div>
            <div className='button-prev btnSwiperPrev'>
                <MdArrowBackIos size={15} className='text-xl text-white' />
            </div>
        </div>
    )
}

export default SwiperBar