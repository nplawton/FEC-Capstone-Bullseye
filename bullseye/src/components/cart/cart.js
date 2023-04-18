import { CartProvider } from "./cartContext";
import { Cart } from "./displayCart";
import { AddToCartButton } from "./addtocart";
import ProductContext from "../context/ProductContext.js";
import { useContext, useState } from "react";
import Loading from "../carousel/Loading.jsx";


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
        <div className="cart-main-container">
          {!items[0] ? (
            <Loading />
            ) : (
            items.map((item) => (
              <div key={item.id}>
                <div className="cart2-text">${item.price}</div>
                <div className="purchased-text">When purchased online</div>
               
                <p><strong>Ship to 78023</strong></p>
                <div className="cart3-text">Get it by Tue</div>
                <div className="purchased-text">This item isn’t sold in stores</div>
                
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
