import type { NextPage } from "next";
import Header from "@/components/Header";
import AdminView from "@/components/AdminView";
import useTreasuryState from "@/hooks/useTreasuryState";
import { TREASURY_STATES } from "@/utils/enums";

const Heading = ({ children }) => (
  <h1 className="card-wrapper-description">{children}</h1>
);

const Home: NextPage = () => {
  const { isAdmin, treasuryState } = useTreasuryState();

  const renderByTreasuryState = () => {
    if (treasuryState === TREASURY_STATES.WALLET_NOT_CONNECTED)
      return <Heading>Wallet Not Connected</Heading>;
    if (treasuryState === TREASURY_STATES.LOADING)
      return <Heading>Loading...</Heading>;

    if (!isAdmin) return <Heading>You Are Not Admin</Heading>;

    if (treasuryState === TREASURY_STATES.NOT_EXIST) return <AdminView />;
    if (treasuryState === TREASURY_STATES.EXIST) return <AdminView />;
  };
  return (
    <div className="app">
      <Header title="TREASURY ADMIN" />
      <div className="card-wrapper">
        <div className="card-wrapper-grid custom-scrollbar">
          {renderByTreasuryState()}
        </div>
      </div>
    </div>
  );
};

export default Home;
