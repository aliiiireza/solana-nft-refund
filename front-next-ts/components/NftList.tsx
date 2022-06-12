import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react";
import useRefundNFTPack from "../hooks/useRefundNFTPack";
import NFTCard from "./NFTCard";
import style from "../styles/NFTSet.module.css";

const NftList = () => {
  const [nfts, setNfts] = useState([]);
  const [log, setLog] = useState([]);

  const wallet = useWallet();
  const { refund_nft_list, refund_nft } = useRefundNFTPack();

  useEffect(() => {
    if (wallet.connected) {
      get_refundable_nfts();
    }
  }, [wallet]);

  const get_refundable_nfts = async () => {
    let qnfts = await refund_nft_list();
    // console.log(qnfts);
    setNfts(qnfts);
  };

  const log_printer = async (result) => {
    setLog(result);
    let qnfts = await refund_nft_list();
    setNfts(qnfts);
  };

  return (
    <>
      {nfts.length === 0 ? (
          <h1 className="card-wrapper-description">No NFTS for Refund</h1>
      ) : (
          nfts.map((nft) => {
            return (
                <NFTCard
                    key={nft.Index}
                    mint={nft.Mint}
                    token_account={nft.TokenAccount}
                    meta_account={nft.Meta}
                    name={nft.Name}
                    image={nft.Image}
                    price={nft.Price}
                    days={nft.Days}
                    refund_nft={refund_nft}
                    log_printer={log_printer}
                />
            );
          })
      )}
        <div className={style.NFTLogSection}>
          <p>{log}</p>
        </div>
    </>
  );
};

export default NftList;
