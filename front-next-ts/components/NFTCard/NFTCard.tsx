import React, { useState } from "react";
import { notify } from "@/common/notify";
const NFTCard = ({
  mint,
  token_account,
  meta_account,
  name,
  image,
  price,
  days,
  refund_nft,
}) => {
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
    setLoading(false);
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
