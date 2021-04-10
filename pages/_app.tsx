import type { AppProps } from "next/app";
import { ColorModeProvider } from "../context/colorMode";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
