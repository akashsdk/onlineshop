import React, { useState } from "react";
import "./PhonesTablets.css";
import Footer from "../Components/Footer";

import { Button, Flex, Drawer, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";

export default function PhonesTablets() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize("default");
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
                length: 24,
              },
              (_, i) => (
                <Button className="phonesTabletsTopBox-Button" shape="round">
                  <p className="phonesTabletsTopBox-ButtonText">Download</p>
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
          <div className="phonesTabletsLeftBox">Left</div>
          <div className="phonesTabletsRightBox">
            <div className="phonesTabletsRight-Header">
              <h3 className="phonesTabletsRight-HeaderText">
                Phones & Tablets
              </h3>
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
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
