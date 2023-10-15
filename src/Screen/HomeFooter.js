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
import { Link } from "react-router-dom";

export default function HomeFooter() {
  return (
    <div className="homeBottomBox">
      <Link to="/My-Offers" style={{ flex: "1" }}>
        <Button type="link" block className="homeBottomBoxButton1">
          <GiftOutlined className="homeBottomBoxButtonIcon" />
          <p className="homeBottomBoxButtonText">Offers</p>
        </Button>
      </Link>

      <Link to="/My-Cart" style={{ flex: "1" }}>
        <Button type="link" block className="homeBottomBoxButton2">
          <ShoppingCartOutlined className="homeBottomBoxButtonIcon" />
          <p className="homeBottomBoxButtonText">Cart</p>
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
  );
}
