// src/context/ThemeContext.js
import { createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    document.body.className = "dark";
  }, []);

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
};