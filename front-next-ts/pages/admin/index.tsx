import type { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {OWNER_WALLET} from "../../utils/const";
const Home: NextPage = () => {
  const wallet = useWallet();

  if(!wallet.connected) return <><h1>Wallet Not Connected</h1><WalletMultiButton/></>
  if(wallet.publicKey.toBase58() == OWNER_WALLET.toBase58()) return <h1>Authorization Failed</h1>

  return (
    <div className="app">
      <h1>Admin</h1>
    </div>
  );
};

export default Home;