import React, { useState } from "react";
import { Button, Flex } from "antd";

import OffersCard from "../Card/OffersCard";
import ProductsCard from "../Card/ProductsCard";

import iphone from "../Image/iphone15-pro-64.webp";
import goPro from "../Image/hero12blackheader.jpeg";
import s23 from "../Image/samsung s23 ultra.webp";
import airpodsPro from "../Image/airpods pro.jpeg";
import macbookPro from "../Image/macbook pro.jpeg";
import joyroom from "../Image/Joyroom JR-W020.jpeg";
import walletMen from "../Image/Leather wallet for men.jpeg";
import HavitM3 from "../Image/Havit M3 Portable Bluetooth Speaker.jpeg";
import goPro2 from "../Image/hero12blackheader.jpeg";
import OnePlus from "../Image/OnePlus_Logo.png";
import OnePlus8 from "../Image/oneplus-8-5g-12gb-256gb-dual-sim-glow.webp";

export default function FeaturedProducts() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Flex wrap="wrap" gap="small" justify="center" align="center">
        <Button
          type="text"
          danger
          onClick={() => {
            setPage(1);
          }}
          style={{
            color: page === 1 ? "#fb6565" : "#000000",
            background: "transparent",
          }}
        >
          NEW ARRIVAL
        </Button>

        <Button
          type="text"
          danger
          onClick={() => {
            setPage(2);
          }}
          style={{
            color: page === 2 ? "#fb6565" : "#000000",
            background: "transparent",
          }}
        >
          BEST DEALS
        </Button>
        <Button
          type="text"
          danger
          onClick={() => {
            setPage(3);
          }}
          style={{
            color: page === 3 ? "#fb6565" : "#000000",
            background: "transparent",
          }}
        >
          BEST SELLERS
        </Button>
      </Flex>
      <div style={{ marginTop: "50px" }}>
        {page === 1 ? (
          <Flex wrap="wrap" gap="small" justify="center" align="center">
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
          </Flex>
        ) : page === 2 ? (
          <Flex wrap="wrap" gap="small" justify="center" align="center">
            <ProductsCard
              rating="4"
              percentage="3"
              sells="23"
              number="122"
              Img={walletMen}
              name="High quality Artificial"
              details="Some think about this products"
            />
            <ProductsCard
              rating="5"
              percentage="4"
              sells="33"
              number="25000"
              Img={goPro2}
              name="Go Pro 12"
              details="Some think about this products"
            />
            <ProductsCard
              rating="4"
              percentage="4"
              sells="33"
              number="22000"
              Img={goPro}
              name="Go Pro 11"
              details="Some think about this products"
            />
            <ProductsCard
              rating="4"
              percentage="10"
              sells="300"
              number="1500"
              Img={HavitM3}
              name="Havit M3 Portable Speaker"
              details="Some think about this products"
            />
            <ProductsCard
              rating=""
              percentage=""
              sells=""
              number=""
              Img={""}
              name=""
              details="Some think about this products"
            />
          </Flex>
        ) : page === 3 ? (
          <Flex wrap="wrap" gap="small" justify="center" align="center">
            <ProductsCard
              rating="0"
              percentage="25"
              sells="21"
              number=""
              Img={OnePlus}
              name="OnePlus"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="10"
              sells="25"
              number=""
              Img={OnePlus}
              name="OnePlus"
              details="Some think about this products"
            />
            <ProductsCard
              rating="5"
              percentage="8"
              sells="101"
              number="52000"
              Img={OnePlus8}
              name="OnePlus 8 - 8GB & 128GB"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="10"
              sells="99"
              number=""
              Img={OnePlus}
              name="OnePlus"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="9"
              sells="0"
              number="49000"
              Img={OnePlus}
              name="OnePlus"
              details="Some think about this products"
            />
          </Flex>
        ) : (
          <h1> Error page</h1>
        )}
      </div>
    </div>
  );
}
