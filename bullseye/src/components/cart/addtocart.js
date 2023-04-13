// import React, { useContext } from "react";
// import { CartContext } from "./cartContext";

// export const AddToCartButton = ({ item, quantity }) =>{
//   const { addToCart } = useContext(CartContext);

//   const handleClick = () => {
//     addToCart(item, parseInt(quantity)); // Update the addToCart function call with quantity
//   };

//   return (
//     <button className='cart2-btn' onClick={handleClick}>
//       Add to cart
//     </button>
//   );
// }

import React, { useContext, useState } from "react";
import { CartContext } from "./cartContext";
import './Cart.css';
//import { Cart } from "./displayCart"; // Import the Cart component


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
      </button><div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar2}>×</button> {/* Add the close button */}
        <ul>
          {cartItems.map((cartItem) => {
            const totalPrice = (cartItem.price * cartItem.quantity).toFixed(2);

            return (
              <>
             <div className='sidebarText'>Added to cart</div>
              <div key={cartItem.id}>
                {cartItem.name} - Quantity: {cartItem.quantity} - Total: ${totalPrice}
                <button onClick={() => removeFromCart(cartItem)}>Remove</button>
              </div>
              </>
            );
          })}
        </ul>
        <button onClick={handleCheckout}>Checkout</button> {/* Add the checkout button */}
      </div>
    </>
  );
};