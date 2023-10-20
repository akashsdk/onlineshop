import React from "react";
import ProductDetailsCard from "../Card/ProductDetailsCard";
import Footer from "../Components/Footer";
import Offers from "../Components/Offers";
import { Link } from "react-router-dom";

import i15PromaxGray from "../Image/i15PromaxGray.jpg";
import i15PromaxBlack from "../Image/i15PromaxBlack.jpeg";
import i15PromaxDarkBlue from "../Image/i15PromaxDarkBlue.jpeg";
import i15PromaxWhite from "../Image/i15PromaxWhite.jpeg";
import i15PromaxGold from "../Image/i15PromaxGold.jpeg";

export default function ProductDetails() {
  return (
    <div className="overflowBox">
      <div>
        <ProductDetailsCard
          brandName="Apple"
          name="iPhone 14 Pro Max"
          productCode="i15-06"
          rating="4" // 0 to 5
          sells="101"
          percentage="20"
          oldPrice="230000" // 'In Stock' or 'Out of Stock'
          warranty='Yes' // Yes or No
          color1="black"
          color2="gray"
          color3="DarkBlue"
          color4="white"
          color5="gold"
          img1={i15PromaxBlack}
          img2={i15PromaxGray}
          img3={i15PromaxDarkBlue}
          img4={i15PromaxWhite}
          img5={i15PromaxGold}
        />
        <div style={{ width: "100%" }}>
          <h2 style={{ opacity: ".6" }}>Related Products</h2>
          <Offers />
        </div>
      </div>
      <Footer />
    </div>
  );
}
