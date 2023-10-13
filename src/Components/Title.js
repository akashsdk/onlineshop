import React from "react";
import "./Title.css";
import { Button, Flex } from "antd";

import SafePayments from "../Icon/safety.png";
import Delivery from '../Icon/food-delivery.png';
import EasyReturns from '../Icon/return.png';
import BestPrice from '../Icon/price-tag.png';
import Authentic from '../Icon/authentic.png';
import Verified from '../Icon/biometric-identification.png';


export default function Title() {
  return (
    <Button type="text" className="titleBody">
      <div className="titleBox">
        <img height={25} src={SafePayments} />
        <p className="titleText"> Safe Payments</p>
        <div className="titleLine" />
      </div>
      <div className="titleBox">
        <img height={25} src={Delivery} />
        <p className="titleText"> Nationwide Delivery</p>
        <div className="titleLine" />
      </div>
      <div className="titleBox">
        <img height={25} src={EasyReturns} />
        <p className="titleText"> Free & Easy Returns</p>
        <div className="titleLine" />
      </div>
      <div className="titleBox">
        <img height={25} src={BestPrice} />
        <p className="titleText"> Best Price Guaranteed</p>
        <div className="titleLine" />
      </div>
      <div className="titleBox">
        <img height={25} src={Authentic} />
        <p className="titleText"> 100% Authentic Products</p>
        <div className="titleLine" />
      </div>
      <div className="titleBox">
        <img height={25} src={Verified} />
        <p className="titleText">Verified Products </p>
      </div>
    </Button>
  );
}
