import React, { useState } from "react";
import { notify } from "../common/notify";
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
    notify({
      message: "Nft successfully refunded",
      description:
        "paytype: 3 and owner: 5azMeMz6pTG9uiBs1tih9vQEHWJJFgN1HBcQrB1n1U87 and balance changed through this tx is: 11981200",
      type: "success",
    });
    try {
      const result = await refund_nft(mint, token_account, meta_account, price);
      notify({
        message: "Nft successfully refunded" + result,
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
            {loading ? "LOADING..." : "REFUND"}
          </button>
        </a>
      </div>
    </>
  );
};

export default NFTCard;
