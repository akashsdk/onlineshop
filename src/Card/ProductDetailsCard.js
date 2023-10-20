import React, { useState, useEffect } from "react";
import "./ProductDetailsCard.css";
import { Image, Button, Tooltip, Radio } from "antd";

import { HomeOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Offers from "../Components/Offers";

export default function ProductDetailsCard({
  brandName,
  name,
  rating,
  percentage,
  oldPrice,
  warranty,
  sells,
  color1,
  color2,
  color3,
  color4,
  color5,
  img1,
  img2,
  img3,
  img4,
  img5,
  region,
  sim,
  storage,
  details,
}) {
  const [page, setPage] = useState(1); // Color and Image
  const [page1, setPage1] = useState(0); // Region
  const [page2, setPage2] = useState(0); // Sim
  const [page3, setPage3] = useState(0); // Storage

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

  // Review or Stars
  const [result, setResult] = useState("");

  useEffect(() => {
    if (percentage === "" || oldPrice === "") {
      setResult("");
      return;
    }

    const percent = parseFloat(percentage);
    const num = parseFloat(oldPrice);

    if (isNaN(percent) || isNaN(num)) {
      setResult("");
      return;
    }

    const calculatedResult = Math.round(num - (percent / 100) * num);
    setResult(calculatedResult);
  }, [percentage, oldPrice]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : "empty"}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <div className="pDetailsCardBody">
        {/* Right-Box */}
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
              <p style={{ marginTop: "-0px" }}>{percentage}% Off</p>
            </div>
            <div className="pDetailsCardRightMid">
              {page === 1 ? (
                <div>
                  <Image width={300} height={300} src={img1} />
                </div>
              ) : page === 2 ? (
                <div>
                  <Image width={300} height={300} src={img2} />
                </div>
              ) : page === 3 ? (
                <div>
                  <Image width={300} height={300} src={img3} />
                </div>
              ) : page === 4 ? (
                <div>
                  <Image width={300} height={300} src={img4} />
                </div>
              ) : page === 5 ? (
                <div>
                  <Image width={300} height={300} src={img5} />
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
                    <img style={{ height: "70px" }} src={img1} />
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
                    <img style={{ height: "70px" }} src={img2} />
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
                    <img style={{ height: "70px" }} src={img3} />
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
                    <img style={{ height: "70px" }} src={img4} />
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
                    <img style={{ height: "70px" }} src={img5} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="star-rating">{renderStars(rating)}</div>
            <p style={{ opacity: ".6", fontSize: "13px", marginTop: "4px" }}>
              Sell's ({sells})
            </p>
          </div>
        </div>
        {/* Left-Box */}
        <div className="pDetailsCardBodyLeft">
          <p style={{ opacity: ".6", marginLeft: "10px" }}>
            {" "}
            Brand {brandName}
          </p>
          <h2 style={{ marginTop: "10px", marginLeft: "10px" }}>{name}</h2>
          <div className="pDCLeft-SmallBox">
            <p className="pDCLeft-SmallText">Cash Discount Price:</p>
            <p className="pDCLeft-SmallText-2">{oldPrice}৳</p>
            <h4 className="pDCLeft-SmallText-H4">
              {result !== "" ? <p> {result}৳</p> : <p>Out of Stock</p>}
            </h4>
          </div>
          <div style={{ display: "flex" }}>
            <div className="pDCLeft-SmallBox">
              <p className="pDCLeft-SmallText">Product Code: </p>
              <h4 className="pDCLeft-SmallText-H4">i15-06</h4>
            </div>
            <div className="pDCLeft-SmallBox">
              <p className="pDCLeft-SmallText">Status:</p>
              {result !== "" ? (
                <h4 className="pDCLeft-SmallText-H4"> In Stock</h4>
              ) : (
                <h4 className="pDCLeft-SmallText-H4">Out of Stock</h4>
              )}
            </div>
          </div>

          <h3 style={{ opacity: ".6", marginLeft: "10px", marginTop: "-0px" }}>
            {warranty !== "Yes" ? (
              <p> No Warranty Available </p>
            ) : (
              <p>1 Year Official Warranty</p>
            )}
          </h3>
          {/* Color */}
          <div
            style={{
              display:
                color1 || color2 || color3 || color4 || color5 !== ""
                  ? "flex"
                  : "none",
            }}
          >
            <div className="pDCLeft-MdiBox-Div">
              <p>Color:</p>
            </div>
            <div className="pDCLeft-MdiBox-Div">
              <div
                style={{
                  height: "38Px",
                  width: "38px",
                  borderRadius: "5px",
                  display: color1 !== "" ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:
                    page === 1
                      ? "#f50505 1px 0px 3px 2px"
                      : "rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
              >
                <Tooltip placement="top" title={color1}>
                  <Button
                    onClick={() => {
                      setPage(1);
                    }}
                    style={{
                      height: "30Px",
                      width: "30px",
                      borderRadius: "5px",
                      borderColor: color1,
                      backgroundColor: color1,
                    }}
                  ></Button>
                </Tooltip>
              </div>

              <div
                style={{
                  height: "38Px",
                  width: "38px",
                  borderRadius: "5px",
                  display: color2 !== "" ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:
                    page === 2
                      ? "#f50505 1px 0px 3px 2px"
                      : "rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  marginLeft: "5px",
                }}
              >
                <Tooltip placement="top" title={color2}>
                  <Button
                    onClick={() => {
                      setPage(2);
                    }}
                    style={{
                      height: "30Px",
                      width: "30px",
                      borderRadius: "5px",
                      borderColor: color2,
                      backgroundColor: color2,
                    }}
                  ></Button>
                </Tooltip>
              </div>

              <div
                style={{
                  height: "38Px",
                  width: "38px",
                  borderRadius: "5px",
                  display: color3 !== "" ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:
                    page === 3
                      ? "#f50505 1px 0px 3px 2px"
                      : "rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  marginLeft: "5px",
                }}
              >
                <Tooltip placement="top" title={color3}>
                  <Button
                    onClick={() => {
                      setPage(3);
                    }}
                    style={{
                      height: "30Px",
                      width: "30px",
                      borderRadius: "5px",
                      borderColor: color3,
                      backgroundColor: color3,
                    }}
                  ></Button>
                </Tooltip>
              </div>

              <div
                style={{
                  height: "38Px",
                  width: "38px",
                  borderRadius: "5px",
                  display: color4 !== "" ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:
                    page === 4
                      ? "#f50505 1px 0px 3px 2px"
                      : "rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  marginLeft: "5px",
                }}
              >
                <Tooltip placement="top" title={color4}>
                  <Button
                    onClick={() => {
                      setPage(4);
                    }}
                    style={{
                      height: "30Px",
                      width: "30px",
                      borderRadius: "5px",
                      borderColor: color4,
                      backgroundColor: color4,
                    }}
                  ></Button>
                </Tooltip>
              </div>

              <div
                style={{
                  height: "38Px",
                  width: "38px",
                  borderRadius: "5px",
                  display: color5 !== "" ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:
                    page === 5
                      ? "#f50505 1px 0px 3px 2px"
                      : "rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  marginLeft: "5px",
                }}
              >
                <Tooltip placement="top" title={color5}>
                  <Button
                    onClick={() => {
                      setPage(5);
                    }}
                    style={{
                      height: "30Px",
                      width: "30px",
                      borderRadius: "5px",
                      borderColor: color5,
                      backgroundColor: color5,
                    }}
                  ></Button>
                </Tooltip>
              </div>
            </div>
          </div>
          {/* Region */}
          <div
            style={{
              display: region !== "" ? "flex" : "none",
            }}
          >
            <div className="pDCLeft-MdiBox-Div">
              <p>Region:</p>
            </div>
            <div className="pDCLeft-MdiBox-Div">
              {region !== "" ? (
                <Radio.Group value={""} onChange={""}>
                  {region.map((region, index) => (
                    <Radio.Button
                      onClick={() => {
                        setPage1(index);
                      }}
                      style={{ color: page1 === index ? "#fb6565" : "black" }}
                      value="large"
                    >
                      {region}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              ) : (
                <div> </div>
              )}
            </div>
          </div>
          {/* Sim */}
          <div
            style={{
              display: sim !== "" ? "flex" : "none",
            }}
          >
            <div className="pDCLeft-MdiBox-Div">
              <p>Sim:</p>
            </div>
            <div className="pDCLeft-MdiBox-Div">
              {sim !== "" ? (
                <Radio.Group value={""} onChange={""}>
                  {sim.map((sim, index) => (
                    <Radio.Button
                      onClick={() => {
                        setPage2(index);
                      }}
                      style={{ color: page2 === index ? "#fb6565" : "black" }}
                      value="large"
                    >
                      {sim}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              ) : (
                <div> </div>
              )}
            </div>
          </div>

          {/* Storage */}

          <div
            style={{
              display: storage !== "" ? "flex" : "none",
            }}
          >
            <div className="pDCLeft-MdiBox-Div">
              <p>Storage:</p>
            </div>
            <div className="pDCLeft-MdiBox-Div">
              {storage !== "" ? (
                <Radio.Group value={""} onChange={""}>
                  {storage.map((storage, index) => (
                    <Radio.Button
                      onClick={() => {
                        setPage3(index);
                      }}
                      style={{ color: page3 === index ? "#fb6565" : "black" }}
                      value="large"
                    >
                      {storage}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              ) : (
                <div> </div>
              )}
            </div>
          </div>

          {/* Button */}
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
      {/* Related Products */}
      <div style={{ width: "100%" }}>
        <h2 style={{ opacity: ".6" }}>Related Products</h2>
        <Offers />
      </div>
    </div>
  );
}
