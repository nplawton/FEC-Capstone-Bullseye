import {useState, createContext, useEffect} from 'react'

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [accounts, setAccounts] = useState([])
    
    useEffect(() => {
        (async () => {
          const response = await fetch('https://fec-deploy.onrender.com/products');
          const prods = await response.json();
          setProducts(prods);
          console.log(prods);
        })();
        return () => {};
    }, []);

    useEffect(() => {
        (async () => {
          const response = await fetch('https://fec-deploy.onrender.com/accounts');
          const accts = await response.json();
          setAccounts(accts);
          console.log(accts);
        })();
        return () => {};
    }, []);

    return <ProductContext.Provider value={{
        products,
        setProducts,
        accounts,
        setAccounts
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext;