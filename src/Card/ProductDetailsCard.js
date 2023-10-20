import React, { useState, useEffect } from "react";
import "./ProductDetailsCard.css";
import {  Image, Button, Tooltip, Radio } from "antd";

import { HomeOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import i15PromaxGray from "../Image/i15PromaxGray.jpg";
import i15PromaxBlack from "../Image/i15PromaxBlack.jpeg";
import i15PromaxDarkBlue from "../Image/i15PromaxDarkBlue.jpeg";
import i15PromaxWhite from "../Image/i15PromaxWhite.jpeg";
import i15PromaxGold from "../Image/i15PromaxGold.jpeg";

export default function ProductDetailsCard() {
  const [page, setPage] = useState(1); // Color and Image
  const [page1, setPage1] = useState(1); // Region
  const [page2, setPage2] = useState(2); // Sim
  const [page3, setPage3] = useState(1); // Storage

  const [value, setValue] = useState(1);
  const [message, setMessage] = useState("");

  const handleIncrement = () => {
    if (value < 10) {
      setValue(value + 1);
      setMessage("");
    } else {
      setMessage("Please visit our shop");
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
      setMessage("");
    } else {
      setMessage("Select a Minimum 1 item");
    }
  };

  return (
    <div className="pDetailsCardBody">
      <div className="pDetailsCardBodyRight">
        <div className="pDetailsCardRightTopBox">
          <Link to="/" style={{ textDecoration: "none" }}>
            <HomeOutlined className="pDetailsCardRightTopBoxText" />
          </Link>
          <Link to="/Category/" style={{ textDecoration: "none" }}>
            <p className="pDetailsCardRightTopBoxText">/Category</p>
          </Link>
          <Link
            to="/Category/Product-Details"
            style={{ textDecoration: "none" }}
          >
            <p className="pDetailsCardRightTopBoxText">/Product-Details</p>
          </Link>
        </div>
        <div className="pDetailsCardRightDown">
          <div className="pDetailsCardRightDownPercenBox">
            <p style={{ marginTop: "-0px" }}>28% Off</p>
          </div>
          <div className="pDetailsCardRightMid">
            {page === 1 ? (
              <div>
                <Image width={300} height={300} src={i15PromaxGray} />
              </div>
            ) : page === 2 ? (
              <div>
                <Image width={300} height={300} src={i15PromaxBlack} />
              </div>
            ) : page === 3 ? (
              <div>
                <Image width={300} height={300} src={i15PromaxDarkBlue} />
              </div>
            ) : page === 4 ? (
              <div>
                <Image width={300} height={300} src={i15PromaxWhite} />
              </div>
            ) : page === 5 ? (
              <div>
                <Image width={300} height={300} src={i15PromaxGold} />
              </div>
            ) : (
              <h1> Error page</h1>
            )}

            <div className="pDetailsCardRightDown-2">
              <div
                style={{
                  display: "flex",
                  overflowX: "scroll",
                }}
              >
                <Button
                  className="pDetailsCardRightDown-2Button"
                  onClick={() => {
                    setPage(1);
                  }}
                  style={{
                    borderColor: page === 1 ? "#fb6565" : "#ffff",
                  }}
                >
                  <img style={{ height: "70px" }} src={i15PromaxGray} />
                </Button>

                <Button
                  className="pDetailsCardRightDown-2Button"
                  onClick={() => {
                    setPage(2);
                  }}
                  style={{
                    borderColor: page === 2 ? "#fb6565" : "#ffff",
                  }}
                >
                  <img style={{ height: "70px" }} src={i15PromaxBlack} />
                </Button>

                <Button
                  className="pDetailsCardRightDown-2Button"
                  onClick={() => {
                    setPage(3);
                  }}
                  style={{
                    borderColor: page === 3 ? "#fb6565" : "#ffff",
                  }}
                >
                  <img style={{ height: "70px" }} src={i15PromaxDarkBlue} />
                </Button>

                <Button
                  className="pDetailsCardRightDown-2Button"
                  onClick={() => {
                    setPage(4);
                  }}
                  style={{
                    borderColor: page === 4 ? "#fb6565" : "#ffff",
                  }}
                >
                  <img style={{ height: "70px" }} src={i15PromaxWhite} />
                </Button>

                <Button
                  className="pDetailsCardRightDown-2Button"
                  onClick={() => {
                    setPage(5);
                  }}
                  style={{
                    borderColor: page === 5 ? "#fb6565" : "#ffff",
                  }}
                >
                  <img style={{ height: "70px" }} src={i15PromaxGold} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pDetailsCardBodyLeft">
        <p style={{ opacity: ".6", marginLeft: "10px" }}> Brand Apple</p>
        <h2 style={{ marginTop: "10px", marginLeft: "10px" }}>
          iPhone 14 Pro Max
        </h2>
        <div className="pDCLeft-SmallBox">
          <p className="pDCLeft-SmallText">Cash Discount Price:</p>
          <p className="pDCLeft-SmallText-2">205000৳</p>
          <h4 className="pDCLeft-SmallText-H4">148000৳</h4>
        </div>
        <div style={{ display: "flex" }}>
          <div className="pDCLeft-SmallBox">
            <p className="pDCLeft-SmallText">Product Code: </p>
            <h4 className="pDCLeft-SmallText-H4">i15-06</h4>
          </div>
          <div className="pDCLeft-SmallBox">
            <p className="pDCLeft-SmallText">Status:</p>
            <h4 className="pDCLeft-SmallText-H4"> In Stock</h4>
          </div>
        </div>
        <h3 style={{ opacity: ".6", marginLeft: "10px", marginTop: "-0px" }}>
          1 Year Official Warranty
        </h3>
        {/* Color */}
        <div style={{ display: "flex" }}>
          <div className="pDCLeft-MdiBox-Div">
            <p>Color:</p>
          </div>
          <div className="pDCLeft-MdiBox-Div">
            <Tooltip placement="top" title="Black">
              <Button
                onClick={() => {
                  setPage(1);
                }}
                style={{
                  height: "35Px",
                  width: "35px",
                  borderRadius: "5px",
                  borderColor: page === 1 ? "#fb6565" : "#ffff",
                  boxShadow: page === 1 ? "#f50505 1px 0px 3px 2px" : "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "black",
                }}
              ></Button>
            </Tooltip>

            <Tooltip placement="top" title="Gray">
              <Button
                onClick={() => {
                  setPage(2);
                }}
                style={{
                  height: "35Px",
                  width: "35px",
                  borderRadius: "5px",
                  borderColor: page === 2 ? "#fb6565" : "#ffff",
                  boxShadow: page === 2 ? "#f50505 1px 0px 3px 2px" : "none",
                  marginLeft: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "gray",
                }}
              ></Button>
            </Tooltip>

            <Tooltip placement="top" title="DarkBlue">
              <Button
                onClick={() => {
                  setPage(3);
                }}
                style={{
                  height: "35Px",
                  width: "35px",
                  borderRadius: "5px",
                  borderColor: page === 3 ? "#fb6565" : "#ffff",
                  boxShadow: page === 3 ? "#f50505 1px 0px 3px 2px" : "none",
                  marginLeft: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "DarkBlue",
                }}
              ></Button>
            </Tooltip>

            <Tooltip placement="top" title="White">
              <Button
                onClick={() => {
                  setPage(4);
                }}
                style={{
                  height: "35Px",
                  width: "35px",
                  borderRadius: "5px",
                  borderColor: page === 4 ? "#fb6565" : "#ffff",
                  boxShadow: page === 4 ? "#f50505 1px 0px 3px 2px" : "none",
                  marginLeft: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              ></Button>
            </Tooltip>

            <Tooltip placement="top" title="Gold">
              <Button
                onClick={() => {
                  setPage(5);
                }}
                style={{
                  height: "35Px",
                  width: "35px",
                  borderRadius: "5px",
                  borderColor: page === 5 ? "#fb6565" : "#ffff",
                  boxShadow: page === 5 ? "#f50505 1px 0px 3px 2px" : "none",
                  marginLeft: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "goldenrod",
                }}
              ></Button>
            </Tooltip>
          </div>
        </div>
        {/* Region */}
        <div style={{ display: "flex" }}>
          <div className="pDCLeft-MdiBox-Div">
            <p>Region:</p>
          </div>
          <div className="pDCLeft-MdiBox-Div">
            <Radio.Group value={""} onChange={""}>
              <Radio.Button
                onClick={() => {
                  setPage1(1);
                }}
                style={{ color: page1 === 1 ? "#fb6565" : "black" }}
                value="large"
              >
                Regular
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  setPage1(2);
                }}
                style={{ color: page1 === 2 ? "#fb6565" : "black" }}
                value="middle"
              >
                CN
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  setPage1(3);
                }}
                style={{ color: page1 === 3 ? "#fb6565" : "black" }}
                value="small"
              >
                UAE
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  setPage1(4);
                }}
                style={{ color: page1 === 4 ? "#fb6565" : "black" }}
                value="small"
              >
                USA
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
        {/* Sim */}
        <div style={{ display: "flex" }}>
          <div className="pDCLeft-MdiBox-Div">
            <p>Sim:</p>
          </div>
          <div className="pDCLeft-MdiBox-Div">
            <Radio.Group value={""} onChange={""}>
              <Radio.Button
                onClick={() => {
                  setPage2(1);
                }}
                style={{ color: page2 === 1 ? "#fb6565" : "black" }}
                value="large"
              >
                Dual
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  setPage2(2);
                }}
                style={{ color: page2 === 2 ? "#fb6565" : "black" }}
                value="middle"
              >
                e-Sim
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
        {/* Storage */}
        <div style={{ display: "flex" }}>
          <div className="pDCLeft-MdiBox-Div">
            <p>Storage:</p>
          </div>
          <div className="pDCLeft-MdiBox-Div">
            <Radio.Group value={""} onChange={""}>
              <Radio.Button
                onClick={() => {
                  setPage3(1);
                }}
                style={{ color: page3 === 1 ? "#fb6565" : "black" }}
                value="large"
              >
                128GB
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  setPage3(2);
                }}
                style={{ color: page3 === 2 ? "#fb6565" : "black" }}
                value="middle"
              >
                256GB
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  setPage3(3);
                }}
                style={{ color: page3 === 3 ? "#fb6565" : "black" }}
                value="middle"
              >
                512GB
              </Radio.Button>
              <Radio.Button
                onClick={() => {
                  setPage3(4);
                }}
                style={{ color: page3 === 4 ? "#fb6565" : "black" }}
                value="middle"
              >
                1TB
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="pDCLeft-MdiBox-IndexButton-Div">
          <Button
              onClick={handleDecrement}
              className="pDCLeft-MdiBox-IndexButton"
              icon={<MinusOutlined />}
              danger
            />
            <div className="pDCLeft-MdiBox-IndexBiv">
              <h3> {value}</h3>
            </div>
            <Button
              onClick={handleIncrement}
              className="pDCLeft-MdiBox-IndexButton"
              icon={<PlusOutlined />}
              danger
            />
          </div>
          {/* Buy Now */}
          <div className="pDCLeft-MdiBox-LinkButton">
            <Link to="/Checkout">
              <Button type="primary" size="large" danger>
                Buy Now
              </Button>
            </Link>
          </div>
          {/* Add to Cart */}
          <div className="pDCLeft-MdiBox-LinkButton">
            <Link to="/My-Cart">
              <Button size="large" danger>
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>

        <div style={{ height: "50px", marginLeft: "10px" }}>
          <p style={{ color: "rgb(255, 86, 97)" }}>
            {message && <p>{message}</p>}
          </p>
        </div>
      </div>
    </div>
  );
}
