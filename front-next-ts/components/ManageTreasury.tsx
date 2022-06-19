import React, { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import useTreasuryAccount from "@/hooks/useTreasuryAccount";
import useRefundNFTPack from "@/hooks/useRefundNFTPack";
import { notify } from "@/common/notify";

const ManageTreasury = () => {
  const {
    deposit_treasury,
    withdraw_treasury,
    get_treasury_balance: get_current_sol,
  } = useTreasuryAccount();

  const { create_nft } = useRefundNFTPack();

  const [withdrawLoading, setWithdrawLoading] = useState(false);
  const [depositLoading, setDepositLoading] = useState(false);
  const [createNFTLoading, setCreateNFTLoading] = useState(false);

  const [amount, setAmount] = useState("");
  const [userWallet, setUserWallet] = useState("");
  const [treasuryBalance, setTreasuryBalance] = useState("");

  const withdraw = async () => {
    try {
      setWithdrawLoading(true);
      const result = await withdraw_treasury();
      setWithdrawLoading(false);
      notify({
        message: "withdraw",
        description: result,
        type: "success",
      });

      setTreasuryBalance("0 sol");
    } catch {
      setWithdrawLoading(false);
      notify({
        message: "Error On Withdraw",
        type: "error",
      });
    }
  };
  const deposit = async () => {
    setDepositLoading(true);
    try {
      const result = await deposit_treasury(Number(amount));
      setDepositLoading(false);
      notify({
        message: "deposit",
        description: result,
        type: "success",
      });
      let balance = await get_current_sol();
      setTreasuryBalance(balance);
    } catch {
      setDepositLoading(false);
      notify({
        message: "Error On Deposit",
        type: "error",
      });
    }
  };

  const createNFT = async () => {
    try {
      setCreateNFTLoading(true);
      const result = await create_nft(userWallet);
      setCreateNFTLoading(false);
      notify({
        message: "createNFT",
        description: result,
        type: "success",
      });
    } catch {
      setCreateNFTLoading(false);
      notify({
        message: "Error On Create NFT",
        type: "error",
      });
    }
  };

  useEffect(() => {
    get_treasury_balance();
  });

  const get_treasury_balance = async () => {
    let balance = await get_current_sol();
    setTreasuryBalance(balance);
  };

  return (
    <>
      <h1 style={{ color: "black", textTransform: "uppercase" }}>
        {treasuryBalance}
      </h1>
      <div
        className={`card-wrapper-treasury-box ${
          withdrawLoading ? "custom-loading" : ""
        }`}
      >
        {" "}
        <h2 className="card-wrapper-description">Withdraw</h2>
        <p>Close Refund With Clicking on Withdraw</p>
        <Button onClick={withdraw} loading={withdrawLoading}>
          Withdraw
        </Button>
      </div>
      <div
        className={`card-wrapper-treasury-box ${
          depositLoading ? "custom-loading" : ""
        }`}
      >
        <h2 className="card-wrapper-description">Deposit</h2>
        <p>Amount of sol: </p>
        <input
          className="card-wrapper-input"
          type="text"
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={deposit} loading={depositLoading}>
          Deposit
        </Button>
      </div>
      <div
        className={`card-wrapper-treasury-box ${
          createNFTLoading ? "custom-loading" : ""
        }`}
        style={{ width: "calc(100% - 20px)" }}
      >
        <h2 className="card-wrapper-description">Create NFT</h2>
        <p>Wallet Address:</p>
        <input
          className="card-wrapper-input"
          type="text"
          onChange={(e) => setUserWallet(e.target.value)}
        />
        <Button onClick={createNFT} loading={createNFTLoading}>
          Create NFT
        </Button>
      </div>
    </>
  );
};

export default ManageTreasury;
