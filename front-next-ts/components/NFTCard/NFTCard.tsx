import React, { useState } from "react";
import { notify } from "@/common/notify";

interface NFTCardProps {
  /**
   * Mint address of the NFT
   */
  mint: string;
  /**
   * Token account address of the NFT
   */
  token_account: string;
  /**
   * Meta account address of the NFT
   **/
  meta_account: string;
  /**
   * Name of the NFT
   */
  name: string;
  /**
   * Image of the NFT
   */
  image: string;
  /**
   * Price of the NFT
   */
  price: string;
  /**
   * Days of hold of the NFT
   */
  days: number;
  /**
   * Refund NFT function
   */
  refund_nft?: (
    min: string,
    token_account: string,
    meta_account: string,
    price: string
  ) => string;
}

/**
 * NFT Card Component
 */
const NFTCard = ({
  mint,
  token_account,
  meta_account,
  name,
  image,
  price,
  days = 0,
  refund_nft,
}: NFTCardProps) => {
  const [loading, setLoading] = useState(false);
  const refundClicked = async () => {
    setLoading(true);
    try {
      const result = await refund_nft(mint, token_account, meta_account, price);
      notify({
        message: "Nft successfully refunded",
        description: result,
        type: "success",
      });
    } catch (e) {
      notify({ message: "Sorry, there was a problem", type: "error" });
    }
  };
  return (
    <>
      <div className={`card-wrapper-grid-item ${loading ? "loading" : ""}`}>
        <img src={image} />
        <h4>{name}</h4>
        <p>days of hold: {days}</p>
        <a>
          <button
            type="button"
            onClick={!loading && refundClicked}
            disabled={loading}
          >
            {loading ? "REFUNDING..." : "REFUND"}
          </button>
        </a>
      </div>
    </>
  );
};

export default NFTCard;
