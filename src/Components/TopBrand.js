import React, { useState } from "react";
import "./TopBrand.css";

import { Button, Space } from "antd";

import ProductsCard from "../Card/ProductsCard";

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
        <ProductsCard rating="4" percentage="3" number="122" Img="" name="High quality Artificial" />
        <ProductsCard rating="5" percentage="20" number="100" Img="" name="High quality Artificial" />
        <ProductsCard rating="1" />
        <ProductsCard rating="0" />
        <ProductsCard rating="3" />
        <ProductsCard rating="1" />
      </div>
      <div style={{ display: "flex" }}>
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  );
}
