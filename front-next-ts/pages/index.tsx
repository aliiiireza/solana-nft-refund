import type { NextPage } from "next";
const anchor = require("@project-serum/anchor");
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { isTreasuryExist } from "../utils/utils";
import { SOLANA_HOST } from "../utils/const";
import { TREASURY_STATES } from "../utils/enums";
import Header from "../components/Header";
import NftList from "../components/NftList";

const Home: NextPage = () => {
  const wallet = useWallet();
  const connection = new anchor.web3.Connection(SOLANA_HOST);
  const [treasuryState, setTreasuryState] = useState(TREASURY_STATES.LOADING);

  useEffect(() => {
    setTreasuryState(TREASURY_STATES.LOADING);
    isTreasuryExist(connection, wallet).then((exist) => {
      setTreasuryState(
        exist ? TREASURY_STATES.EXIST : TREASURY_STATES.NOT_EXIST
      );
    });
  }, [wallet.connected]);

  const renderByTreasuryState = () => {
    switch (treasuryState) {
      case TREASURY_STATES.LOADING:
        return <h1 className="card-wrapper-description">Loading...</h1>;
      case TREASURY_STATES.NOT_EXIST:
        return (
          <h1 className="card-wrapper-description">
            Refund Program Has Been Ended.
          </h1>
        );
      case TREASURY_STATES.EXIST:
        return <NftList />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="card-wrapper">
        <div className="card-wrapper-grid custom-scrollbar">
          {renderByTreasuryState()}
        </div>
      </div>
    </div>
  );
};

export default Home;
