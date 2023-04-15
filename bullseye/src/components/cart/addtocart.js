import React, { useContext, useState } from "react";
import { CartContext } from "./cartContext";
import './Cart.css';

export const AddToCartButton = ({ item, quantity, toggleSidebar }) => {
  const { addToCart } = useContext(CartContext);
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [sidebarVisible, setSidebarVisible] = useState(false); // State to manage sidebar visibility

  const handleClick = () => {
    addToCart(item, parseInt(quantity)); // Update the addToCart function call with quantity
    setSidebarVisible(true); // Show the sidebar when an item is added to the cart
    //toggleSidebar(); 
  };
  const handleCheckout = () => {
    // Add your checkout logic here
    console.log('Proceed to checkout');
  };
  const toggleSidebar2 = () => {
    setSidebarVisible(!sidebarVisible); // Toggle the sidebar visibility
  };

  return (
    <>
      <button className="cart2-btn" onClick={handleClick}>
        Add to cart
      </button>
      <div className={`overlay ${sidebarVisible ? "visible" : ""}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar2}>×</button> {/* Add the close button */}
        <ul>
          {cartItems.map((cartItem) => {
            // const totalPrice = (cartItem.price * cartItem.quantity).toFixed(2);

            return (
              <>
              <div className='cart-text'>Added to cart</div>
              <div key={cartItem.id}>
              <div className='sidebarText'>Standard Shipping</div>
              <div className='cart3-text'>Get it by Monday Apr 24</div>
              
              
              <div className="cartcontainer"><img alt="Nikon D7500 DX-Format DSLR Camera (Body Only, Black)" src="https://target.scene7.com/is/image/Target//GUEST_6e39668a-bb54-4e62-ad6b-0e065b1ed33c" width="100px"/>
              <div>
                <p><span style={{ fontWeight: 'bold', color: "#000000" }}>   {cartItem.name}</span></p>
                <span style={{ fontWeight: 'bold', color: "#B85300" }}> WARNING: </span>
                <span style={{ fontSize: '9',color: '#B85300' }}> choking hazard - small parts. Not for children under 3 yrs. </span>
                
                </div>
                </div>
                 {/* Quantity: {cartItem.quantity} - Total: ${totalPrice} */}
                <button onClick={() => removeFromCart(cartItem)}>Remove</button>
              </div>
              </>
            );
          })}
        </ul>
        <button className="cart2-btn" onClick={handleCheckout}>Checkout</button> {/* Add the checkout button */}
      </div>
    </>
  );
};