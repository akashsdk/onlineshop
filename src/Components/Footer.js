import React from "react";
import "./Footer.css";

import { Flex, Radio, Button } from "antd";

import phoneLogo from "../Icon/phone-call.png";
import location from "../Icon/google-maps.png";

export default function Footer() {
  return (
    <div>
      <div className="footerFlex">
        <div className="footerBox">
          <p className="footerBoxText">SUPPORT</p>
          <Button type="text" block className="footerBoxButton">
            <img height={30} src={phoneLogo} />
            <p className="footerNumberText"> 017** ******</p>
          </Button>
          <Button type="text" block className="footerBoxButton">
            <img height={30} src={location} />
            <p className="footerNumberText">Map View</p>
          </Button>
          <div>
            <p style={{ color: "#ffff" }}>
              Shop & Display Center Address: <br /> <br />
              , Dhaka-1205. Bangladesh <br />
              (Everyday 10am-11pm) <br />
              Mail us: <br />
            </p>
          </div>
        </div>
        <div className="footerBox">
          <p className="footerBoxText">ABOUT US</p>
          <div className="footerBox2Div">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> About Us </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Careers </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Blog </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Join Our Community </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText">
                {" "}
                Order Tracking Delivery{" "}
              </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Terms ﹠ Condition </p>
            </Button>
          </div>
        </div>
        <div className="footerBox">
          <p className="footerBoxText">HELP</p>
          <div className="footerBox2Div">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> EMI Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Privacy Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Refund Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Warranty Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Gift Voucher</p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Complain / Advice </p>
            </Button>
          </div>
        </div>
        <div className="footerBox">
          
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Tasnim Shahriar Akash | All rights
            reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
