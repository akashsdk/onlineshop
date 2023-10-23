import React, { useState } from "react";
import "./PhonesTablets.css";
import Footer from "../Components/Footer";
import OffersCard from "../Card/OffersCard";

import { Button, Flex, Drawer, Select, Space, Input, Checkbox } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import iphone from "../Image/iphone15-pro-64.webp";
import goPro from "../Image/hero12blackheader.jpeg";
import s23 from "../Image/samsung s23 ultra.webp";
import airpodsPro from "../Image/airpods pro.jpeg";
import macbookPro from "../Image/macbook pro.jpeg";
import joyroom from "../Image/Joyroom JR-W020.jpeg";

export default function CoverGlass() {
  const [open, setOpen] = useState(false);

  const showDefaultDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className="overflowBox">
      <div style={{ height: "auto", width: "100%" }}>
        <div className="phonesTabletsTopBox">
          <Flex wrap="wrap" gap="small">
            {Array.from(
              {
                length: 20,
              },
              (_, i) => (
                <Button className="phonesTabletsTopBox-Button" shape="round">
                  <p className="phonesTabletsTopBox-ButtonText">Brand Name</p>
                </Button>
              )
            )}
          </Flex>
        </div>
        <div
          style={{
            height: "auto",
            width: "100%",
            marginTop: "40px",
            display: "flex",
          }}
        >
          <div className="phonesTabletsLeftBox">
            {/* Price Range */}
            <div className="phonesTabletsLeft-FilterBox">
              <p className="phonesTabletsLeft-FilterBox-Text">Price Range</p>
              <div className="phonesTabletsLeft-FilterBox-Line" />
              <div className="phonesTabletsLeft-FilterBox-Input">
                <Space.Compact size="large">
                  <Input placeholder="Minimum" />
                  <Input placeholder="Maximum" />
                </Space.Compact>
              </div>
              <div className="phonesTabletsLeft-FilterBox-ButtonDiv">
                <Button danger>Filter</Button>
              </div>
            </div>

            {/* Type */}
            <div className="phonesTabletsLeft-FilterBox">
              <p className="phonesTabletsLeft-FilterBox-Text">Type</p>
              <div className="phonesTabletsLeft-FilterBox-Line" />
              <div className="phonesTabletsLeft-FilterBox-Select">
                <Checkbox style={{ color: "red" }}>Phones Cover</Checkbox>
                <Checkbox style={{ color: "red" }}>Phone Glass</Checkbox>
                <Checkbox style={{ color: "red" }}>Tablets Cover</Checkbox>
                <Checkbox style={{ color: "red" }}>Tablets Glass</Checkbox>
                <Checkbox style={{ color: "red" }}>Laptop Cover</Checkbox>
                <Checkbox style={{ color: "red" }}>Laptop Glass</Checkbox>
                <Checkbox style={{ color: "red" }}>Monitor Glass</Checkbox>
                <Checkbox style={{ color: "red" }}>Airpods Cover</Checkbox>
                <Checkbox style={{ color: "red" }}>Watch Cover&Glass</Checkbox>
              </div>
            </div>

            {/* Size */}
            <div className="phonesTabletsLeft-FilterBox">
              <p className="phonesTabletsLeft-FilterBox-Text">Size</p>
              <div className="phonesTabletsLeft-FilterBox-Line" />
              <div className="phonesTabletsLeft-FilterBox-Select">
                <Checkbox style={{ color: "red" }}>12-14 inch</Checkbox>
                <Checkbox style={{ color: "red" }}>13 inch</Checkbox>
                <Checkbox style={{ color: "red" }}>14 inch</Checkbox>
                <Checkbox style={{ color: "red" }}>14-16 inch</Checkbox>
                <Checkbox style={{ color: "red" }}>15 inch</Checkbox>
                <Checkbox style={{ color: "red" }}>15 inch</Checkbox>
                <Checkbox style={{ color: "red" }}>15 inch</Checkbox>
              </div>
            </div>

            {/* Qty */}
            <div className="phonesTabletsLeft-FilterBox">
              <p className="phonesTabletsLeft-FilterBox-Text">Qty</p>
              <div className="phonesTabletsLeft-FilterBox-Line" />
              <div className="phonesTabletsLeft-FilterBox-Select">
                <Checkbox style={{ color: "red" }}>1 Pcs</Checkbox>
                <Checkbox style={{ color: "red" }}>2 Pcs</Checkbox>
              </div>
            </div>

            {/* Border */}
            <div className="phonesTabletsLeft-FilterBox">
              <p className="phonesTabletsLeft-FilterBox-Text">Border</p>
              <div className="phonesTabletsLeft-FilterBox-Line" />
              <div className="phonesTabletsLeft-FilterBox-Select">
                <Checkbox style={{ color: "red" }}>Yes</Checkbox>
                <Checkbox style={{ color: "red" }}>No</Checkbox>
              </div>
            </div>

            {/* Watch */}
            <div className="phonesTabletsLeft-FilterBox">
              <p className="phonesTabletsLeft-FilterBox-Text">Watch</p>
              <div className="phonesTabletsLeft-FilterBox-Line" />
              <div className="phonesTabletsLeft-FilterBox-Select">
                <Checkbox style={{ color: "red" }}>40mm</Checkbox>
                <Checkbox style={{ color: "red" }}>41mm</Checkbox>
                <Checkbox style={{ color: "red" }}>44mm</Checkbox>
                <Checkbox style={{ color: "red" }}>45mm</Checkbox>
                <Checkbox style={{ color: "red" }}>49mm</Checkbox>
              </div>
            </div>

            {/* Airpods */}
            <div className="phonesTabletsLeft-FilterBox">
              <p className="phonesTabletsLeft-FilterBox-Text">Airpods</p>
              <div className="phonesTabletsLeft-FilterBox-Line" />
              <div className="phonesTabletsLeft-FilterBox-Select">
                <Checkbox style={{ color: "red" }}>Airpods 2</Checkbox>
                <Checkbox style={{ color: "red" }}>Airpods 3</Checkbox>
                <Checkbox style={{ color: "red" }}>Airpods Pro</Checkbox>
                <Checkbox style={{ color: "red" }}>Airpods Pro 2</Checkbox>
              </div>
            </div>

            {/* Device */}
            <div className="phonesTabletsLeft-FilterBox">
              <p className="phonesTabletsLeft-FilterBox-Text">Device</p>
              <div className="phonesTabletsLeft-FilterBox-Line" />
              <div className="phonesTabletsLeft-FilterBox-Select">
                <Checkbox style={{ color: "red" }}>iphone 15 Min</Checkbox>
                <Checkbox style={{ color: "red" }}>iphone 15 </Checkbox>
                <Checkbox style={{ color: "red" }}>iphone 15 Pro</Checkbox>
                <Checkbox style={{ color: "red" }}>iphone 15 Pro Max</Checkbox>
                <Checkbox style={{ color: "red" }}>OnePlus 7 </Checkbox>
                <Checkbox style={{ color: "red" }}>OnePlus 7 Pro</Checkbox>
              </div>
            </div>
          </div>
          <div className="phonesTabletsRightBox">
            {/* Header */}
            <div className="phonesTabletsRight-Header">
              <h3 className="phonesTabletsRight-HeaderText">Cover & Glass</h3>
              {/* Filter */}
              <Button
                className="phonesTabletsRight-HeaderFilter"
                icon={<FilterOutlined />}
                onClick={showDefaultDrawer}
                danger
              >
                Filter
              </Button>

              <Drawer
                title="Filter"
                placement="right"
                size="default"
                onClose={onClose}
                open={open}
              >
                <div className="phonesTabletsRight-DrawerBox">
                  {/* Price Range */}
                  <div className="phonesTabletsLeft-FilterBox">
                    <p className="phonesTabletsLeft-FilterBox-Text">
                      Price Range
                    </p>
                    <div className="phonesTabletsLeft-FilterBox-Line" />
                    <div className="phonesTabletsLeft-FilterBox-Input">
                      <Space.Compact size="large">
                        <Input placeholder="Minimum" />
                        <Input placeholder="Maximum" />
                      </Space.Compact>
                    </div>
                    <div className="phonesTabletsLeft-FilterBox-ButtonDiv">
                      <Button danger>Filter</Button>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="phonesTabletsLeft-FilterBox">
                    <p className="phonesTabletsLeft-FilterBox-Text">Type</p>
                    <div className="phonesTabletsLeft-FilterBox-Line" />
                    <div className="phonesTabletsLeft-FilterBox-Select">
                      <Checkbox style={{ color: "red" }}>Phones Cover</Checkbox>
                      <Checkbox style={{ color: "red" }}>Phone Glass</Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        Tablets Cover
                      </Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        Tablets Glass
                      </Checkbox>
                      <Checkbox style={{ color: "red" }}>Laptop Cover</Checkbox>
                      <Checkbox style={{ color: "red" }}>Laptop Glass</Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        Monitor Glass
                      </Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        Airpods Cover
                      </Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        Watch Cover&Glass
                      </Checkbox>
                    </div>
                  </div>

                  {/* Size */}
                  <div className="phonesTabletsLeft-FilterBox">
                    <p className="phonesTabletsLeft-FilterBox-Text">Size</p>
                    <div className="phonesTabletsLeft-FilterBox-Line" />
                    <div className="phonesTabletsLeft-FilterBox-Select">
                      <Checkbox style={{ color: "red" }}>12-14 inch</Checkbox>
                      <Checkbox style={{ color: "red" }}>13 inch</Checkbox>
                      <Checkbox style={{ color: "red" }}>14 inch</Checkbox>
                      <Checkbox style={{ color: "red" }}>14-16 inch</Checkbox>
                      <Checkbox style={{ color: "red" }}>15 inch</Checkbox>
                      <Checkbox style={{ color: "red" }}>15 inch</Checkbox>
                      <Checkbox style={{ color: "red" }}>15 inch</Checkbox>
                    </div>
                  </div>

                  {/* Qty */}
                  <div className="phonesTabletsLeft-FilterBox">
                    <p className="phonesTabletsLeft-FilterBox-Text">Qty</p>
                    <div className="phonesTabletsLeft-FilterBox-Line" />
                    <div className="phonesTabletsLeft-FilterBox-Select">
                      <Checkbox style={{ color: "red" }}>1 Pcs</Checkbox>
                      <Checkbox style={{ color: "red" }}>2 Pcs</Checkbox>
                    </div>
                  </div>

                  {/* Border */}
                  <div className="phonesTabletsLeft-FilterBox">
                    <p className="phonesTabletsLeft-FilterBox-Text">Border</p>
                    <div className="phonesTabletsLeft-FilterBox-Line" />
                    <div className="phonesTabletsLeft-FilterBox-Select">
                      <Checkbox style={{ color: "red" }}>Yes</Checkbox>
                      <Checkbox style={{ color: "red" }}>No</Checkbox>
                    </div>
                  </div>

                  {/* Watch */}
                  <div className="phonesTabletsLeft-FilterBox">
                    <p className="phonesTabletsLeft-FilterBox-Text">Watch</p>
                    <div className="phonesTabletsLeft-FilterBox-Line" />
                    <div className="phonesTabletsLeft-FilterBox-Select">
                      <Checkbox style={{ color: "red" }}>40mm</Checkbox>
                      <Checkbox style={{ color: "red" }}>41mm</Checkbox>
                      <Checkbox style={{ color: "red" }}>44mm</Checkbox>
                      <Checkbox style={{ color: "red" }}>45mm</Checkbox>
                      <Checkbox style={{ color: "red" }}>49mm</Checkbox>
                    </div>
                  </div>

                  {/* Airpods */}
                  <div className="phonesTabletsLeft-FilterBox">
                    <p className="phonesTabletsLeft-FilterBox-Text">Airpods</p>
                    <div className="phonesTabletsLeft-FilterBox-Line" />
                    <div className="phonesTabletsLeft-FilterBox-Select">
                      <Checkbox style={{ color: "red" }}>Airpods 2</Checkbox>
                      <Checkbox style={{ color: "red" }}>Airpods 3</Checkbox>
                      <Checkbox style={{ color: "red" }}>Airpods Pro</Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        Airpods Pro 2
                      </Checkbox>
                    </div>
                  </div>

                  {/* Device */}
                  <div className="phonesTabletsLeft-FilterBox">
                    <p className="phonesTabletsLeft-FilterBox-Text">Device</p>
                    <div className="phonesTabletsLeft-FilterBox-Line" />
                    <div className="phonesTabletsLeft-FilterBox-Select">
                      <Checkbox style={{ color: "red" }}>
                        iphone 15 Min
                      </Checkbox>
                      <Checkbox style={{ color: "red" }}>iphone 15 </Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        iphone 15 Pro
                      </Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        iphone 15 Pro Max
                      </Checkbox>
                      <Checkbox style={{ color: "red" }}>OnePlus 7 </Checkbox>
                      <Checkbox style={{ color: "red" }}>
                        OnePlus 7 Pro
                      </Checkbox>
                    </div>
                  </div>
                </div>
              </Drawer>
              {/* Sort By: */}
              <div className="phonesTabletsRight-HeaderSortBy">
                <h3>Sort By Price: </h3>
                <Select
                  labelInValue
                  defaultValue={{
                    value: "Default",
                    label: "Default",
                  }}
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "1",
                      label: "Default",
                    },
                    {
                      value: "2",
                      label: "Low To High",
                    },
                    {
                      value: "3",
                      label: "High to Low",
                    },
                  ]}
                />
              </div>
            </div>
            {/* Product Demo Box */}
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
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
              <OffersCard
                name="Iphone 15 Pro"
                percentage="14"
                number="125000"
              />

              <OffersCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
