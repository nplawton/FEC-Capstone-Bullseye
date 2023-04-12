import { useContext } from 'react';
import { CartContext } from './cartContext';

//We're rendering a list of items, each with an `AddToCartButton` component that adds the item to the cart when clicked. 
//Finally, we're rendering the `Cart` component to display the items in the cart.
export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.name}
            <button onClick={() => removeFromCart(cartItem)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

