import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";
import Slider from 'react-slick';
import imageUrls from "./imgUrls.js";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = (props) => {
    const products = props.prod;

    const settings = {
        accessibility: true,
        dots: true,
        arrows: true,
        dotsClass: 'slick-dots',
        adaptiveHeight: true,
        slidesToShow: 7,
        slidesToScroll: 5,
        slide: 'div',
        draggable: false
    }
    
    return (
        <div className="carousel">
            <h2 className="main-carousel-header">Featured Products</h2>
            {(products.length <= 0) ? <div><Loading /></div> :
            <div className="carousel-main">
                <Slider {...settings}>
                    <div>
                        <Card image={imageUrls[10]} prod={products[11]} />
                    </div>
                    <div>
                        <Card image={imageUrls[11]} prod={products[12]} />
                    </div>
                    <div>
                        <Card image={imageUrls[12]} prod={products[13]} />
                    </div>
                    <div>
                        <Card image={imageUrls[13]} prod={products[14]} />
                    </div>
                    <div>
                        <Card image={imageUrls[14]} prod={products[15]} />
                    </div>
                    <div>
                        <Card image={imageUrls[15]} prod={products[16]} />
                    </div>
                    <div>
                        <Card image={imageUrls[16]} prod={products[17]} />
                    </div>
                    <div>
                    <Card image={imageUrls[17]} prod={products[18]} />
                    </div>
                    <div>
                        <Card image={imageUrls[18]} prod={products[19]} />
                    </div>
                    <div>
                        <Card image={imageUrls[19]} prod={products[20]} />
                    </div>
                </Slider>
            </div>}
        </div>
    )
}

export default Carousel2;