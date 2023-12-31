import React, { useState } from "react";
import "./TopBrand.css";

import { Button, Space, Flex } from "antd";

import ProductsCard from "../Card/ProductsCard";

import walletMen from "../Image/Leather wallet for men.jpeg";
import HavitM3 from "../Image/Havit M3 Portable Bluetooth Speaker.jpeg";

import iphone15 from "../Image/Iphone 15 pro.jpeg";
import iphone15pro from "../Image/iphone15-pro-64.webp";
import airpod from "../Image/airpods pro.jpeg";
import macbook from "../Image/macbook pro.jpeg";
import s23 from "../Image/samsung s23 ultra.webp";
import goPro from "../Image/go pro 11.jpeg";
import goPro2 from "../Image/hero12blackheader.jpeg";
import samsungS20 from "../Image/samsung-galaxy-s20-1.jpg";
import budsPro from "../Image/galaxy-buds-pro-03-500x500.webp";
import budspro2 from "../Image/Galaxy Buds2.jpeg";
import A52 from "../Image/Samsung-Galaxy-A52-6.jpg";
import mi11 from "../Image/xiaomi-mi11-ultra-5g-k1-1.jpg";
import Xiaomimi from "../Image/download.png";
import OnePlus8 from "../Image/oneplus-8-5g-12gb-256gb-dual-sim-glow.webp";
import OnePlus from "../Image/OnePlus_Logo.png";
import jbl from "../Image/Logo_of_JBL.svg.png";
import anker from "../Image/Anker logo.jpeg";

export default function TopBrand() {
  const [page, setPage] = useState(1);

  return (
    <div className="topBrandBody">
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
          All
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
          Apple
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
          Samsung
        </Button>
        <Button
          type="text"
          danger
          onClick={() => {
            setPage(4);
          }}
          style={{
            color: page === 4 ? "#fb6565" : "#000000",
            background: "transparent",
          }}
        >
          Xiaomi
        </Button>
        <Button
          type="text"
          danger
          onClick={() => {
            setPage(5);
          }}
          style={{
            color: page === 5 ? "#fb6565" : "#000000",
            background: "transparent",
          }}
        >
          OnePlus
        </Button>
        <Button
          type="text"
          danger
          onClick={() => {
            setPage(6);
          }}
          style={{
            color: page === 6 ? "#fb6565" : "#000000",
            background: "transparent",
          }}
        >
          JBL
        </Button>
        <Button
          type="text"
          danger
          onClick={() => {
            setPage(7);
          }}
          style={{
            color: page === 7 ? "#fb6565" : "#000000",
            background: "transparent",
          }}
        >
          Anker
        </Button>
      </Flex>
      <div style={{marginTop:'50px'}}>
        {page === 1 ? (
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
            <ProductsCard
              rating="5"
              percentage="14"
              sells="20"
              number="125000"
              Img={iphone15pro}
              name="Iphone 15 Pro"
              details="Some think about this products"
            />
            <ProductsCard
              rating="4"
              percentage="15"
              sells="4"
              number="210000"
              Img={iphone15}
              name="Iphone 15 Pro Max"
              details="Some think about this products"
            />
            <ProductsCard
              rating="3"
              percentage="15"
              sells="120"
              number="45000"
              Img={airpod}
              name="Airpods Pro"
              details="Some think about this products"
            />
            <ProductsCard
              rating="2"
              percentage="14"
              sells="9"
              number="250000"
              Img={macbook}
              name="Macbook Pro 2023"
              details="Some think about this products"
            />
            <ProductsCard
              rating="1"
              percentage="10"
              sells="29"
              number=""
              Img={iphone15pro}
              name="Iphone 13 Pro Max"
              details="Some think about this products"
            />
            <ProductsCard
              rating="5"
              percentage="25"
              sells="21"
              number="100000"
              Img={s23}
              name="Samsung s23 ultra"
              details="Some think about this products"
            />
            <ProductsCard
              rating="4"
              percentage="10"
              sells="25"
              number="34999"
              Img={samsungS20}
              name="Samsung Galaxy S20"
              details="Some think about this products"
            />
            <ProductsCard
              rating="3"
              percentage="4"
              sells="101"
              number=""
              Img={budsPro}
              name="Samsung Galaxy Buds Pro"
              details="Some think about this products"
            />
            <ProductsCard
              rating="2"
              percentage="10"
              sells="99"
              number="23000"
              Img={budspro2}
              name="Galaxy Buds2"
              details="Some think about this products"
            />
            <ProductsCard
              rating="1"
              percentage="9"
              sells="10"
              number="37500"
              Img={A52}
              name="Samsung Galaxy A52"
              details="Some think about this products"
            />
            <ProductsCard
              rating="5"
              percentage="25"
              sells="21"
              number="100000"
              Img={Xiaomimi}
              name="Xiaomi Mi"
              details="Some think about this products"
            />
            <ProductsCard
              rating="4"
              percentage="10"
              sells="25"
              number="34999"
              Img={Xiaomimi}
              name="Xiaomi Mi"
              details="Some think about this products"
            />
            <ProductsCard
              rating="3"
              percentage="4"
              sells="101"
              number=""
              Img={Xiaomimi}
              name="Xiaomi Mi"
              details="Some think about this products"
            />
            <ProductsCard
              rating="2"
              percentage="10"
              sells="99"
              number="23000"
              Img={Xiaomimi}
              name="Xiaomi Mi"
              details="Some think about this products"
            />
            <ProductsCard
              rating=""
              percentage="9"
              sells="0"
              number="49000"
              Img={mi11}
              name="Xiaomi Mi 11 Ultra"
              details="Some think about this products"
            />
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
            <ProductsCard
              rating="0"
              percentage="25"
              sells="21"
              number=""
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="10"
              sells="25"
              number=""
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="5"
              percentage="8"
              sells="101"
              number="52000"
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="10"
              sells="99"
              number=""
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="9"
              sells="0"
              number="49000"
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
          </Flex>
        ) : page === 2 ? (
          <Flex wrap="wrap" gap="small" justify="center" align="center">
            <ProductsCard
              rating="5"
              percentage="14"
              sells="20"
              number="125000"
              Img={iphone15pro}
              name="Iphone 15 Pro"
              details="Some think about this products"
            />
            <ProductsCard
              rating="4"
              percentage="15"
              sells="4"
              number="210000"
              Img={iphone15}
              name="Iphone 15 Pro Max"
              details="Some think about this products"
            />
            <ProductsCard
              rating="3"
              percentage="15"
              sells="120"
              number="45000"
              Img={airpod}
              name="Airpods Pro"
              details="Some think about this products"
            />
            <ProductsCard
              rating="2"
              percentage="14"
              sells="9"
              number="250000"
              Img={macbook}
              name="Macbook Pro 2023"
              details="Some think about this products"
            />
            <ProductsCard
              rating="1"
              percentage="10"
              sells="29"
              number=""
              Img={iphone15pro}
              name="Iphone 13 Pro Max"
              details="Some think about this products"
            />
          </Flex>
        ) : page === 3 ? (
          <Flex wrap="wrap" gap="small" justify="center" align="center">
            <ProductsCard
              rating="5"
              percentage="25"
              sells="21"
              number="100000"
              Img={s23}
              name="Samsung s23 ultra"
              details="Some think about this products"
            />
            <ProductsCard
              rating="4"
              percentage="10"
              sells="25"
              number="34999"
              Img={samsungS20}
              name="Samsung Galaxy S20"
              details="Some think about this products"
            />
            <ProductsCard
              rating="3"
              percentage="4"
              sells="101"
              number=""
              Img={budsPro}
              name="Samsung Galaxy Buds Pro"
              details="Some think about this products"
            />
            <ProductsCard
              rating="2"
              percentage="10"
              sells="99"
              number="23000"
              Img={budspro2}
              name="Galaxy Buds2"
              details="Some think about this products"
            />
            <ProductsCard
              rating="1"
              percentage="9"
              sells="10"
              number="37500"
              Img={A52}
              name="Samsung Galaxy A52"
              details="Some think about this products"
            />
          </Flex>
        ) : page === 4 ? (
          <Flex wrap="wrap" gap="small" justify="center" align="center">
            <ProductsCard
              rating="5"
              percentage="25"
              sells="21"
              number="100000"
              Img={Xiaomimi}
              name="Xiaomi Mi"
              details="Some think about this products"
            />
            <ProductsCard
              rating="4"
              percentage="10"
              sells="25"
              number="34999"
              Img={Xiaomimi}
              name="Xiaomi Mi"
              details="Some think about this products"
            />
            <ProductsCard
              rating="3"
              percentage="4"
              sells="101"
              number=""
              Img={Xiaomimi}
              name="Xiaomi Mi"
              details="Some think about this products"
            />
            <ProductsCard
              rating="2"
              percentage="10"
              sells="99"
              number="23000"
              Img={Xiaomimi}
              name="Xiaomi Mi"
              details="Some think about this products"
            />
            <ProductsCard
              rating=""
              percentage="9"
              sells="0"
              number="49000"
              Img={mi11}
              name="Xiaomi Mi 11 Ultra"
              details="Some think about this products"
            />
          </Flex>
        ) : page === 5 ? (
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
        ) : page === 6 ? (
          <Flex wrap="wrap" gap="small" justify="center" align="center">
            <ProductsCard
              rating="0"
              percentage="25"
              sells="21"
              number=""
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="10"
              sells="25"
              number=""
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="5"
              percentage="8"
              sells="101"
              number="52000"
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="10"
              sells="99"
              number=""
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
            <ProductsCard
              rating="0"
              percentage="9"
              sells="0"
              number="49000"
              Img={jbl}
              name="JBL Products"
              details="Some think about this products"
            />
          </Flex>
        ) : page === 7 ? (
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
        ) : (
          <h1> Error page</h1>
        )}
      </div>
      {/* <div style={{ display: "flex" }}>
        <ProductsCard rating="4" percentage="3" sells='23' number="122" Img={walletMen} name="High quality Artificial" details='Some think about this products' />
        <ProductsCard rating="5" percentage="4" sells='33' number="25000" Img={goPro2} name="Go Pro 12" details='Some think about this products' />
        <ProductsCard rating="4" percentage="4" sells='33' number="22000" Img={goPro} name="Go Pro 11" details='Some think about this products' />
        <ProductsCard rating="4" percentage="10" sells='300' number="1500" Img={HavitM3} name="Havit M3 Portable Speaker" details='Some think about this products' />
        <ProductsCard rating="" percentage="" sells='' number="" Img={''} name="" details='Some think about this products' />
      </div>
      <div style={{ display: "flex" }}>
        <ProductsCard rating="5" percentage="14" sells='20' number="125000" Img={iphone15pro} name="Iphone 15 Pro" details='Some think about this products' />
        <ProductsCard rating="4" percentage="15" sells='4' number="210000" Img={iphone15} name="Iphone 15 Pro Max" details='Some think about this products' />
        <ProductsCard rating="3" percentage="15" sells='120' number="45000" Img={airpod} name="Airpods Pro" details='Some think about this products' />
        <ProductsCard rating="2" percentage="14" sells='9' number="250000" Img={macbook} name="Macbook Pro 2023" details='Some think about this products' />
        <ProductsCard rating="1" percentage="10" sells='29' number="" Img={iphone15pro} name="Iphone 13 Pro Max" details='Some think about this products' />
      </div>
      <div style={{ display: "flex" }}>
        <ProductsCard rating="5" percentage="25" sells='21' number="100000" Img={s23} name="Samsung s23 ultra" details='Some think about this products' />
        <ProductsCard rating="4" percentage="10" sells='25' number="34999" Img={samsungS20} name="Samsung Galaxy S20" details='Some think about this products' />
        <ProductsCard rating="3" percentage="4" sells='101' number="" Img={budsPro} name="Samsung Galaxy Buds Pro" details='Some think about this products' />
        <ProductsCard rating="2" percentage="10" sells='99' number="23000" Img={budspro2} name="Galaxy Buds2" details='Some think about this products' />
        <ProductsCard rating="1" percentage="9" sells='10' number="37500" Img={A52} name="Samsung Galaxy A52" details='Some think about this products' />
      </div>
      <div style={{ display: "flex" }}>
        <ProductsCard rating="5" percentage="25" sells='21' number="100000" Img={Xiaomimi} name="Xiaomi Mi" details='Some think about this products' />
        <ProductsCard rating="4" percentage="10" sells='25' number="34999" Img={Xiaomimi} name="Xiaomi Mi" details='Some think about this products' />
        <ProductsCard rating="3" percentage="4" sells='101' number="" Img={Xiaomimi} name="Xiaomi Mi" details='Some think about this products' />
        <ProductsCard rating="2" percentage="10" sells='99' number="23000" Img={Xiaomimi} name="Xiaomi Mi" details='Some think about this products' />
        <ProductsCard rating="" percentage="9" sells='0' number="49000" Img={mi11} name="Xiaomi Mi 11 Ultra" details='Some think about this products' />
      </div>
      <div style={{ display: "flex" }}>
        <ProductsCard rating="0" percentage="25" sells='21' number="" Img={OnePlus} name="OnePlus" details='Some think about this products' />
        <ProductsCard rating="0" percentage="10" sells='25' number="" Img={OnePlus} name="OnePlus" details='Some think about this products' />
        <ProductsCard rating="5" percentage="8" sells='101' number="52000" Img={OnePlus8} name="OnePlus 8 - 8GB & 128GB" details='Some think about this products' />
        <ProductsCard rating="0" percentage="10" sells='99' number="" Img={OnePlus} name="OnePlus" details='Some think about this products' />
        <ProductsCard rating="0" percentage="9" sells='0' number="49000" Img={OnePlus} name="OnePlus" details='Some think about this products' />
      </div>
      <div style={{ display: "flex" }}>
        <ProductsCard rating="0" percentage="25" sells='21' number="" Img={jbl} name="JBL Products" details='Some think about this products' />
        <ProductsCard rating="0" percentage="10" sells='25' number="" Img={jbl} name="JBL Products" details='Some think about this products' />
        <ProductsCard rating="5" percentage="8" sells='101' number="52000" Img={jbl} name="JBL Products" details='Some think about this products' />
        <ProductsCard rating="0" percentage="10" sells='99' number="" Img={jbl} name="JBL Products" details='Some think about this products' />
        <ProductsCard rating="0" percentage="9" sells='0' number="49000" Img={jbl} name="JBL Products" details='Some think about this products' />
      </div>
       <div style={{ display: "flex" }}>
        <ProductsCard rating="0" percentage="25" sells='21' number="" Img={anker} name="Anker Products" details='Some think about this products' />
        <ProductsCard rating="0" percentage="10" sells='25' number="" Img={anker} name="Anker Products" details='Some think about this products' />
        <ProductsCard rating="5" percentage="8" sells='101' number="52000" Img={anker} name="Anker Products" details='Some think about this products' />
        <ProductsCard rating="0" percentage="10" sells='99' number="" Img={anker} name="Anker Products" details='Some think about this products' />
        <ProductsCard rating="0" percentage="9" sells='0' number="49000" Img={anker} name="Anker Products" details='Some think about this products' />
      </div> */}
    </div>
  );
}
