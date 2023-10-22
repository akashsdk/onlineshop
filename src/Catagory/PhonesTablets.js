import React from "react";
import "./PhonesTablets.css";
import Footer from "../Components/Footer";

import { Button, Flex } from "antd";




export default function PhonesTablets() {
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
                <Button className="phonesTabletsTopBox-Button" shape="round"  >
                  <p className="phonesTabletsTopBox-ButtonText">Download</p>
                
              </Button>
              )
            )}
          </Flex>
        </div>
        <div style={{ height: "auto", width: "100%", marginTop:'40px' }}>
          <div>Left</div>
          <div>Right</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
