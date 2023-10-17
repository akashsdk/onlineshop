import React, { useState } from "react";
import "./Style/PreOrder.css";
import Footer from "../Components/Footer";
import Category from "../Card/Category";
import { Link } from "react-router-dom";
import { Input, Modal, Upload, Button } from "antd";

import phone from "../Icon/tablet.png";
import macBook from "../Icon/computer.png";
import adapter from "../Icon/adapter.png";
import watch from "../Icon/smart-watch.png";
import airpods from "../Icon/airpods.png";
import camera from "../Icon/camera.png";
import headphone1 from "../Icon/headphone.png";
import headphone2 from "../Icon/headphones (1).png";
import headphone3 from "../Icon/headphones.png";
import keyboard from "../Icon/keyboard.png";
import cable from "../Icon/micro-usb.png";
import mouse from "../Icon/mouse.png";
import powerbank from "../Icon/power-bank.png";
import speaker from "../Icon/speaker.png";
import hub from "../Icon/usb-hub.png";
import wipe from "../Icon/wipe.png";
import wirelesscharging from "../Icon/wireless-charging.png";

export default function PreOrder() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [images, setImages] = useState([]);
  const [isUploaderDisabled, setIsUploaderDisabled] = useState(false);

  const handleImageUpload = (e) => {
    const selectedImages = Array.from(e.target.files);

    if (images.length + selectedImages.length > 2) {
      alert("You can upload a maximum of 2 images.");
      return;
    }

    setImages([...images, ...selectedImages]);

    if (images.length + selectedImages.length === 2) {
      setIsUploaderDisabled(true);
    }
  };
  return (
    <div className="overflowBox">
      <div className="preOrderBody">
        <h2>Looking For Something Different 👀</h2>
        <div className="preOrderBox">
          <p className="preOrderBoxText">Product Information</p>
          <Input size="large" placeholder="Enter Product Name / URL" />
          <p className="preOrderBoxText">Insert Image</p>
          <div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              disabled={isUploaderDisabled}
            />
            <div className="image-preview">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index + 1}`}
                  height={200}
                  width={200}
                />
              ))}
            </div>
            {isUploaderDisabled && (
              <p>Maximum of 2 images reached. Uploader disabled.</p>
            )}
          </div>
          <p className="preOrderBoxText">Name</p>
          <Input size="large" placeholder="Enter Name" />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              style={{
                width: "48%",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <p className="preOrderBoxText">Phone</p>
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
              <p className="preOrderBoxText">Email</p>
              <Input size="large" placeholder="Enter Email Id" />
            </div>
          </div>
          <p className="preOrderBoxText">Address</p>
          <Input size="large" placeholder="Enter Address" />
          <label style={{ opacity: ".4", marginTop: "20px" }}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I hereby accept the terms and conditions of pre-order and read the
            pre-order terms and conditions carefully.
          </label>
          <Button size={"large"} type="dashed" disabled={!isChecked} danger>
            Submit
          </Button>
        </div>
      </div>
      {/* Category */}
      <div style={{ marginBottom: "50px", marginTop: "50px" }}>
        <Link to="/Category/Phones-Tablets">
          <Category
            categoryImg={phone}
            categoryFastText="Phones & "
            categoryScendText="Tablets"
          />
        </Link>

        <Link to="/Category/Computer-and-Laptop">
          <Category
            categoryImg={macBook}
            categoryFastText="MacBook "
            categoryScendText="Computer"
          />
        </Link>

        <Link to="/Category/Power-Adapter">
          <Category
            categoryImg={adapter}
            categoryFastText="Power & "
            categoryScendText="Adapter"
          />
        </Link>

        <Link></Link>
        <Category
          categoryImg={watch}
          categoryFastText="Smart "
          categoryScendText="Watch"
        />

        <Link to="/Category/Headphones">
          <Category
            categoryImg={airpods}
            categoryFastText="Airpods "
            categoryScendText="Headphones"
          />
        </Link>

        <Link to="/Category/Speakers">
          <Category
            categoryImg={speaker}
            categoryFastText="Sound "
            categoryScendText="Speakers"
          />
        </Link>

        <Link to="/Category/Headphones">
          <Category
            categoryImg={headphone1}
            categoryFastText="Wireless "
            categoryScendText="Headphones"
          />
        </Link>

        <Link to="/Category/Headphones">
          <Category
            categoryImg={headphone2}
            categoryFastText="Wired "
            categoryScendText="Headphones"
          />
        </Link>

        <Link to="/Category/Headphones">
          <Category
            categoryImg={headphone3}
            categoryFastText="Overhead"
            categoryScendText="Headphones"
          />
        </Link>

        <Link to="/Category/Cable-and-Interconnects">
          <Category
            categoryImg={cable}
            categoryFastText="Cable &"
            categoryScendText="Interconnects"
          />
        </Link>

        <Link to="/Category/Power-Bank">
          <Category
            categoryImg={powerbank}
            categoryFastText="Power"
            categoryScendText="Bank"
          />
        </Link>

        <Link to="/Category/Wireless-Charger">
          <Category
            categoryImg={wirelesscharging}
            categoryFastText="Wireless"
            categoryScendText="Charger"
          />
        </Link>

        <Link to="/Category/Hubs-Docks">
          <Category
            categoryImg={hub}
            categoryFastText="Hubs & "
            categoryScendText="Docks"
          />
        </Link>

        <Link to="/Category/Keyboard">
          <Category
            categoryImg={keyboard}
            categoryFastText="Keyboard"
            categoryScendText="Accessories"
          />
        </Link>

        <Link to="/Category/Mouse">
          <Category
            categoryImg={mouse}
            categoryFastText="Mouse"
            categoryScendText="Accessories"
          />
        </Link>

        <Link to="/Category/Cover&Glass">
          <Category
            categoryImg={wipe}
            categoryFastText="Cover &"
            categoryScendText="Glass"
          />
        </Link>

        <Link to="/Category/Camera&Accessories">
          <Category
            categoryImg={camera}
            categoryFastText="Camera"
            categoryScendText="Accessories"
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
