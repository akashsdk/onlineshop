import React from "react";
import "./Style/Home.css";

import { Button, Space, Input } from "antd";
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

export default function Home() {
  return (
    <div className="homeBody">
      {/* TopBox */}
      <div className="homeTopBox">
      <Button  className="homeTopBoxMenu" shape="circle" size="large" icon={<PicCenterOutlined/>} />
        <h1 style={{ color: "#ffffff", flex: "1" }}>Logo&Name</h1>
        <Button  className="homeTopBoxSearch" shape="circle" size="large" icon={<SearchOutlined />} />
        <div className="homeTopBoxSearchDiv">
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: 250,
            }}
            addonAfter={<AudioOutlined />}
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
      <div className="homeMedBox">akash</div>
      {/* BottomBox */}
      <div className="homeBottomBox">
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
  );
}
