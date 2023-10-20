import React from "react";
import ProductDetailsCard from "../Card/ProductDetailsCard";
import Footer from "../Components/Footer";
import Offers from "../Components/Offers";

export default function ProductDetails() {
  return (
    <div className="overflowBox">
      <div>
        <ProductDetailsCard />
        <div style={{ width: "100%" }}>
          <h2 style={{opacity:'.6'}}>Related Products</h2>
          <Offers />
        </div>
      </div>
      <Footer />
    </div>
  );
}
