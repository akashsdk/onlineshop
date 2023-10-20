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
  const [page4, setPage4] = useState(1); // Description

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
      {/* Description */}
      <div>
        <Radio.Group size="large">
          <Radio.Button
            onClick={() => {
              setPage4(1);
            }}
            style={{
              color: page4 === 1 ? "white" : "black",
              backgroundColor: page4 === 1 ? "#fb6565" : "",
              borderColor:  "#fb6565" ,
            }}
          >
            Description
          </Radio.Button>
          <Radio.Button
            onClick={() => {
              setPage4(2);
            }}
            style={{
              color: page4 === 2 ? "white" : "black",
              backgroundColor: page4 === 2 ? "#fb6565" : "",
              borderColor:  "#fb6565" ,
            }}
          >
            Specification
          </Radio.Button>
          <Radio.Button
            onClick={() => {
              setPage4(3);
            }}
            style={{
              color: page4 === 3 ? "white" : "black",
              backgroundColor: page4 === 3 ? "#fb6565" : "",
              borderColor:  "#fb6565" ,
            }}
          >
            Video
          </Radio.Button>
          <Radio.Button
            onClick={() => {
              setPage4(4);
            }}
            style={{
              color: page4 === 4 ? "white" : "black",
              backgroundColor: page4 === 4 ? "#fb6565" : "",
              borderColor:  "#fb6565" ,
            }}
          >
            Warranty
          </Radio.Button>
        </Radio.Group>
        <div className="pDetailsCard-Line" />
        {/* Description */}
        {page4 === 1 ? (
          <div style={{ marginTop: "5px" }}>
            <img height={300} src={img1} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                Welcome to [Your Brand Name], where quality meets innovation. We
                take pride in offering a wide range of products designed to
                enhance your life and exceed your expectations. From
                cutting-edge technology to timeless classics, our diverse
                product lineup has something for everyone.
              </p>
              <h3 style={{ color: "#FE6D02" }}>Product Excellence:</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                At [Your Brand Name], we are committed to excellence in every
                product we create. Our unwavering dedication to quality and
                innovation sets us apart from the competition. Whether you're
                looking for [Product Category], [Product Category], or [Product
                Category], we've got you covered with the best.
              </p>
              <h3 style={{ color: "#FE6D02" }}>Features and Benefits:</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                High-Quality Materials:
                <br />
                Each product is crafted with precision and care, using only the
                finest materials. We prioritize durability, ensuring that your
                investment stands the test of time.
                <br />
                <br />
                Innovative Technology:
                <br />
                Our products are at the forefront of technological innovation.
                Enjoy the latest advancements that simplify your life and
                elevate your experiences.
                <br />
                <br />
                Stylish Design:
                <br />
                Beauty and functionality go hand in hand. Our products are not
                only practical but also aesthetically pleasing, enhancing your
                environment with their sleek and modern design.
                <br />
                <br />
                User-Friendly:
                <br />
                We understand that our customers value convenience. Our products
                are designed to be user-friendly, ensuring ease of use for all
                ages.
                <br />
                <br />
                Versatile:
                <br />
                From [Product Feature 1] to [Product Feature 2], our products
                offer versatility to cater to your diverse needs.
                <br />
                <br />
                Unparalleled Performance:
                <br />
                Expect nothing less than exceptional performance. Our products
                are built to perform at their best, no matter the task.
              </p>
              <h3 style={{ color: "#FE6D02" }}>Why Choose Us?</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                [Your Brand Name] has earned a reputation for excellence, and
                for good reason. Our commitment to customer satisfaction and
                product quality is unwavering. When you choose us, you're not
                just purchasing a product; you're investing in quality,
                reliability, and peace of mind.
              </p>
              <h3 style={{ color: "#FE6D02" }}>Customer Satisfaction:</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                Our customers are at the heart of everything we do. We take
                pride in delivering products that consistently exceed your
                expectations. Your satisfaction is our greatest reward.
              </p>
              <h3 style={{ color: "#FE6D02" }}>Endless Possibilities:</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                No matter your needs, [Your Brand Name] has a solution. Whether
                you're looking for a [Product Type], a [Product Type], or a
                [Product Type], we offer endless possibilities.
              </p>
              <h3 style={{ color: "#FE6D02" }}>Environmentally Friendly:</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                We're also committed to being environmentally responsible. Our
                products adhere to strict eco-friendly standards, ensuring that
                we minimize our impact on the planet.
              </p>
              <h3 style={{ color: "#FE6D02" }}>Explore Our Collection:</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                Discover our extensive range of products, including:
                <br />
                [Product 1 Name]
                <br />
                [Product 2 Name]
                <br />
                [Product 3 Name]
                <br />
                [Product 4 Name]
                <br />
                [Product 5 Name]
                <br />
                Choose the perfect product to complement your lifestyle, and
                experience the quality that sets us apart.
              </p>
              <h3 style={{ color: "#FE6D02" }}>Customer Reviews:</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                Don't just take our word for it. Hear what our satisfied
                customers have to say about their experiences with our products:
                <br />
                "Absolutely love my [Product Name]! It's made my life so much
                easier."
                <br />
                "The [Product Name] is a game-changer. I can't imagine life
                without it."
                <br />
                "Highly recommended! [Your Brand Name] never disappoints."
                <br />
              </p>
              <h3 style={{ color: "#FE6D02" }}>Order with Confidence:</h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                When you shop with us, you're not just purchasing a product;
                you're joining a community of individuals who value quality,
                innovation, and reliability. We stand behind every product we
                offer, and your satisfaction is guaranteed.
              </p>
              <h3 style={{ color: "#FE6D02" }}>
                Discover the [Your Brand Name] Difference:
              </h3>
              <p
                style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}
              >
                Join the thousands of satisfied customers who have experienced
                the [Your Brand Name] difference. We're more than just a brand;
                we're a commitment to quality and an assurance of satisfaction.
                <br />
                Explore our collection today and experience products designed
                with you in mind. Welcome to a world of quality, innovation, and
                excellence.
              </p>
            </div>
          </div>
        ) : // Specification
        page4 === 2 ? (
          <div>Specification</div>
        ) : // Video
        page4 === 3 ? (
          <div>Video</div>
        ) : page4 === 4 ? (
          // Warranty
          <div>Warranty</div>
        ) : (
          <h1> Error page</h1>
        )}
      </div>
    </div>
  );
}
