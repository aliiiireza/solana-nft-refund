import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "@solana/wallet-adapter-react-ui/styles.css";

function MyApp({ Component, pageProps }) {
  const WalletConnectProvider = dynamic(
    () => import("../context/WalletConnectionProvider"),
    { ssr: false }
  );

  return (
    <WalletConnectProvider>
      <Component {...pageProps} />
    </WalletConnectProvider>
  );
}

export default MyApp;
