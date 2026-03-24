import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const DarkTheme = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`rounded-full flex justify-center items-center-safe p-1  ${theme === "dark" ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}
        `}
      >
        <button onClick={handleTheme}>
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </div>
    </>
  );
};

export default DarkTheme;
