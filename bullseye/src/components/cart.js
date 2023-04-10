import React from 'react';

const Cart = ({ items, removeFromCart }) => {
  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.Prod_name}</p>
          <p>{item.Price}</p>
          <p>{item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total Price: {totalPrice}</h3>
    </div>
  );
};

export default Cart;
