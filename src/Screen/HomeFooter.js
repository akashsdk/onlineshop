import React from "react";
import "./Style/Home.css";

import { Button } from "antd";
import {
  GiftOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function HomeFooter() {
  return (
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
  );
}
