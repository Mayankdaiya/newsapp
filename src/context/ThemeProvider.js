import { useState } from "react";
import Theme from "./Theme";

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light") 
    const toggleTheme = () =>{
        if(theme==="light") setTheme("dark")
        else setTheme("light")
    }

    return (
        <Theme.Provider value={{theme, toggleTheme}}>
            {props.children}
        </Theme.Provider>
    )
}

export default ThemeProvider;