import React from "react";
import Image from "next/image";
import style from "../styles/NFTSet.module.css";

const NFTCard = ({
  mint,
  token_account,
  meta_account,
  name,
  image,
  price,
  days,
  refund_nft,
  log_printer,
}) => {
  const refundClicked = async () => {
    const result = await refund_nft(mint, token_account, meta_account, price);
    log_printer(result);
    console.log(result);
  };
  return (
    <>
      <div className="card-wrapper-grid-item">
            <img src={image} />

        <h4>{name}</h4>
        <p>Days Of Hold: {days}</p>
        <a><button type="button" onClick={refundClicked}>REFUND</button></a>
      </div>

      {/*<div className="card-wrapper-grid-item">*/}
        {/*<Image src={image} alt="honeyland" width={100} height={100} />*/}
        {/* <h1>{name}</h1> */}
        {/*<div className={style.cardContent}>*/}
        {/*  <p className={style.title}>{name}</p>*/}
        {/*  <p className={style.cardExtra}>price: {price}</p>*/}
        {/*  <p className={style.cardExtra}>days of hold: {days}</p>*/}
        {/*</div>*/}
        {/*<button className={style.cardButton} onClick={refundClicked}>*/}
        {/*  Refund*/}
        {/*</button>*/}
      {/*</div>*/}
    </>
  );
};

export default NFTCard;
