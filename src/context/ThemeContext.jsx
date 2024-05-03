import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext(localStorage.getItem('theme'));
export const ThemeProvider =({children})=>{
    const [theme,setTheme] = useState("light")
    useEffect(()=>{
        if (localStorage.getItem('light')===null) {
            localStorage.setItem('dark',"dark")
        }
    },[])
    return(
        <ThemeContext.Provider value={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}