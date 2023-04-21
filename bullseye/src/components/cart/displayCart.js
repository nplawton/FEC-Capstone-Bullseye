import { useContext, useState } from 'react';
import { CartContext } from './cartContext';
import './Cart.css';

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleCheckout = () => {
    // Add your checkout logic here
    console.log('Proceed to checkout');
  };

  return (
    <>
      {/* <button onClick={toggleSidebar}>Add to Cart</button> */}
      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button> {/* Add the close button */}
        <ul>
          {cartItems.map((cartItem) => {
            const totalPrice = (cartItem.price * cartItem.quantity).toFixed(2);

            return (
              <>
             <div className='sidebarText'>Add to cart</div>
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


