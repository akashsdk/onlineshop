import React from "react";
import ProductDetailsCard from "../Card/ProductDetailsCard";
import Footer from "../Components/Footer";

export default function ProductDetails() {
  return (
    <div className="overflowBox">
      <div>
        <ProductDetailsCard />
      </div>
      <Footer />
    </div>
  );
}
