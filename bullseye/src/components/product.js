import React from 'react';

const Product = ({ id, name, image, price, addToCart }) => {
  const handleClick = () => {
    addToCart(id);
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Product;
