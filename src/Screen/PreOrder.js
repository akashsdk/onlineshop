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

import { PlusOutlined } from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function PreOrder() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const [images, setImages] = useState([]);
  const [isUploaderDisabled, setIsUploaderDisabled] = useState(false);

  const handleImageUpload = (e) => {
    const selectedImages = Array.from(e.target.files);

    if (images.length + selectedImages.length > 2) {
      alert('You can upload a maximum of 2 images.');
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
          <p>Product Information</p>
          <Input size="large" placeholder="Enter Product Name / URL" />
          <p>Insert Image</p>
          <div>
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-circle"
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </div>
          <p>Name</p>
          <Input size="large" placeholder="Enter Name" />
          <div>
            <p>Phone</p>
            <Input size="large" placeholder="Enter Phone No" />
            <p>Email</p>
            <Input size="large" placeholder="Enter Email Id" />
          </div>
          <p>Address</p>
          <Input size="large" placeholder="Enter Address" />
          <div>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              I hereby accept the terms and conditions of pre-order and read the pre-order terms and conditions carefully.
            </label>
          </div>
          <Button size={'large'} type="dashed" disabled={!isChecked} danger>Submit</Button>

        </div>
        <div className="App">
      <h1>Image Uploader</h1>
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
          />
        ))}
      </div>
      {isUploaderDisabled && (
        <p>Maximum of 2 images reached. Uploader disabled.</p>
      )}
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
