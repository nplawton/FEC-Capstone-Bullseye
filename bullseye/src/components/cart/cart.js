import { CartProvider } from "./cartContext";
import { Cart } from "./displayCart";
import { AddToCartButton } from "./addtocart";
import ProductContext from "../context/ProductContext.js";
import { useContext, useState } from "react";
import Loading from "../carousel/Loading.jsx";
import StarRatings from 'react-star-ratings';


function Addcart() {
  const { products } = useContext(ProductContext);
  const items = [products[0]];
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility
  const [itemAdded, setItemAdded] = useState(false); 

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };


  const getDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 7));
    return deliveryDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div>
      <CartProvider>
        <div className="cart-main-container">
          {!items[0] ? (
            <Loading />
            ) : (
            items.map((item) => (
              <div key={item.id}>
                <div className="cart2-text">${item.price}</div>
                <div className="purchased-text">When purchased online</div>
                <StarRatings
                rating={3.5} // <-- Replace with the actual rating value
                starRatedColor="orange" // <-- Customize the star color
                starDimension="20px" // <-- Customize the star size
                starSpacing="2px" // <-- Customize the space between stars
                />
                <p className="ship-date-cart"><strong>Ship to 78023</strong></p>
                <div className="cart3-text">Get it by {getDeliveryDate()}</div>
                <p className="cart2b-text">Free shipping - Exclusions Apply.</p>
                <div className="purchased-text">This item isn't sold in stores</div>
                <p className="cart3-text"></p>
                
                {/* Dropdown menu to update quantity */}
                {!itemAdded && (
                <>
                <select
                className="cart-dropdown"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                >
                  {/* Drop Down menu of quantity to be added to cart */}
                  {[...Array(2)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      Qty: {index + 1}
                    </option>
                  ))}
                </select>
                </>
                  )}
                
                {/* Pass quantity and toggleSidebar to AddToCartButton */}
                <AddToCartButton
                  item={item}
                  quantity={quantity}
                  toggleSidebar={toggleSidebar}
                  setItemAdded={setItemAdded} // <-- Pass setItemAdded as a prop
                
                />
              </div>
            ))
          )}
          <Cart visible={sidebarVisible} toggleSidebar={toggleSidebar} />
        </div>
      </CartProvider>
    </div>
  );
}

export default Addcart;
