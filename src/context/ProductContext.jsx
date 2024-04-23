import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:5501/src/data/product.json')
            .then(res => setProduct(res.data))
    }, [])
    return (
        <ProductContext.Provider value={[product, setProduct]}>
            {children}
        </ProductContext.Provider>
    )
}
