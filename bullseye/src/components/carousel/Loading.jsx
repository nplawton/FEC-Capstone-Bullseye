import React from "react";
import './Carousel.css';

// This is a generic component used with ternary operators to make a 
// temporary placeholder for when an API call is slow to load
const Loading = () => {
        
    return (
        <div className="carousel-card">
            <h2 className="carousel-card-price">Loading...</h2>
        </div>
    )
}

export default Loading;