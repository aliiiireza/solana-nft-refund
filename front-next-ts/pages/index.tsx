import type { NextPage } from "next";
import Header from "@/components/Header";
import NftList from "@/components/NftList";
import useTreasuryState from "@/hooks/useTreasuryState";
import { TREASURY_STATES } from "@/utils/enums";
import Heading from "@/components/Heading";

const Home: NextPage = () => {
  const { treasuryState } = useTreasuryState();

  const renderByTreasuryState = () => {
    if (treasuryState === TREASURY_STATES.WALLET_NOT_CONNECTED)
      return <Heading>Wallet Not Connected</Heading>;
    if (treasuryState === TREASURY_STATES.LOADING)
      return <Heading>Loading...</Heading>;
    if (treasuryState === TREASURY_STATES.NOT_EXIST)
      return <Heading>Refund Program Has Been Ended</Heading>;

    return <NftList />;
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
