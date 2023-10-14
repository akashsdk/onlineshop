import React from "react";
import "./Footer.css";

import { Flex, Radio,  Button } from "antd";

import phoneLogo from '../Icon/phone-call.png';
import location from '../Icon/google-maps.png'

export default function Footer() {
  return (
    <div>
      <div className="footerFlex">
        <div className="footerBox">
          <p className="footerBoxText">SUPPORT</p>
          <Button type="text" block>
      text
    </Button>
          <Button type="text" block className="footerBoxButton">
            <img height={30} src={phoneLogo}/>
            <p className="footerNumberText"> 017** ******</p>
          </Button>
          <Button type="text" block className="footerBoxButton">
            <img height={30} src={location}/>
            <p className="footerNumberText">Map View</p>
          </Button>
          
        </div>
        <div className="footerBox">
          <h1>hhhhh</h1>
        </div>
        <div className="footerBox">
          <h1>hhhhh</h1>
        </div>
        <div className="footerBox">
          <h1>hhhhh</h1>
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
