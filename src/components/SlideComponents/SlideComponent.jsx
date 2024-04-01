import { Image } from 'antd';
import React from 'react';
import Slider from 'react-slick';

const SlideComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        style: {
            border: 'none',
            outLine: 'none',
        },
    };
    return (
        <div>
            <Slider {...settings}>
                {arrImages.map((image, index) => {
                    return (
                        <Image
                            key={index}
                            src={image}
                            alt="slider"
                            preview={false}
                            width="100%"
                        />
                    );
                })}
            </Slider>
        </div>
    );
};

export default SlideComponent;
