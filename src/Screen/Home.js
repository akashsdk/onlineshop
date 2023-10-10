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
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import Category from "../Card/Category";

import phone from '../Icon/tablet.png';
import macBook from '../Icon/computer.png'
import adapter from '../Icon/adapter.png'
import watch from '../Icon/smart-watch.png';
import airpods from '../Icon/airpods.png';
import camera from '../Icon/camera.png';
import headphone1 from '../Icon/headphone.png';
import headphone2 from '../Icon/headphones (1).png';
import headphone3 from '../Icon/headphones.png';
import keyboard from '../Icon/keyboard.png';
import cable from '../Icon/micro-usb.png';
import mouse from '../Icon/mouse.png';
import powerbank from '../Icon/power-bank.png';
import speaker from '../Icon/speaker.png';
import hub from '../Icon/usb-hub.png';
import wipe from '../Icon/wipe.png';
import wirelesscharging from '../Icon/wireless-charging.png';
import Offers from "../Components/Offers";



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
  "https://9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-wallpaper-2.webp",
  "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1668834860184-69ebc6d0756d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8MXx8Z29vZ2xlJTIwcGl4ZWwlMjA3JTIwcHJvfGVufDB8fHx8MTY5NTcwMDA5MXww%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dgoogle%252520pixel%2525207%252520pro%26blend%3D000000",
  "https://soyacincau.com/wp-content/uploads/2022/09/220915-gopro-hero-11-black-mini-hero-02.jpg",
  "https://i.ytimg.com/vi/p1hjrdPuMGo/maxresdefault.jpg",
  "https://ispace.ge/blog/wp-content/uploads/2022/01/BLG_FB_MRCH-6-1440x720.png",
  "https://blog-media.lifepal.co.id/wp-content/uploads/2018/12/03175525/shutterstock_676210375-1.jpg",
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
            <div className="homeMedContentSliderBox">
              <img
                className="homeMedContentSliderImg"
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
              ></img>
              <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                marginTop:'-60px',
                marginBottom:'60px',
              }}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "transparent",

                  }}
                  onClick={handlePrev}
                  shape="circle"
                  icon={<LeftOutlined />}
                />
                <h2 style={{color:'rgb(0, 255, 247)', marginLeft:'20px'}}>
                {currentImageIndex + 1} of {images.length}
                </h2>
                   
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    marginLeft:'20px'
                  }}
                  onClick={handleNext}
                  shape="circle"
                  icon={<RightOutlined />}
                />
              </div>
            </div>
          </div>
           {/* Offers */}
          <div>
          <p className="homeMedContentCategoryHeadText">Best for Order 🔥</p>
            <p className="homeMedContentCategoryText">Get your desired product from featured category</p>
            <Offers />
          </div>
          {/* Category */}
          <div>
            <p className="homeMedContentCategoryHeadText">FEATURED CATEGORIES</p>
            <p className="homeMedContentCategoryText">Get your desired product from featured category</p>
            <div>
              <Category categoryImg={phone} categoryFastText='Phones & ' categoryScendText='Tablets'/>
              <Category categoryImg={macBook} categoryFastText='MacBook ' categoryScendText='Computer'/>
              <Category categoryImg={adapter} categoryFastText='Power & ' categoryScendText='Adapter'/>
              <Category categoryImg={watch} categoryFastText='Smart ' categoryScendText='Watch'/>
              <Category categoryImg={airpods} categoryFastText='Airpods ' categoryScendText='Headphones'/>
              <Category categoryImg={speaker} categoryFastText='Sound ' categoryScendText='Speakers'/>
              <Category categoryImg={headphone1} categoryFastText='Wireless ' categoryScendText='Headphones'/>
              <Category categoryImg={headphone2} categoryFastText='Wired ' categoryScendText='Headphones'/>
              <Category categoryImg={headphone3} categoryFastText='Overhead' categoryScendText='Headphones'/>
              <Category categoryImg={cable} categoryFastText='Cable &' categoryScendText='Interconnects'/>
              <Category categoryImg={powerbank} categoryFastText='Power' categoryScendText='Bank'/>
              <Category categoryImg={wirelesscharging} categoryFastText='Wireless' categoryScendText='Charger'/>
              <Category categoryImg={hub} categoryFastText='Hubs & ' categoryScendText='Docks'/>
              <Category categoryImg={keyboard} categoryFastText='Keyboard' categoryScendText='Accessories'/>
              <Category categoryImg={mouse} categoryFastText='Mouse' categoryScendText='Accessories'/>
              <Category categoryImg={wipe} categoryFastText='Cover &' categoryScendText='Glass'/>
              <Category categoryImg={camera} categoryFastText='Camera' categoryScendText='Accessories'/>
            </div>
            <div style={{height:'300px'}}/>
          </div>
          
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
