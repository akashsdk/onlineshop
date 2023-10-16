import React from "react";
import "./Style/Cart.css";
import Footer from "../Components/Footer";

import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

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

          <div className="cartTopBox2">
            <div className="cartTopImg2">
              <p>Image</p>
            </div>
            <div className="cartTopText2">
              <p>Product</p>
            </div>
            <div className="cartTopModel2">
              <p>Model</p>
            </div>
            <div className="cartTopQuantity2">
              <p>Quantity</p>
            </div>
            <div className="cartTopPrice2">
              <p>Unit Price</p>
            </div>
            <div className="cartTopTotal2">
              <p>3440</p>
              <Button
                className="cartTopDeleteButton"
                shape="circle"
                icon={
                  <DeleteOutlined style={{ fontSize: "23px", color: "red" }} />
                }
              />
            </div>
          </div>

          <div className="cartTopLineDiv" />

          <div className="cartTopMidPriceDiv">
            <div className="cartTopMidPriceDox">
              <h3>Sub-Total:</h3>
              <p className="cartTopMidPriceP">BDT 5000</p>
            </div>

            <div className="cartTopMidPriceDox2">
              <h3>Delivery Charge:</h3>
              <p className="cartTopMidPriceP">(will be added)</p>
            </div>

            <div className="cartTopMidPriceDox2">
              <h3>Total Discount:</h3>
              <p className="cartTopMidPriceP">0</p>
            </div>

            <div className="cartTopMidPriceDox2">
              <h3>Total:</h3>
              <p className="cartTopMidPriceP">BDT 7200</p>
            </div>
          </div>

          <div className="cartTopBottomDiv">
            <Input size="large" placeholder="large size" />
            <Button size={"large"} danger>Danger Default</Button>
            <Input size="large" placeholder="large size" />
            <Button size={"large"} danger>Danger Default</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
