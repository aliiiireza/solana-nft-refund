import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react";
import useRefundNFTPack from "../hooks/useRefundNFTPack";
import NFTCard from "./NFTCard/NFTCard";

const NftList = () => {
  const [nfts, setNfts] = useState([]);

  const wallet = useWallet();
  const { refund_nft_list, refund_nft } = useRefundNFTPack();

  useEffect(() => {
    if (wallet.connected) {
      get_refundable_nfts();
    }
  }, [wallet]);

  const get_refundable_nfts = async () => {
    let qnfts = await refund_nft_list();
    setNfts(qnfts);
  };

  return (
    <>
      {nfts.length === 0 ? (
        <h1 className="card-wrapper-description">No NFTs for refund</h1>
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
            />
          );
        })
      )}
    </>
  );
};

export default NftList;
