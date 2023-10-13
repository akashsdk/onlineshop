import React, { useState } from "react";
import "./FlashSale.css";
import ProductsCard from "../Card/ProductsCard";

import { Button, Flex, Statistic } from "antd";

import goPro from "../Image/hero12blackheader.jpeg";
import walletMen from "../Image/Leather wallet for men.jpeg";
import HavitM3 from "../Image/Havit M3 Portable Bluetooth Speaker.jpeg";
import goPro2 from "../Image/hero12blackheader.jpeg";
import anker from "../Image/Anker logo.jpeg";

const { Countdown } = Statistic;
const deadline = Date.now() + 250 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

export default function FlashSale() {
  const [page, setPage] = useState(2);
  return (
    <div className="flashSaleBody">
      <div className="flashSaleLine" />
      <Flex
        justify="space-evenly"
        align="flex-start"
        style={{ marginTop: "-7px" }}
      >
        <h2 style={{ color: "red" }}>On Sale Now</h2>
        <div style={{ display: "flex" }}>
          <h2 style={{ color: "red" }}>Ending In : </h2>
          <Countdown
            style={{ marginTop: "12px" }}
            title=""
            value={deadline}
            onFinish={""}
          />
        </div>
      </Flex>
      <div className="flashSaleLine" />
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

      {page === 1 ? (
        <div style={{marginTop:'10px'}}>
          <Flex wrap="wrap" gap="small" justify="center" align="center">
            <ProductsCard
              rating="0"
              percentage="25"
              sells="21"
              number=""
              Img={anker}
              name="Anker Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="10"
              sells="25"
              number=""
              Img={anker}
              name="Anker Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="5"
              percentage="8"
              sells="101"
              number="52000"
              Img={anker}
              name="Anker Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="10"
              sells="99"
              number=""
              Img={anker}
              name="Anker Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="9"
              sells="0"
              number="49000"
              Img={anker}
              name="Anker Products"
              details="Some think about this products"
            />
          </Flex>
          <Button
          className="flashSaleBuuton"
            onClick={() => {
              setPage(2);
            }}
            type="text"
            danger
          >
            Less
          </Button>
        </div>
      ) : page === 2 ? (
        <Button
        className="flashSaleBuuton"
          onClick={() => {
            setPage(1);
          }}
          type="text"
          danger
        >
          See More products
        </Button>
      ) : (
        <h1>Eroor</h1>
      )}

      <div className="flashSaleLine2" />
    </div>
  );
}
