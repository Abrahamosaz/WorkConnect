import React from "react";
import { createContext, useState } from "react";

// actual value I want to access
export const UserContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => null,
})

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const value = {isLoggedIn, setIsLoggedIn};
    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}