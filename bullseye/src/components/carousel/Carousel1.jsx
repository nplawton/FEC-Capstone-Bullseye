import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";
import Slider from 'react-slick';
import imageUrls from "./imgUrls.js";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel1 = ({prod}) => {
    const products = prod;

    // Settings variable used to populate the "Slider" components from Slick
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
            <h4 className="main-carousel-header">Similar items</h4>
            {(products.length <= 0) ? <div><Loading /></div> :
            <div className="carousel-main">
                <Slider {...settings}>
                    <div>
                        <Card image={imageUrls[0]} prod={products[1]} />
                    </div>
                    <div>
                        <Card image={imageUrls[1]} prod={products[2]} />
                    </div>
                    <div>
                        <Card image={imageUrls[2]} prod={products[3]} />
                    </div>
                    <div>
                        <Card image={imageUrls[3]} prod={products[4]} />
                    </div>
                    <div>
                        <Card image={imageUrls[4]} prod={products[5]} />
                    </div>
                    <div>
                        <Card image={imageUrls[5]} prod={products[6]} />
                    </div>
                    <div>
                        <Card image={imageUrls[6]} prod={products[7]} />
                    </div>
                    <div>
                        <Card image={imageUrls[7]} prod={products[8]} />
                    </div>
                    <div>
                        <Card image={imageUrls[8]} prod={products[9]} />
                    </div>
                    <div>
                        <Card image={imageUrls[9]} prod={products[10]} />
                    </div>
                </Slider>
            </div>}
        </div>
    )
}

export default Carousel1;