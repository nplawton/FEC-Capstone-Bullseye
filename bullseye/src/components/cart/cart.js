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

  return (
    <div>
      <CartProvider>
        <div>
          {!items[0] ? (
            <Loading />
            ) : (
            items.map((item) => (
              <div key={item.id}>
             
                {/* <h3>{item.name}</h3> */}
                <p className="cart2-text">${item.price}</p>
                <p>When purchased online</p>
                <StarRatings
                rating={3.5} // <-- Replace with the actual rating value
                starRatedColor="orange" // <-- Customize the star color
                starDimension="20px" // <-- Customize the star size
                starSpacing="2px" // <-- Customize the space between stars
                />
                <p>Ship to 98004</p>
                <p className="cart3-text">Get it by Tue, Apr 24</p>
                <p className="cart2b-text">Free shipping - Exclusions Apply.</p>
                {/* Dropdown menu to update quantity */}
                {!itemAdded && (
                <>
                <label htmlFor="quantity">Qty: </label>
                <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                >
                  {/* Drop Down menu of quantity to be added to cart */}
                  {[...Array(2)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
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
