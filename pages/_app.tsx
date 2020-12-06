import type { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("called");
  return <Component {...pageProps} />;
}

export default MyApp;
