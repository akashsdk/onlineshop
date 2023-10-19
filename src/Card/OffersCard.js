import React, { useState, useEffect } from "react";
import "./OffersCard.css";
import { Button, Image } from "antd";
import { Link } from "react-router-dom";

export default function OffersCard({ percentage, number, Img, name }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    if (percentage === "" || number === "") {
      setResult("");
      return;
    }

    const percent = parseFloat(percentage);
    const num = parseFloat(number);

    if (isNaN(percent) || isNaN(num)) {
      setResult("");
      return;
    }

    const calculatedResult = Math.round(num - (percent / 100) * num);
    setResult(calculatedResult);
  }, [percentage, number]);
  return (
    <Link to="/Category/Product-Details">
      <Button className="OffersCardBody">
        <div className="OffersCardOffDiv">
          <p>{percentage}% Off</p>
        </div>
        <div className="OffersCardImgDiv">
          <Image height={100} className="OffersCardImg" src={Img} />
          <div />
          <div className="OffersCardTextBox">
            <h3 style={{ color: "black" }}>{name}</h3>
            <div style={{ display: "flex" }}>
              <p className="OffersCardTextResult">
                {result !== "" ? <p> {result}</p> : <p>Enter Price</p>}
              </p>
              <p className="OffersCardTextPrice">{number}</p>
            </div>
            <div style={{ display: "flex" }}>
              <Link to="/Checkout">
                <Button type="primary" className="OffersCardBuyButton">
                  Buy Now
                </Button>
              </Link>
              <Link to="/My-Cart">
                <Button className="OffersCardCartButton">Add Cart</Button>
              </Link>
            </div>
          </div>
        </div>
      </Button>
    </Link>
  );
}
