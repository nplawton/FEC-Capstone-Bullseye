import {useState, createContext, useEffect} from 'react'

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        (async () => {
          const response = await fetch('https://fec-deploy.onrender.com/products');
          const prods = await response.json();
          setProducts(prods);
          console.log(prods);
        })();
        return () => {};
      }, []);

    return <ProductContext.Provider value={{
        products,
        setProducts
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext;