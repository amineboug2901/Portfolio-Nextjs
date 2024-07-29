"use client";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

let initialThemeState = JSON.parse(
  window.localStorage.getItem("themeSettings")
) || {
  primary: "color-1",
  background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
  const [isRead, setIsRead] = useState(false);
  useEffect(() => {
    initialThemeState = JSON.parse(
      window.localStorage.getItem("themeSettings")
    ) || {
      primary: "color-1",
      background: "bg-1",
    };
    setIsRead(true);
  }, []);

  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  // save theme settings to local storage
  useEffect(() => {
    if (isRead)
      localStorage.setItem("themeSettings", JSON.stringify(themeState));
  }, [themeState, isRead]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook to use our theme context wherever we want in our project
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
