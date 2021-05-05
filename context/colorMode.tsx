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
  const [mounted, setMounted] = useState(false);
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
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

  const body = (
    <ColorModeContext.Provider
      value={{ colorMode: colorMode ?? "default", setColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );

  if (!mounted || !colorMode) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }
  return body;
};

export function useColorMode() {
  return useContext(ColorModeContext);
}
