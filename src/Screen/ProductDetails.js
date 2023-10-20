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
  const region = [ 'Regular', 'CN', 'UAE', 'USA' ];
  const Sim = ['e-Sim', 'Dual']
  const Storage = ['128GB', '256GB', '512GB', "1TB"]
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
          color1="black" // null or data
          color2="gray"  // null or data
          color3="DarkBlue"  // null or data
          color4="white" // null or data
          color5="gold" // null or data
          img1={i15PromaxBlack} // must Send
          img2={i15PromaxGray} // must Send
          img3={i15PromaxDarkBlue} // must Send
          img4={i15PromaxWhite} // must Send
          img5={i15PromaxGold} // must Send
          region={region} // null or data
          sim={Sim} // null or data
          storage= {Storage} // null or data
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
