// import { CartProvider } from './cartContext';
// import { Cart } from './displayCart';
// import { AddToCartButton } from "./addtocart";
// import ProductContext from "../context/ProductContext.js";
// import {useContext} from 'react'
// import Loading from '../carousel/Loading.jsx'

// function Addcart() {
  
//   const {products} = useContext(ProductContext)
//   const items = [products[0]];

//   return (
//     <div>
//       <CartProvider>
//         <div>
//           {!items[0] ? <Loading /> : items.map((item) => ( 
//           <div key={item.id}>
//             <h3>{item.name}</h3>
//             <p>{item.price}</p>
//             <p2>Sale</p2>
//             <AddToCartButton item={item} />
//             </div>
//             ))}
//             <Cart />
//             </div>
//             </CartProvider>
//     </div>
//   );
// }
// export default Addcart;

// import { CartProvider } from './cartContext';
// import { Cart } from './displayCart';
// import { AddToCartButton } from "./addtocart";
// import ProductContext from "../context/ProductContext.js";
// import { useContext, useState } from 'react'
// import Loading from '../carousel/Loading.jsx'

// function Addcart() {
  
//   const { products } = useContext(ProductContext)
//   const items = [products[0]];
//   const [quantity, setQuantity] = useState(1); // State for quantity

//   return (
//     <div>
//       <CartProvider>
//         <div>
//           {!items[0] ? <Loading /> : items.map((item) => ( 
//             <div key={item.id}>
//               <h3>{item.name}</h3>
//               <p style={{ color: 'rgb(204, 0, 0)', font: 'arial', fontWeight: 'bold', fontSize: '25px' }}>${item.price}</p>
//               <p2>reg $1899</p2>
//               <p style={{ color: 'rgb(204, 0, 0)', font: 'arial', fontWeight: 'bold', fontSize: '25px' }}>Sale</p>
//               <p>When purchased online</p>
//               {/* Dropdown menu to update quantity */}
//               <label htmlFor="quantity">Qty: </label>
//               <select 
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//               >
//               {/* Drop Down menu of quantity to be added to cart */}
//               {[...Array(3)].map((_, index) => (
//               <option key={index + 1} value={index + 1}>
//                     {index + 1}
//                   </option>
//                 ))}
//               </select>
//               {/* Pass quantity to AddToCartButton */}
//               <AddToCartButton item={item} quantity={quantity} />
//             </div>
//           ))}
//           <Cart />
//         </div>
//       </CartProvider>
//     </div>
//   );
// }

// export default Addcart;

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
                <h3>{item.name}</h3>
                <p
                  style={{
                    color: "rgb(204, 0, 0)",
                    font: "arial",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  ${item.price}
                </p>
                <p2>reg $1899</p2>
                <p
                  style={{
                    color: "rgb(204, 0, 0)",
                    font: "arial",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  Sale
                </p>
                <p>When purchased online</p>
                {/* Dropdown menu to update quantity */}
                <label htmlFor="quantity">Qty: </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {/* Drop Down menu of quantity to be added to cart */}
                  {[...Array(3)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                {/* Pass quantity and toggleSidebar to AddToCartButton */}
                <AddToCartButton
                  item={item}
                  quantity={quantity}
                  toggleSidebar={toggleSidebar}
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
