import React, { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from "../styled";

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleDarkTheme: () => {}
});

interface IThemeProvider {
    children: React.ReactNode
}

export const SettingProvider = ({ children }: IThemeProvider) => {
    
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    
    function toggleDarkTheme() {
        setIsDarkTheme(!isDarkTheme)
    }
 
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}