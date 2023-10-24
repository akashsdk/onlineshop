import React, { useState } from "react";
import "./Footer.css";

import { Button, Drawer, Space, Input, message } from "antd";

import phoneLogo from "../Icon/phone-call.png";
import location from "../Icon/google-maps.png";

import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
  UserOutlined,
  MailOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [placement] = useState("bottom");

  const onClose = () => {
    setOpen(false);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Send to Success",
    });
  };

  return (
    <div>
      {contextHolder}
      {/* Box 1 (Up to 1000px) */}
      <div className="box box1">
        <div className="footerBox">
          <p className="footerBoxText">SUPPORT</p>
          <div style={{ margin: "20px" }}>
            <Button type="text" block className="footerBoxButton">
              <img height={30} src={phoneLogo} />
              <p className="footerNumberText"> 017** ******</p>
            </Button>
            <Button type="text" block className="footerBoxButton">
              <img height={30} src={location} />
              <p className="footerNumberText">Map View</p>
            </Button>
          </div>
          <div>
            <p style={{ color: "#ffff" }}>
              Shop & Display Center Address: <br /> <br />
              , Dhaka-1205. Bangladesh <br />
              (Everyday 10am-11pm) <br />
              Mail us: <br />
            </p>
          </div>
        </div>
        <div className="footerBox">
          <p className="footerBoxText">ABOUT US</p>
          <div className="footerBox2Div">
            <Link to="/AboutUs">
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> About Us </p>
              </Button>
            </Link>

            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Careers </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Blog </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Join Our Community </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText">
                {" "}
                Order Tracking Delivery{" "}
              </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Terms ﹠ Condition </p>
            </Button>
          </div>
        </div>
        <div className="footerBox">
          <p className="footerBoxText">HELP</p>
          <div className="footerBox2Div">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> EMI Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Privacy Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Refund Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Warranty Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Gift Voucher</p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Complain / Advice </p>
            </Button>
          </div>
        </div>
        <div className="footerBox">
          <p className="footerBoxText">QUICK LINKS</p>
          <Link to="/Account">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Account </p>
            </Button>
          </Link>

          <Link to="/Contacts">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Contact </p>
            </Button>
          </Link>

          <Link to="/Pre-Order">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Pre-Order </p>
            </Button>
          </Link>

          <Link to="/My-Cart">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Cart(0) </p>
            </Button>
          </Link>

          <Link to="/My-Offers">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Offers</p>
            </Button>
          </Link>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Button
              style={{
                backgroundColor: "black",
                color: "#3b5998",
                borderColor: "aqua",
              }}
              icon={<FacebookOutlined />}
              href=""
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "#d62976",
                borderColor: "aqua",
                marginLeft: "10px",
              }}
              icon={<InstagramOutlined />}
              href=""
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "#CD201F",
                borderColor: "aqua",
                marginLeft: "10px",
              }}
              icon={<YoutubeOutlined />}
              href=""
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "#075e54",
                borderColor: "aqua",
                marginLeft: "10px",
              }}
              icon={<WhatsAppOutlined />}
              href=""
            />
          </div>
        </div>
      </div>
      {/* Box 2 (1000px to 600px) */}
      <div className="box box2">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="footerBox">
            <p className="footerBoxText">SUPPORT</p>
            <div style={{ margin: "20px" }}>
              <Button type="text" block className="footerBoxButton">
                <img height={30} src={phoneLogo} />
                <p className="footerNumberText"> 017** ******</p>
              </Button>
              <Button type="text" block className="footerBoxButton">
                <img height={30} src={location} />
                <p className="footerNumberText">Map View</p>
              </Button>
            </div>
            <div>
              <p style={{ color: "#ffff" }}>
                Shop & Display Center Address: <br /> <br />
                , Dhaka-1205. Bangladesh <br />
                (Everyday 10am-11pm) <br />
                Mail us: <br />
              </p>
            </div>
          </div>
          <div className="footerBox">
            <p className="footerBoxText">ABOUT US</p>
            <div className="footerBox2Div">
              <Link to="/AboutUs">
                <Button className="footerBox2DivButton" type="text" block>
                  <p className="footerBox2DivButtonText"> About Us </p>
                </Button>
              </Link>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Careers </p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Blog </p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Join Our Community </p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText">
                  {" "}
                  Order Tracking Delivery{" "}
                </p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Terms ﹠ Condition </p>
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="footerBox">
            <p className="footerBoxText">HELP</p>
            <div className="footerBox2Div">
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> EMI Policy </p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Privacy Policy </p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Refund Policy </p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Warranty Policy </p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Gift Voucher</p>
              </Button>
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Complain / Advice </p>
              </Button>
            </div>
          </div>
          <div className="footerBox">
            <p className="footerBoxText">QUICK LINKS</p>
            <Link to="/Account">
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Account </p>
              </Button>
            </Link>

            <Link to="/Contacts">
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Contact </p>
              </Button>
            </Link>

            <Link to="/Pre-Order">
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Pre-Order </p>
              </Button>
            </Link>

            <Link to="/My-Cart">
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Cart(0) </p>
              </Button>
            </Link>

            <Link to="/My-Offers">
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> Offers</p>
              </Button>
            </Link>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "#3b5998",
                  borderColor: "aqua",
                }}
                icon={<FacebookOutlined />}
                href=""
              />
              <Button
                style={{
                  backgroundColor: "black",
                  color: "#d62976",
                  borderColor: "aqua",
                  marginLeft: "10px",
                }}
                icon={<InstagramOutlined />}
                href=""
              />
              <Button
                style={{
                  backgroundColor: "black",
                  color: "#CD201F",
                  borderColor: "aqua",
                  marginLeft: "10px",
                }}
                icon={<YoutubeOutlined />}
                href=""
              />
              <Button
                style={{
                  backgroundColor: "black",
                  color: "#075e54",
                  borderColor: "aqua",
                  marginLeft: "10px",
                }}
                icon={<WhatsAppOutlined />}
                href=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Box 3 (Below 600px) */}
      <div className="box box3">
        <div className="footerBox">
          <p className="footerBoxText">SUPPORT</p>
          <div style={{ margin: "20px" }}>
            <Button type="text" block className="footerBoxButton">
              <img height={30} src={phoneLogo} />
              <p className="footerNumberText"> 017** ******</p>
            </Button>
            <Button type="text" block className="footerBoxButton">
              <img height={30} src={location} />
              <p className="footerNumberText">Map View</p>
            </Button>
          </div>
          <div>
            <p style={{ color: "#ffff" }}>
              Shop & Display Center Address: <br /> <br />
              , Dhaka-1205. Bangladesh <br />
              (Everyday 10am-11pm) <br />
              Mail us: <br />
            </p>
          </div>
        </div>
        <div className="footerBox">
          <p className="footerBoxText">ABOUT US</p>
          <div className="footerBox2Div">
            <Link to="/AboutUs">
              <Button className="footerBox2DivButton" type="text" block>
                <p className="footerBox2DivButtonText"> About Us </p>
              </Button>
            </Link>

            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Careers </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Blog </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Join Our Community </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText">
                {" "}
                Order Tracking Delivery{" "}
              </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Terms ﹠ Condition </p>
            </Button>
          </div>
        </div>
        <div className="footerBox">
          <p className="footerBoxText">HELP</p>
          <div className="footerBox2Div">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> EMI Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Privacy Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Refund Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Warranty Policy </p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Gift Voucher</p>
            </Button>
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Complain / Advice </p>
            </Button>
          </div>
        </div>
        <div className="footerBox">
          <p className="footerBoxText">QUICK LINKS</p>
          <Link to="/Account">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Account </p>
            </Button>
          </Link>

          <Link to="/Contacts">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Contact </p>
            </Button>
          </Link>

          <Link to="/Pre-Order">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Pre-Order </p>
            </Button>
          </Link>

          <Link to="/My-Cart">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Cart(0) </p>
            </Button>
          </Link>

          <Link to="/My-Offers">
            <Button className="footerBox2DivButton" type="text" block>
              <p className="footerBox2DivButtonText"> Offers</p>
            </Button>
          </Link>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Button
              style={{
                backgroundColor: "black",
                color: "#3b5998",
                borderColor: "aqua",
              }}
              icon={<FacebookOutlined />}
              href=""
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "#d62976",
                borderColor: "aqua",
                marginLeft: "10px",
              }}
              icon={<InstagramOutlined />}
              href=""
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "#CD201F",
                borderColor: "aqua",
                marginLeft: "10px",
              }}
              icon={<YoutubeOutlined />}
              href=""
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "#075e54",
                borderColor: "aqua",
                marginLeft: "10px",
              }}
              icon={<WhatsAppOutlined />}
              href=""
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Tasnim Shahriar Akash | All rights
            reserved{" "}
            <Button
              danger
              onClick={() => {
                setOpen(true);
              }}
              style={{
                color: "#fb6565",
                border: "none",
                backgroundColor: "transparent",
                marginTop: "-35px",
                fontSize: "18px",
                marginLeft: "-10px",
              }}
            >
              Feedback
            </Button>
          </p>
        </div>
      </footer>
      
      {/* Drawer */}
      <Drawer
        title="Feedback Form, We would love to hear your feedback on our website."
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose} style={{ borderColor: "#fb6565" }}>
              Cancel
            </Button>
          </Space>
        }
      >
        <div className="feedbackOpenBox">
          <br />
          <Input placeholder="Name" prefix={<UserOutlined />} />
          <br />
          <br />
          <Input placeholder="Email" prefix={<MailOutlined />} />
          <br />
          <br />
          <Input placeholder="Feedback" prefix={<MessageOutlined />} />
          <br />
          <br />
          <Button onClick={success} style={{ borderColor: "aqua" }}>
            Send
          </Button>
          <br />
        </div>
      </Drawer>
    </div>
  );
}
