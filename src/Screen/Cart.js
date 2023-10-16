import React from "react";
import "./Style/Cart.css";
import Footer from "../Components/Footer";

export default function Cart() {
  return (
    <div className="overflowBox">
      <div className="cartBody">
        <div className="cartBox">
          <p>Shopping Cart</p>
          <div className="cartTopBox">
            <div className="cartTopImg">
              <h3>Image</h3>
            </div>
            <div className="cartTopText">
              <h3>Product</h3>
            </div>
            <div className="cartTopModel">
              <h3>Model</h3>
            </div>
            <div className="cartTopQuantity">
              <h3>Quantity</h3>
            </div>
            <div className="cartTopPrice">
              <h3>Unit Price</h3>
            </div>
            <div className="cartTopTotal">
              <h3>Total</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
