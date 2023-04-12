import { CartProvider } from './cartContext';
import { Cart } from './displayCart';
import { AddToCartButton } from "./addtocart";


function Addcart() {
  const items = [
    { id: 1, name: 'Item 1', price: 10 }, //temp item need to be replaced with the one in api call
  ];
  return (
    <div>
      <CartProvider>
        <div>
          {items.map((item) => ( 
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <AddToCartButton item={item} />
            </div>
            ))}
            <Cart />
            </div>
            </CartProvider>
    </div>
  );
}
export default Addcart;

