import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
    const [blog, setblog] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:5501/src/data/product1.json')
            .then(res => setblog(res.data))
    }, [])

    return (
        <BlogContext.Provider value={[blog, setblog]}>
            {children}
        </BlogContext.Provider>
    )
}



