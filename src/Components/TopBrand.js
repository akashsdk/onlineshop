import React, { useState } from "react";
import "./TopBrand.css";

import { Button, Space } from "antd";

import ProductsCard from "../Card/ProductsCard";

import walletMen from '../Image/Leather wallet for men.jpeg';

import iphone15 from '../Image/Iphone 15 pro.jpeg';
import iphone15pro from '../Image/iphone15-pro-64.webp';
import airpod from '../Image/airpods pro.jpeg';
import macbook from '../Image/macbook pro.jpeg'

export default function TopBrand() {
  const [page, setPage] = useState(1);

  return (
    <div className="topBrandBody">
      <Space wrap>
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
      </Space>

      <div>
        {page === 1 ? (
          <div>All</div>
        ) : page === 2 ? (
          <div>Apple</div>
        ) : page === 3 ? (
          <div>Samsung</div>
        ) : page === 4 ? (
          <div>Xiaomi</div>
        ) : page === 5 ? (
          <div>OnePlus</div>
        ) : page === 6 ? (
          <div>JBL</div>
        ) : page === 7 ? (
          <div>Anker</div>
        ) : (
          <h1> Error page</h1>
        )}
      </div>
      <div style={{ display: "flex" }}>
        <ProductsCard rating="4" percentage="3" sells='23' number="122" Img={walletMen} name="High quality Artificial" details='Some think about this products' />
        <ProductsCard rating="" percentage="" sells='' number="" Img={''} name="" details='Some think about this products' />
        <ProductsCard rating="" percentage="" sells='' number="" Img={''} name="" details='Some think about this products' />
        <ProductsCard rating="" percentage="" sells='' number="" Img={''} name="" details='Some think about this products' />
        <ProductsCard rating="" percentage="" sells='' number="" Img={''} name="" details='Some think about this products' />
      </div>

      <div style={{ display: "flex" }}>
        <ProductsCard rating="5" percentage="14" sells='20' number="125000" Img={iphone15pro} name="Iphone 15 Pro" details='Some think about this products' />
        <ProductsCard rating="4" percentage="15" sells='4' number="210000" Img={iphone15} name="Iphone 15 Pro Max" details='Some think about this products' />
        <ProductsCard rating="3" percentage="15" sells='120' number="45000" Img={airpod} name="Airpods Pro" details='Some think about this products' />
        <ProductsCard rating="2" percentage="14" sells='9' number="250000" Img={macbook} name="Macbook Pro 2023" details='Some think about this products' />
        <ProductsCard rating="1" percentage="10" sells='29' number="" Img={iphone15pro} name="Iphone 13 Pro Max" details='Some think about this products' />
      </div>

      
    </div>
  );
}
