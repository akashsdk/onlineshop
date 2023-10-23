import React, { useState, useEffect } from "react";
import "./Style/Home.css";

import { Button, Image } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import Category from "../Card/Category";
import TopBrand from "../Components/TopBrand";
import Note from "../Components/Note";
import Footer from "../Components/Footer";
import FeaturedProducts from "../Components/FeaturedProducts";
import FlashSale from "../Components/FlashSale";
import Title from "../Components/Title";

import AboutUs from "../OtherLink/AboutUs";

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
import accessories from '../Icon/keyboard-and-mouse.png';

import Offers from "../Components/Offers";

import productIngPs5 from "../Image/PS5-Middle-Banner-6251.jpg";
import productIngQ20 from "../Image/Anker-Life-Q20.jpeg";
import productIngIphone15Pro from "../Image/Iphone 15 pro.jpeg";
import productIngGoPro11 from "../Image/go pro 11.jpeg";



const images = [
  "https://9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-wallpaper-2.webp",
  "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1668834860184-69ebc6d0756d%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8MXx8Z29vZ2xlJTIwcGl4ZWwlMjA3JTIwcHJvfGVufDB8fHx8MTY5NTcwMDA5MXww%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dgoogle%252520pixel%2525207%252520pro%26blend%3D000000",
  "https://soyacincau.com/wp-content/uploads/2022/09/220915-gopro-hero-11-black-mini-hero-02.jpg",
  "https://i.ytimg.com/vi/p1hjrdPuMGo/maxresdefault.jpg",
  "https://ispace.ge/blog/wp-content/uploads/2022/01/BLG_FB_MRCH-6-1440x720.png",
  "https://blog-media.lifepal.co.id/wp-content/uploads/2018/12/03175525/shutterstock_676210375-1.jpg",
];
export default function HomeIndex() {
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
    <div>
      <div className="homeMedContent">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="Top" className="homeMedContentSliderBox">
            <img
              className="homeMedContentSliderImg"
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-60px",
                marginBottom: "60px",
              }}
            >
              <Button
                style={{
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onClick={handlePrev}
                shape="circle"
                icon={<LeftOutlined />}
              />
              <h2 style={{ color: "rgb(0, 255, 247)", marginLeft: "20px" }}>
                {currentImageIndex + 1} of {images.length}
              </h2>

              <Button
                style={{
                  color: "white",
                  backgroundColor: "transparent",
                  marginLeft: "20px",
                }}
                onClick={handleNext}
                shape="circle"
                icon={<RightOutlined />}
              />
            </div>
          </div>
        </div>
        {/* Title */}
        <div className="homeMedBody-Title">
          <Title />
        </div>

        {/* FlashSale */}
        <div style={{ marginTop: "100px" }}>
          <p className="homeMedContentCategoryHeadText">FlashSale 😍</p>
          <FlashSale />
        </div>
        {/* Offers */}
        <div style={{ marginTop: "100px" }}>
          <p className="homeMedContentCategoryHeadText">Best for Order 🔥</p>
          <p className="homeMedContentCategoryText">
            Get your best offer from the featured category
          </p>
          <Offers />
        </div>
        {/* Category */}
        <div>
          <p className="homeMedContentCategoryHeadText">FEATURED CATEGORIES</p>
          <p className="homeMedContentCategoryText">
            Get your desired product from featured category
          </p>
          <div>
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

            <Link to="/Category/Accessories">
              <Category
                categoryImg={accessories}
                categoryFastText="All"
                categoryScendText="Accessories"
              />
            </Link>
          </div>
        </div>
        {/* Featured Products */}
        <div style={{ marginTop: "100px" }}>
          <p className="homeMedContentCategoryHeadText">Featured Products</p>
          <FeaturedProducts />
        </div>
        {/* Prodect Image */}
        <div className="homeMedContentProductImgBox">
          <Image width="45%" src={productIngQ20} />
          <Image width="45%" style={{ marginLeft: "5%" }} src={productIngPs5} />
        </div>
        <div className="homeMedContentProductImgBox2">
          <Image width="45%" src={productIngIphone15Pro} />
          <Image
            width="45%"
            style={{ marginLeft: "5%" }}
            src={productIngGoPro11}
          />
        </div>
        {/* TopBrand */}
        <div style={{ marginTop: "100px" }}>
          <p className="homeMedContentCategoryHeadText">Top Brand Products</p>
          <TopBrand />
        </div>

        {/* About Us */}
        <div style={{ marginTop: "100px" }}>
          <p className="homeMedContentCategoryHeadText">About Us</p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "20px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <h3 style={{ color: "#FE6D02" }}> Unveiling Our Story</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              Welcome to [Your Shop Name]! We're delighted to share our story
              and introduce ourselves to you. Our journey began with a vision to
              provide exceptional products and outstanding service to our
              customers. As you read through our "About Us" page, we hope to
              give you a glimpse into who we are, what drives us, and what you
              can expect from your shopping experience.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Our Roots</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              Our story started several years ago when a group of passionate
              individuals came together with a common purpose: to offer an
              online shopping experience like no other. We aimed to create a
              platform that seamlessly combined the finest products,
              affordability, and a commitment to customer satisfaction. Since
              then, we've continually evolved, but our core values remain
              unwavering.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Our Mission</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              At [Your Shop Name], our mission is simple: to be your one-stop
              destination for high-quality products that enhance your life. We
              strive to make the latest trends and innovative items accessible
              to everyone, ensuring that our customers have access to the best
              products on the market.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Our Values</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              1.Quality: We are committed to offering products of the highest
              quality. Our dedicated team carefully selects and tests each item
              to ensure that it meets our rigorous standards. <br />
              2.Affordability: We believe that everyone should have access to
              top-notch products. We work diligently to keep our prices
              competitive, making quality accessible. <br />
              3.Customer-Centric: Your satisfaction is our utmost priority.
              We're here to assist you throughout your shopping journey, from
              choosing the right product to post-purchase support.
              <br />
              4.Innovation: We're passionate about staying ahead of the curve.
              Our team is constantly on the lookout for the latest trends and
              innovations to bring to your doorstep. <br />
              5.Transparency: We believe in being open and honest with our
              customers. You'll always know what you're getting, from product
              specifications to pricing.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Our Products</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              At [Your Shop Name], you'll discover a vast array of products
              designed to cater to your diverse needs and preferences. From
              cutting-edge technology to stylish fashion, home essentials, and
              more, our selection is carefully curated to meet the highest
              standards of quality and value. We take pride in sourcing products
              from reputable suppliers and manufacturers worldwide.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Our Team</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              The heart of our operation is our dedicated and diverse team. With
              backgrounds in e-commerce, customer service, and product
              selection, we've come together to create a dynamic and
              customer-focused company. Each team member brings a unique
              perspective and skill set, but we share a common goal: your
              satisfaction.
            </p>
            <h3 style={{ color: "#FE6D02" }}>
              Our Commitment to Sustainability
            </h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              We're aware of the environmental challenges our world faces, and
              we're committed to making a positive impact. [Your Shop Name] is
              dedicated to sustainability through ethical sourcing, minimizing
              waste, and exploring eco-friendly product options. We believe in
              giving back to our planet and helping create a more sustainable
              future.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Customer-Centric Approach</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              At [Your Shop Name], you're not just a customer; you're a part of
              our community. We're devoted to ensuring that your shopping
              experience is seamless and enjoyable. Our customer support team is
              ready to assist you with any questions, concerns, or feedback you
              may have. We're here to provide you with the assistance you need,
              from product recommendations to order tracking and returns.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Our Pledge</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              As a token of our commitment to your satisfaction, we offer a 100%
              satisfaction guarantee. If you're not completely satisfied with
              your purchase, we'll do everything in our power to make it right.
              Your happiness is our success, and we stand by that pledge.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Connect with Us</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              We invite you to connect with us on social media to stay updated
              on our latest products, promotions, and community events. Follow
              us on Facebook, Instagram, and Twitter to become a part of the
              [Your Shop Name] family.
            </p>
            <h3 style={{ color: "#FE6D02" }}>Join Our Journey</h3>
            <p style={{ textAlign: "left", opacity: ".6", marginTop: "-10px" }}>
              At [Your Shop Name], we are more than just an online shop. We are
              a community of like-minded individuals who appreciate quality,
              value, and exceptional service. We thank you for choosing us as
              your shopping destination and look forward to serving you.
              <br />
              Our journey is far from over, and we're excited to have you by our
              side as we continue to grow, evolve, and improve. We hope that
              your shopping experience with us exceeds your expectations, and we
              can't wait to be a part of your life's special moments.
              <br />
              Thank you for taking the time to read our "About Us" page. Your
              trust and support mean the world to us. Warm regards,
              <br />
              [Your Name]
              <br />
              Founder, [Your Shop Name]
            </p>
          </div>
        </div>
        <Note />
        <Footer />
      </div>
    </div>
  );
}
