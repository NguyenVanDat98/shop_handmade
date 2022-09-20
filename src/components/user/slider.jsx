import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { dataDigitalBestSeller } from './../../common/data.js';

function SlideShow() {
    // const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // const handleErrorImage = (data) => {
    //     setDefaultImage((prev) => ({
    //         ...prev,
    //         [data.target.alt]: data.target.alt,
    //         linkDefault: logo,
    //     }));
    // };

    return (
        <div className="slideshow">
            <Slider {...settings}>
                {dataDigitalBestSeller.map((item) => (
                    <div className="card">
                        <div className="card-top">
                            <img
                                src={item.linkImg}
                                alt={item.title}
                            />
                            <h1>{item.title}</h1>
                        </div>
                        <div className="card-bottom">
                            <h3>{item.price}</h3>
                            <span className="category">{item.category}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlideShow;
