import { useState, useContext } from 'react';
import { CartContext } from './cartContext';

export const AddToCartButton = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
  };

  return (
    <div>
      <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleAddToCart} style={{ backgroundColor: 'red', color: 'white' , borderRadius: 5, borderColor: 'red', fontWeight: 'bold', boxShadow: 'none' }}>
        Add to Cart
      </button>
    </div>
  );
};
