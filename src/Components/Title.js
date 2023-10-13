import React from "react";
import "./Title.css";
import { Button, Flex } from "antd";

import SafePayments from "../Icon/safety.png";
import Delivery from "../Icon/food-delivery.png";
import EasyReturns from "../Icon/return.png";
import BestPrice from "../Icon/price-tag.png";
import Authentic from "../Icon/authentic.png";
import Verified from "../Icon/biometric-identification.png";

export default function Title() {
  return (
    <div className="container">
      {/* Box 1 (Up to 1000px) */}
      <div className="box-box1">
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
      </div>
      {/* Box 2 (1000px to 600px) */}
      <div className="box-box2">
        <Button type="text" className="titleBody2">
          <div className="titleDiv-2">
            <div className="titleBox2">
              <img height={25} src={SafePayments} />
              <p className="titleText"> Safe Payments 2</p>
            </div>
            <div className="titleBox">
              <img height={25} src={Delivery} />
              <p className="titleText"> Nationwide Delivery</p>
            </div>
          </div>
          <div className="titleLine2" />

          <div className="titleDiv-2">
            <div className="titleBox">
              <img height={25} src={EasyReturns} />
              <p className="titleText"> Free & Easy Returns</p>
            </div>

            <div className="titleBox">
              <img height={25} src={BestPrice} />
              <p className="titleText"> Best Price Guaranteed</p>
            </div>
          </div>
          <div className="titleLine2" />

          <div className="titleDiv-2">
            <div className="titleBox">
              <img height={25} src={Authentic} />
              <p className="titleText"> 100% Authentic Products</p>
            </div>
            <div className="titleBox">
              <img height={25} src={Verified} />
              <p className="titleText">Verified Products </p>
            </div>
          </div>
        </Button>
      </div>
      {/* Box 3 (Below 600px) */}
      <div className="box-box3">
        <Button type="text" className="titleBody3">
          <div className="titleDiv-2">
            <div className="titleBox3">
              <img height={20} src={SafePayments} />
              <p className="titleText3"> Safe Payments 3</p>
            </div>
            <div className="titleBox3">
              <img height={20} src={Delivery} />
              <p className="titleText3"> Nationwide Delivery</p>
            </div>

            <div className="titleBox3">
              <img height={20} src={EasyReturns} />
              <p className="titleText3"> Free & Easy Returns</p>
            </div>
          </div>
          <div className="titleLine3" />

          <div className="titleDiv-2">
            <div className="titleBox3">
              <img height={20} src={BestPrice} />
              <p className="titleText3"> Best Price Guaranteed</p>
            </div>

            <div className="titleBox3">
              <img height={20} src={Authentic} />
              <p className="titleText3"> 100% Authentic Products</p>
            </div>
            <div className="titleBox3">
              <img height={20} src={Verified} />
              <p className="titleText3">Verified Products </p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
