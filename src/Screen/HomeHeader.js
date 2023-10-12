import React from "react";
import "./Style/Home.css";

import { Button, Input, Menu } from "antd";
import {
  GiftOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  MessageOutlined,
  UserOutlined,
  AudioOutlined,
  PicCenterOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const items = [
  {
    label: "Headphones",
    key: "SubMenu",
    children: [
      {
        label: "Overhead Headphone ",
        key: "headphone:1",
      },
      {
        label: "Wired Headphone ",
        key: "headphone:2",
      },
      {
        label: "Wireless Headphone",
        key: "headphone:3",
      },
    ],
  },
];

export default function HomeHeader() {
  return (
    <div className="homeBody">
      {/* TopBox */}
      <div className="homeTopBox">
        <Button
          className="homeTopBoxMenu"
          shape="circle"
          size="large"
          icon={<PicCenterOutlined />}
        />
        <h1 style={{ color: "#ffffff", flex: "1" }}>Logo&Name</h1>
        <Button
          className="homeTopBoxSearch"
          shape="circle"
          size="large"
          icon={<SearchOutlined />}
        />
        <div className="homeTopBoxSearchDiv">
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: 250,
              backgroundColor:'white',
              borderRadius:'6px'
            }}
            // addonAfter={<AudioOutlined />}
          />
        </div>
        <div className="homeTopBoxLeftDiv">
          <Button type="link" block className="homeBottomBoxButton1">
            <GiftOutlined className="homeBottomBoxButtonIcon" />
            <p className="homeBottomBoxButtonText">Offers</p>
          </Button>

          <Button type="link" block className="homeBottomBoxButton2">
            <ShoppingCartOutlined className="homeBottomBoxButtonIcon" />
            <p className="homeBottomBoxButtonText">Cart</p>
          </Button>

          <Button type="link" block className="homeBottomBoxButton2">
            <ShoppingOutlined className="homeBottomBoxButtonIcon" />
            <p className="homeBottomBoxButtonText">Pre-Order</p>
          </Button>

          <Button type="link" block className="homeBottomBoxButton2">
            <MessageOutlined className="homeBottomBoxButtonIcon" />
            <p className="homeBottomBoxButtonText">Contacts</p>
          </Button>

          <Button type="link" block className="homeBottomBoxButton2">
            <UserOutlined className="homeBottomBoxButtonIcon" />
            <p className="homeBottomBoxButtonText">Account</p>
          </Button>
        </div>
      </div>
      {/* MidBox */}
      <div className="homeMedBox">
        {/* homeMedTopBox */}
        <div className="homeMedTopBox">
          <Button type="text" className="homeMedTopButton0" block>
            Phones &<br />
            Tablets
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Power <br></br>
            Adapter
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            <p>MacBook</p>
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Smart <br /> Watch
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Airpods
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            <Menu
              mode="horizontal"
              items={items}
              className="homeMedTopButtonMenu"
            />
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Speakers
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Cable & <br /> Interconnects
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Power Bank
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Wireless <br /> Charger
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Hubs & <br /> Docks
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Keyboard
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Cover & <br /> Glass
          </Button>
        </div>
      </div>
    </div>
  );
}
