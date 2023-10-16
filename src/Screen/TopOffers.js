import React from "react";
import "./Style/TopOffers.css";
import Footer from "../Components/Footer";
import OffersCard from "../Card/OffersCard";

import { Pagination } from "antd";

import iphone from "../Image/iphone15-pro-64.webp";
import goPro from "../Image/hero12blackheader.jpeg";
import s23 from "../Image/samsung s23 ultra.webp";
import airpodsPro from "../Image/airpods pro.jpeg";
import macbookPro from "../Image/macbook pro.jpeg";
import joyroom from "../Image/Joyroom JR-W020.jpeg";

export default function TopOffers() {
  return (
    <div className="overflowBox">
      <h1>Enjoy Your Big Offers👌😍</h1>
      <div>
        <OffersCard
          name="Iphone 15 Pro"
          Img={iphone}
          percentage="14"
          number="125000"
        />

        <OffersCard
          name="Go Pro 12"
          Img={goPro}
          percentage="4"
          number="25000"
        />
        <OffersCard
          name="Macbook Pro 2023"
          Img={macbookPro}
          percentage="14"
          number="250000"
        />
        <OffersCard
          name="Joyroom JR-W020"
          Img={joyroom}
          percentage="9"
          number="2500"
        />
        <OffersCard
          name="Samsung s23 ultra"
          Img={s23}
          percentage="25"
          number="100000"
        />
        <OffersCard
          name="Airpods pro"
          Img={airpodsPro}
          percentage="15"
          number="45000"
        />
        <OffersCard />
        <OffersCard name="Iphone 15 Pro" Img={iphone} />
        <OffersCard name="Iphone 15 Pro" Img={iphone} percentage="14" />
        <OffersCard name="Iphone 15 Pro" percentage="14" number="125000" />

        <OffersCard />
      </div>
      <div className="TopOffers-Pagination-Div">
        <Pagination defaultCurrent={1} total={50} />
      </div>

      <Footer />
    </div>
  );
}
