import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { TREASURY_STATES } from "@/utils/enums";
import { isTreasuryExist } from "@/utils/utils";
import { OWNER_WALLET, SOLANA_HOST } from "@/utils/const";
const anchor = require("@project-serum/anchor");

const useTreasuryState = () => {
  const wallet = useWallet();
  const connection = new anchor.web3.Connection(SOLANA_HOST);

  const [isAdmin, setIsAdmin] = useState(false);
  const [treasuryState, setTreasuryState] = useState(TREASURY_STATES.LOADING);

  useEffect(() => {
    setTreasuryState(TREASURY_STATES.LOADING);
    setIsAdmin(false);

    if (!wallet.connected) {
      setTreasuryState(TREASURY_STATES.WALLET_NOT_CONNECTED);
    } else {
      if (wallet.publicKey.toBase58() == OWNER_WALLET.toBase58())
        setIsAdmin(true);

      isTreasuryExist(connection, wallet).then((exist) => {
        setTreasuryState(
          exist ? TREASURY_STATES.EXIST : TREASURY_STATES.NOT_EXIST
        );
      });
    }
  }, [wallet.connected]);

  return {
    isAdmin,
    treasuryState,
  };
};

export default useTreasuryState;
