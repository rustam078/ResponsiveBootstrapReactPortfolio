import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderCard from './SliderCard';
import './SliderCard.css';


const PrevArrow = (props) => {
    return <div {...props}><i className="fas fa-chevron-left"></i></div>;
};

// Custom Arrow Component for Next Button
const NextArrow = (props) => {
    return <div {...props}><i className="fas fa-chevron-right"></i></div>;
};


const ReactCardSliderComponents = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: <PrevArrow />, // Custom Prev Arrow Component
        nextArrow: <NextArrow /> 
    };

    return (
        <div className="slider-container row">
            <Slider {...settings} className='col-sm-1 col-md-4'>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>  
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
                <div>
                    <SliderCard />
                </div>
            </Slider>
        </div>
    )
}

export default ReactCardSliderComponents