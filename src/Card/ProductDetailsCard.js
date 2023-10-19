import React, { useState, useEffect } from "react";
import "./ProductDetailsCard.css";
import { Carousel, Image, Button } from "antd";

import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import i15PromaxGray from "../Image/i15PromaxGray.jpg";
import i15PromaxBlack from "../Image/i15PromaxBlack.jpeg";
import i15PromaxDarkBlue from "../Image/i15PromaxDarkBlue.jpeg";
import i15PromaxWhite from "../Image/i15PromaxWhite.jpeg";
import i15PromaxGold from "../Image/i15PromaxGold.jpeg";

export default function ProductDetailsCard() {
  const [page, setPage] = useState(1);

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
              <div><Image width={300} height={300} src={i15PromaxGray} /></div>
            ) : page === 2 ? (
              <div><Image width={300} height={300} src={i15PromaxBlack} /></div>
            ) : page === 3 ? (
                <div><Image width={300} height={300} src={i15PromaxDarkBlue} /></div>
              ) : page === 4 ? (
                <div><Image width={300} height={300} src={i15PromaxWhite} /></div>
              ) : page === 5 ? (
                <div><Image width={300} height={300} src={i15PromaxGold} /></div>
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
      <div className="pDetailsCardBodyLeft">Left </div>
    </div>
  );
}
