import React, { useState, Component, useEffect } from "react";
import "./Style/Home.css";

import { Button, Space, Input, Menu } from "antd";
import {
  GiftOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  MessageOutlined,
  UserOutlined,
  AudioOutlined,
  PicCenterOutlined,
  SearchOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

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

const images = [
  "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  "https://thumbs.dreamstime.com/b/lone-tree-meadow-sunriseidyllic-fabulous-landscapes-39659821.jpg",
  "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
  "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",

];
export default function Home() {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle next slide
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 1 second
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homeBody">
      {/* TopBox */}
      <div className="homeTopBox">
        <Button
          className="homeTopBoxMenu"
          shape="circle"
          size="large"
          icon={<PicCenterOutlined />}
        />
        <h1 style={{ color: "#ffffff", flex: "1" }}>Logo&Name</h1>
        <Button
          className="homeTopBoxSearch"
          shape="circle"
          size="large"
          icon={<SearchOutlined />}
        />
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
      <div className="homeMedBox">
        {/* homeMedTopBox */}
        <div className="homeMedTopBox">
          <Button type="text" className="homeMedTopButton0" block>
            Phones &<br />
            Tablets
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Power <br></br>
            Adapter
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            <p>MacBook</p>
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Smart <br /> Watch
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Airpods
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            <Menu
              mode="horizontal"
              items={items}
              className="homeMedTopButtonMenu"
            />
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Speakers
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Cable & <br /> Interconnects
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Power Bank
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Wireless <br /> Charger
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Hubs & <br /> Docks
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Keyboard
          </Button>
          <Button type="text" className="homeMedTopButton" block>
            Cover & <br /> Glass
          </Button>
        </div>
        <div className="homeMedContent">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Image Slider</h1>
            <div className="slider-container">
              <button onClick={handlePrev}>Previous</button>
              <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
              />
              <button onClick={handleNext}>Next</button>
            </div>
            <p>Image {currentImageIndex + 1} of {images.length}</p>
          </div>

          <h1>bbbb</h1>
          <h1>bbbb</h1>
          <h1>bbbb</h1>
          <h1>bbbb</h1>
          <h1>bbbb</h1>
          <h1>bbbb</h1>
          <h1>bbbb</h1>
          <h1>bbbb</h1>
          <h1>bbbb</h1>
          <h1>bbbb</h1>
        </div>
      </div>
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
