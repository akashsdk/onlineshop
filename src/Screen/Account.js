import React, { useState } from "react";
import "./Style/Contacts.css";
import "./Style/PreOrder.css";
import Footer from "../Components/Footer";
import Login from "../AccountPage/Login";
import ForgetPassword from "../AccountPage/ForgetPassword";
import Register from "../AccountPage/Register";
import { Button, Input, Tooltip } from "antd";
import { LogoutOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";

export default function Account() {
  const [page, setPage] = useState(1);
  return (
    <div className="overflowBox">
      <div className="accountBody">
        <h2 style={{marginTop:'50px'}}>Account Information</h2>
        <div>
          {/* Login */}
          {page === 1 ? (
            <div className="preOrderBox">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  onClick={() => {
                    setPage(2);
                  }}
                  size={"large"}
                  type={page === 2 ? "primary" : "dashed"}
                  danger
                >
                  Register
                </Button>
                <div style={{ flex: "1" }}>
                </div>
                <Button
                  onClick={() => {
                    setPage(1);
                  }}
                  size={"large"}
                  type={page === 1 ? "primary" : "dashed"}
                  danger
                >
                  Login
                </Button>
              </div>
              <p className="preOrderBoxText">Email *</p>
              <Input size="large" placeholder="Enter Email" />
              <p className="preOrderBoxText">Password *</p>
              <Input size="large" placeholder="Enter Password" />
              <div
                style={{ display: "flex", width: "100%", marginTop: "30px" }}
              >
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    onClick={() => {
                      setPage(3);
                    }}
                    danger
                    type="text"
                  >
                    Forget Password
                  </Button>
                </div>
                <div
                  style={{
                    width: "48%",
                    marginLeft: "4%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    onClick={() => {
                      setPage(4);
                    }}
                    size={"large"}
                    type="primary"
                  >
                    LogIn
                  </Button>
                </div>
              </div>
              <div style={{ height: "50px" }} />
            </div>
          ) : // Register
          page === 2 ? (
            <div className="preOrderBox">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  onClick={() => {
                    setPage(2);
                  }}
                  size={"large"}
                  type={page === 2 ? "primary" : "dashed"}
                  danger
                >
                  Register
                </Button>
                <div style={{ flex: "1" }}>
                </div>
                <Button
                  onClick={() => {
                    setPage(1);
                  }}
                  size={"large"}
                  type={page === 1 ? "primary" : "dashed"}
                  danger
                >
                  Login
                </Button>
              </div>
              <p className="preOrderBoxText">Full Name *</p>
              <Input size="large" placeholder="Enter Full Name" />
              <p className="preOrderBoxText">Email *</p>
              <Input size="large" placeholder="Enter Email" />
              <p className="preOrderBoxText">Phone *</p>
              <Input size="large" placeholder="Enter Phone" />
              <div
                style={{ display: "flex", width: "100%", marginTop: "30px" }}
              >
                <div
                  style={{
                    width: "48%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <p className="preOrderBoxText">Password *</p>
                  <Input size="large" placeholder="Enter Phone No" />
                </div>
                <div
                  style={{
                    width: "48%",
                    marginLeft: "4%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <p className="preOrderBoxText">Confirm Password *</p>
                  <Input size="large" placeholder="Enter Email Id" />
                </div>
              </div>
              <p className="preOrderBoxText">Address *</p>
              <Input size="large" placeholder="Enter Address" />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <Button
                  onClick={() => {
                    setPage(1);
                  }}
                  size={"large"}
                  type="primary"
                  danger
                >
                  Submit
                </Button>
              </div>
            </div>
          ) : page === 3 ? (
            <div className="preOrderBox">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  onClick={() => {
                    setPage(2);
                  }}
                  size={"large"}
                  type={page === 2 ? "primary" : "dashed"}
                  danger
                >
                  Register
                </Button>
                <div style={{ flex: "1" }}>
                </div>
                <Button
                  onClick={() => {
                    setPage(1);
                  }}
                  size={"large"}
                  type={page === 1 ? "primary" : "dashed"}
                  danger
                >
                  Login
                </Button>
              </div>
              <p className="preOrderBoxText">Email *</p>
              <Input size="large" placeholder="Enter Email" />
              <div
                style={{ display: "flex", width: "100%", marginTop: "30px" }}
              >
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                ></div>
                <div
                  style={{
                    width: "48%",
                    marginLeft: "4%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    onClick={() => {
                      setPage(3.1);
                    }}
                    size={"large"}
                  >
                    Send
                  </Button>
                </div>
              </div>
              <div style={{ height: "50px" }} />
            </div>
          ) : page === 3.1 ? (
            <div className="preOrderBox">
              <p className="preOrderBoxText">OTP *</p>
              <Input size="large" placeholder="Enter OTP" />
              <div
                style={{ display: "flex", width: "100%", marginTop: "30px" }}
              >
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                ></div>
                <div
                  style={{
                    width: "48%",
                    marginLeft: "4%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    onClick={() => {
                      setPage(3.2);
                    }}
                    size={"large"}
                  >
                    Send
                  </Button>
                </div>
              </div>
              <div style={{ height: "50px" }} />
            </div>
          ) : page === 3.2 ? (
            <div className="preOrderBox">
              <div style={{ display: "flex", width: "100%" }}>
                <div
                  style={{
                    width: "48%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <p className="preOrderBoxText">New Password*</p>
                  <Input size="large" placeholder="Enter Password" />
                </div>
                <div
                  style={{
                    width: "48%",
                    marginLeft: "4%",
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <p className="preOrderBoxText">Confirm Password*</p>
                  <Input size="large" placeholder="Enter Password" />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <Button
                  onClick={() => {
                    setPage(1);
                  }}
                  size={"large"}
                  type="primary"
                  danger
                >
                  Submit
                </Button>
              </div>
              <div style={{ height: "50px" }} />
            </div>
          ) : page === 4 ? (
            <div className="preOrderBox">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                  marginLeft: "15%",
                }}
              >
                <Tooltip style={{ flex: "1" }} title="LogOut">
                  <Button
                    onClick={() => {
                      setPage(1);
                    }}
                    shape="circle"
                    icon={<LogoutOutlined />}
                    danger
                  />
                </Tooltip>
                <div style={{ flex: "1" }}>
                  <p className="preOrderBoxText">Profile</p>
                </div>
                <Tooltip style={{ flex: "1" }} title="Edit Profile">
                  <Button
                    onClick={() => {
                      setPage(4.1);
                    }}
                    shape="circle"
                    icon={<EditOutlined />}
                  />
                </Tooltip>
              </div>
              <p className="preOrderBoxText">Name: Mr ABC</p>
              <p className="preOrderBoxText">Email: abc@gmail.com</p>
              <p className="preOrderBoxText">Phone: 01500-000000</p>
              <p className="preOrderBoxText">
                Address: Kalabagan, Dhanmondi 32, Dhaka 1236
              </p>
              <div style={{ height: "50px" }} />
            </div>
          ) : page === 4.1 ? (
            <div className="preOrderBox">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                  marginLeft: "15%",
                }}
              >
                <Tooltip style={{ flex: "1" }} title="LogOut">
                  <Button
                    onClick={() => {
                      setPage(1);
                    }}
                    shape="circle"
                    icon={<LogoutOutlined />}
                    danger
                  />
                </Tooltip>
                <div style={{ flex: "1" }}>
                  <p className="preOrderBoxText">Profile</p>
                </div>
                <Tooltip style={{ flex: "1" }} title="Profile">
                  <Button
                    onClick={() => {
                      setPage(4);
                    }}
                    shape="circle"
                    icon={<UserOutlined />}
                  />
                </Tooltip>
              </div>
              <p className="preOrderBoxText">Full Name </p>
              <Input size="large" placeholder="Name: Mr ABC" />
              <p className="preOrderBoxText">Email </p>
              <Input size="large" placeholder="Email: abc@gmail.com" />
              <p className="preOrderBoxText">Phone </p>
              <Input size="large" placeholder="Phone: 01500-000000" />

              <p className="preOrderBoxText">Address </p>
              <Input
                size="large"
                placeholder="Address: Kalabagan, Dhanmondi 32, Dhaka 1236"
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <Button
                  onClick={() => {
                    setPage(4);
                  }}
                  size={"large"}
                  type="primary"
                  danger
                >
                  Update
                </Button>
              </div>
              <div style={{ height: "50px" }} />
            </div>
          ) : (
            <h1> Error page</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
