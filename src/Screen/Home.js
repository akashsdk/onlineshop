import React from "react";
import "./Style/Home.css";

import { FloatButton } from "antd";
import { CustomerServiceOutlined, BellOutlined } from "@ant-design/icons";

import HomeIndex from "./HomeIndex";

import messager from "../Icon/messenger.png";

export default function Home() {
  return (
    <div className="homeBody">
      <div className="homeMedBox">
        <HomeIndex />
      </div>

      <FloatButton.Group shape="circle">
        <FloatButton
          badge={{
            count: 123,
            overflowCount: 999,
          }}
          icon={<BellOutlined />}
        />
        <FloatButton
          badge={{
            count: 0,
          }}
          icon={
            <img
              src={messager}
              style={{
                height: "25px",
                marginLeft: "-3px",
                marginTop: "2px",
              }} />
          }
        />
        <FloatButton.BackTop visibilityHeight={0} />
        {/* <a key={"part-1"} href="" className="mainHeaderTopDivButton">
                Home
              </a> */}
      </FloatButton.Group>
    </div>
  );
}
