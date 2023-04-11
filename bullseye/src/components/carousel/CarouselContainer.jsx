import React, { useState, useEffect } from "react";
import Carousel1 from "./Carousel1.jsx";
import Carousel2 from "./Carousel2.jsx";
import Carousel3 from "./Carousel3.jsx";
import './Carousel.css';

const CarouselContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await fetch('https://fec-deploy.onrender.com/products');
          const prods = await response.json();
          setProducts(prods);
          console.log(prods);
        })();
        return () => {};
      }, []);
    
    return (
        <div className="carousel-container">
            <Carousel1 prod={products} />
            <Carousel2 prod={products} />
            <Carousel3 prod={products} />
        </div>
    )
}

export default CarouselContainer;