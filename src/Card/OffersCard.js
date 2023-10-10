import React from "react";
import "./OffersCard.css";
import { Button, Image } from "antd";

export default function OffersCard() {
  return (
    <Button className="OffersCardBody">
      <div className="OffersCardOffDiv">
        <p>12% Off</p>
      </div>
      <div className="OffersCardImgDiv">
        <Image
          className="OffersCardImg"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div className="OffersCardTextBox">
        <h3 style={{color:'black'}}>Iphone 15 Pro max</h3>
        <div style={{display:'flex'}}>
            <p>10000</p>
            <p>12000</p>
        </div>
        <div style={{display:'flex'}}>
        <Button type="primary"  className="OffersCardBuyButton">Buy Now</Button>
    <Button className="OffersCardCartButton">Add Cart</Button>
        </div>
        </div>
        
      </div>
    </Button>
  );
}
