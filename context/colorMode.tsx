import { createContext, FC, useContext, useEffect, useState } from "react";

type ColorMode = "default" | "dark" | "light";
interface ContextProps {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
}

const colorModeDefault: ContextProps = {
  colorMode: "default",
  setColorMode: () => {},
};
const ColorModeContext = createContext<ContextProps>(colorModeDefault);

export const ColorModeProvider: FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>("default");

  useEffect(() => {
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  }, []);

  useEffect(() => {
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("colorMode", "dark");
    }
    if (colorMode === "default") {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("default");
    }
    if (colorMode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("colorMode", "light");
    }
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export function useColorMode() {
  return useContext(ColorModeContext);
}
