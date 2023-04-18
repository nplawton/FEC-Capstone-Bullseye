import React, { useContext, useState } from "react";
import { CartContext } from "./cartContext";
import "./Cart.css";

export const AddToCartButton = ({ item, quantity, toggleSidebar }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  
  const handleClick = (newQuantity) => {
    addToCart(item, parseInt(newQuantity));
    setSidebarVisible(true);
    setItemAdded(true);
    setItemCount((prevCount) => prevCount + parseInt(newQuantity));
    setDropdownVisible(false);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      setItemAdded(false);
      setItemCount(0);
    } else {
      handleClick(newQuantity);
    }
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout");
  };
  
  const toggleSidebar2 = () => {
    setSidebarVisible(!sidebarVisible); // Toggle the sidebar visibility
  };

  const handleContinueShopping = () => {
    setSidebarVisible(false);
  };

  return (
    <>
      {itemAdded ? (
        <button className="cart2-btn green-outlined" onClick={toggleDropdown}>
          {itemCount} in cart 
        </button>
      ) : (
        <button className="cart2-btn" onClick={() => handleClick(quantity)}>
          Add to cart
        </button>
      )}

      {dropdownVisible && (
        <div className="quantity-dropdown">
          {[...Array(3).keys()].map((q) => (
            <div
              key={q}
              onClick={() => handleQuantityChange(q)}
              className="quantity-option">
              {q}
              </div>
              ))}
        </div>
      )}

      {/* ... the rest of your code ... */}
      <div className={`overlay ${sidebarVisible ? "visible" : ""}`} onClick={toggleSidebar}></div>
       <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar2}>×</button> {/* Add the close button */}
         <ul>
          {cartItems.map((cartItem) => {
            const totalPrice = (cartItem.price * cartItem.quantity).toFixed(2);

            return (
              <>
              <img alt="D7500" src="./store1.png" width="100px"/>
             
              <div className='cart4-text'>Added to cart</div>
              <div key={cartItem.id}>
              <div className='cart4-text'>Standard Shipping</div>
              <div className='cart3-text'>Get it by Monday Apr 24</div>
              <div className="cartcontainer">
                <img alt="Nikon D7500" src="https://target.scene7.com/is/image/Target//GUEST_6e39668a-bb54-4e62-ad6b-0e065b1ed33c" width="100px"/>
              <div>
                <p>
                  <span style={{fontWeight: 'bold', color: "#000000"}}>   {cartItem.name}</span></p>
                  <span style={{fontWeight: 'bold', color: "#B85300"}}> WARNING: </span>
                  <span style={{fontSize: '9',color: '#B85300'}}> choking hazard - small parts. Not for children under 3 yrs. </span>
                </div>
                </div>
                 Quantity: {cartItem.quantity} - Total: ${totalPrice}
                {/* <button onClick={() => removeFromCart(cartItem)}>Remove</button> */}
              </div>
              </>
            );
          })}
        </ul>
      <button className="cart2-btn" onClick={handleContinueShopping}>
        Continue shopping
      </button>
      <button className="cart2-btn" onClick={handleCheckout}>
        Checkout
      </button>
      </div>
    </>
  );
};
