import type { NextPage } from "next";
import Header from "@/components/Header";
import { TREASURY_STATES } from "@/utils/enums";
import useTreasuryState from "@/hooks/useTreasuryState";
import CreateTreasury from "@/components/CreateTreasury";
import ManageTreasury from "@/components/ManageTreasury";
import Heading from "@/components/Heading";

const Home: NextPage = () => {
  const { isAdmin, treasuryState } = useTreasuryState();

  const renderByTreasuryState = () => {
    if (treasuryState === TREASURY_STATES.WALLET_NOT_CONNECTED)
      return <Heading>Wallet Not Connected</Heading>;
    if (treasuryState === TREASURY_STATES.LOADING)
      return <Heading>Loading...</Heading>;

    if (!isAdmin) return <Heading>You Are Not Admin</Heading>;

    if (treasuryState === TREASURY_STATES.NOT_EXIST) return <CreateTreasury />;
    if (treasuryState === TREASURY_STATES.EXIST) return <ManageTreasury />;
  };

  return (
    <div className="app">
      <Header title="HONEYLAND REFUND ADMIN PANEL" />
      <div className="card-wrapper">
        <div className="card-wrapper-grid custom-scrollbar">
          {renderByTreasuryState()}
        </div>
      </div>
    </div>
  );
};

export default Home;
