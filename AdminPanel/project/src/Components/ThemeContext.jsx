import {  createContext, useState } from "react";


// create the context
export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light");
    // toggletheme function
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"));
    };
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};
