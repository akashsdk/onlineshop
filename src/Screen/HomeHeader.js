import React, { Component, useState, useRef, useEffect } from "react";
import "./Style/Home.css";
import "./Style/HomeHeader.css";

import { Button, Input, Menu, Drawer, Radio, Space } from "antd";
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
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose2 = () => {
    setOpen2(false);
  };
  return (
    <div className="homeBody">
      {/* TopBox */}
      <div className="homeTopBox">
        <Button
          className="homeTopBoxMenu"
          onClick={showDrawer2}
          shape="circle"
          size="large"
          icon={<PicCenterOutlined />}
        />
        <Drawer placement="left" 
        onClose={onClose2}
         open={open2}
         style={{

         }}>
          <div className="homeTopBoxMenuDrawer">
            <div className="homeTopBoxMenuDrawerBox">
            <Button type="text" className="homeMedTopButton1" block>
              Phones & Tablets
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Power Adapter
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              MacBook
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Smart Watch
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Airpods
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
            Headphones
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Speakers
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Cable & Interconnects
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Power Bank
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Wireless Charger
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Hubs & Docks
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Keyboard
            </Button>
            <Button type="text" className="homeMedTopButton1" block>
              Cover & Glass
            </Button>
            </div>
          </div>
        </Drawer>
        <h1 style={{ color: "#ffffff", flex: "1" }}>Logo&Name</h1>
        <Button
          className="homeTopBoxSearch"
          onClick={showDrawer}
          shape="circle"
          size="large"
          icon={<SearchOutlined />}
        />
        <Drawer
          placement="top"
          closable={false}
          onClose={onClose}
          open={open}
          height={70}
          style={{
            marginTop: "20px",
            width: "86%",
            marginLeft: "7%",
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
        >
          <Search
            placeholder="search"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
            }}
          />
        </Drawer>
        <div className="homeTopBoxSearchDiv">
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: 250,
              backgroundColor: "white",
              borderRadius: "6px",
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
            <p className="homeBottomBoxButtonText">Cart(0)</p>
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
