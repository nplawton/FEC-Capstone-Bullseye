import React from "react";
import './Carousel.css';

const Card = (props) => {
    const image = props.image;
    const { price, name } = props.prod;
    
    return (
        <div className="carousel-card">
            <img src={image} className="imageUrl" />
            <p className="carousel-card-price">${price}</p>
            <p className="carousel-card-text">{name}</p>
        </div>
    )
}

export default Card;