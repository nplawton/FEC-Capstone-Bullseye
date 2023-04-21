import { createContext, useState } from 'react';

export const CartContext = createContext();

//the `CartProvider` component wraps up our App component, 
//which provides access to the `CartContext` and its state. 
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

// this function adds item to the cart and updates the quantity
  function addToCart(item, quantity) {
    const index = cartItems.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += quantity;
      setCartItems(newCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity }]);
    }
  }
  
  // this will remove items from cart
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

