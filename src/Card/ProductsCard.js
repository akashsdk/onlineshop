import React from "react";
import "./ProductsCard.css";

import { Image, Button } from "antd";

import walletMen from "../Image/Leather wallet for men.jpeg";
import taka from "../Icon/taka (1).png";
import taka2 from "../Icon/taka.png";

export default function ProductsCard() {
  return (
    <Button className="ProductsCardBody">
      <Image
        height={170}
        width="90%"
        className="ProductsCardImage"
        src={walletMen}
      />
      <div className="ProductsCardTextDiv">
        <p className="ProductsCardText">
          High quality Artificial <br /> Leather wallet for men
        </p>
      </div>
      <div className="ProductsCardBox">
        <div style={{display:'flex'}}>
          <img height={15} width={15} className="ProductsCardPriceIcon" src={taka} />
          <p className="ProductsCardPrice">115</p>
        </div>
        <div style={{display:'flex', marginTop:'-25px'}}>
          <img height={13} width={13} className="ProductsCardPriceIcon2" src={taka2} />
          <p className="ProductsCardPrice2">115</p>
          <p className="ProductsCardPrice3">-20%</p>
        </div>

      </div>
    </Button>
  );
}
