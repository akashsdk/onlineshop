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

import { Link } from "react-router-dom";

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
        <Drawer placement="left" onClose={onClose2} open={open2} style={{}}>
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
        <Link to="/" style={{flex:'1'}}>
        <h1 style={{ color: "#ffffff", flex: "1" }}>Logo&Name</h1>
        </Link>
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
          <Link to="/My-Offers" style={{ flex: "1" }}>
            <Button type="link" block className="homeBottomBoxButton1">
              <GiftOutlined className="homeBottomBoxButtonIcon" />
              <p className="homeBottomBoxButtonText">Offers</p>
            </Button>
          </Link>

          <Link to="/My-Cart" style={{ flex: "1" }}>
            <Button type="link" block className="homeBottomBoxButton2">
              <ShoppingCartOutlined className="homeBottomBoxButtonIcon" />
              <p className="homeBottomBoxButtonText">Cart(0)</p>
            </Button>
          </Link>

          <Link to="/Pre-Order" style={{ flex: "1" }}>
            <Button type="link" block className="homeBottomBoxButton2">
              <ShoppingOutlined className="homeBottomBoxButtonIcon" />
              <p className="homeBottomBoxButtonText">Pre-Order</p>
            </Button>
          </Link>

          <Link to="/Contacts" style={{ flex: "1" }}>
            <Button type="link" block className="homeBottomBoxButton2">
              <MessageOutlined className="homeBottomBoxButtonIcon" />
              <p className="homeBottomBoxButtonText">Contacts</p>
            </Button>
          </Link>

          <Link to="/Account" style={{ flex: "1" }}>
            <Button type="link" block className="homeBottomBoxButton2">
              <UserOutlined className="homeBottomBoxButtonIcon" />
              <p className="homeBottomBoxButtonText">Account</p>
            </Button>
          </Link>
        </div>
      </div>
      {/* MidBox */}
      <div className="homeMedBox">
        {/* homeMedTopBox */}
        <div className="homeMedTopBox">
          <Link to='/Category/Phones-Tablets' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton0" block>
            Phones &<br />
            Tablets
          </Button>
          </Link>

          <Link to='/Category/Power-Adapter' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Power <br></br>
            Adapter
          </Button>
          </Link>

          <Link to='/Category/Computer-and-Laptop' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            <p>MacBook</p>
          </Button>
          </Link>

          <Link to='/Category/Smart-Watch' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Smart <br /> Watch
          </Button>
          </Link>

          <Link to='/Category/Headphones' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Airpods
          </Button>
          </Link>

          <Link to='/Category/Headphones' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            {/* <Menu
              mode="horizontal"
              items={items}
              className="homeMedTopButtonMenu"
            /> */}
            Headphones
          </Button>
          </Link>

          <Link to='/Category/Speakers' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Speakers
          </Button>
          </Link>

          <Link to='/Category/Cable-and-Interconnects' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Cable & <br /> Interconnects
          </Button>
          </Link>

          <Link to='/Category/Power-Bank' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Power Bank
          </Button>
          </Link>

          <Link to='/Category/Wireless-Charger' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Wireless <br /> Charger
          </Button>
          </Link>

          <Link to='/Category/Hubs-Docks' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Hubs & <br /> Docks
          </Button>
          </Link>

          <Link to='/Category/Keyboard' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Keyboard
          </Button>
          </Link>

          <Link to='/Category/Cover&Glass' style={{flex:'1'}}>
          <Button type="text" className="homeMedTopButton" block>
            Cover & <br /> Glass
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
