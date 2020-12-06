import type { AppProps } from "next/app";
import { StoreProvider } from "../lib/store";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
