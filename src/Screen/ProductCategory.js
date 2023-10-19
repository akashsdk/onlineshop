import React from 'react'
import './Style/Home.css';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";

import Category from "../Card/Category";

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

export default function ProductCategory() {
  return (
    <div className="overflowBox">
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
          </div>
    </div>
    <Footer />
  </div>
  )
}
