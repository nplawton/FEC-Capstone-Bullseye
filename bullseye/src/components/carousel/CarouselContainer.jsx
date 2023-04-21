import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext.js";
import Carousel1 from "./Carousel1.jsx";
import Carousel2 from "./Carousel2.jsx";
import Carousel3 from "./Carousel3.jsx";
import './Carousel.css';

const CarouselContainer = () => {
    const { products } = useContext(ProductContext)
    
    return (
        <div className="carousel-container">
            <Carousel1 prod={products} />
            <Carousel2 prod={products} />
            <Carousel3 prod={products} />
        </div>
    )
}

export default CarouselContainer;