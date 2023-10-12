import React, { useEffect, useState } from "react";
import "./ProductsCard.css";

import { Image, Button } from "antd";

import taka from "../Icon/taka (1).png";
import taka2 from "../Icon/taka.png";

export default function ProductsCard({
  rating,
  percentage,
  number,
  Img,
  name,
  details,
  sells,
}) {
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
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : "empty"}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <Button className="ProductsCardBody">
      <Image
        height={170}
        width="90%"
        className="ProductsCardImage"
        src={Img}
      />
      <div className="ProductsCardTextDiv">
        <p className="ProductsCardText">
          {name} 
        </p>
        <p className="ProductsCardTextDetails"> {details}</p>
       
      </div>
      <div className="ProductsCardBox">
        <div style={{ display: "flex" }}>
          <img
            height={15}
            width={15}
            className="ProductsCardPriceIcon"
            src={taka}
          />
          <p className="ProductsCardPrice">
              {result !== "" ? <p> {result}</p> : <p>Out of Stock</p>}
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "-35px" }}>
          <img
            height={13}
            width={13}
            className="ProductsCardPriceIcon2"
            src={taka2}
          />
          <p className="ProductsCardPrice2">{number}</p>
          <p className="ProductsCardPrice3">-{percentage}%</p>
          <p className="ProductsCardPrice4">Sell's ({sells})</p>
        </div>
        <div className="star-rating">{renderStars(rating)}</div>
      </div>
    </Button>
  );
}
