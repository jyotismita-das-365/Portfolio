import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  //Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  //Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.body.className = newTheme;

    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);