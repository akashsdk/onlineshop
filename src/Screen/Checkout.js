import React, { useState } from "react";
import "./Style/Checkout.css";
import Footer from "../Components/Footer";
import { Steps, Input, Button } from "antd";

const { TextArea } = Input;

export default function Checkout() {
  const [page, setPage] = useState(1);

  return (
    <div className="overflowBox">
      <div className="checkoutBody">
        <div className="checkoutBox">
          <div className="checkoutDiv">
            <div >
              <h3>Step-1</h3>
              <h3 style={{marginTop:'-10px', opacity:'.5'}}>Customer Information</h3>
            </div>
            <div className="checkoutBoxLine"/>
            <div  className="checkoutBoxDiv">
              <div className="checkoutBoxDiv2">
                <p className="checkoutBoxText">First Name* </p>
                <Input placeholder="First Name" />
              </div>
              <div className="checkoutBoxDiv2">
                <p className="checkoutBoxText">Last Name </p>
                <Input placeholder="Last Name" />
              </div>
            </div>
            <div className="checkoutBoxDiv3">
              <p className="checkoutBoxText">Email </p>
              <Input placeholder="Email" />
            </div>
            <div className="checkoutBoxDiv3">
              <p className="checkoutBoxText">Phone* </p>
              <Input placeholder="Phone" />
            </div>
            <div className="checkoutBoxDiv3">
              <p className="checkoutBoxText">Address* </p>
              <Input placeholder="Address" />
            </div>
            <div className="checkoutBoxDiv3">
              <p className="checkoutBoxText"> Comment (Optional) </p>
              <TextArea
                showCount
                maxLength={100}
                placeholder="Write any Comment here (Optional)"
              />
            </div>
            <div style={{height:'50px'}}/>
          </div>
          <div className="checkoutDiv">
          <div >
              <h3>Step-2</h3>
              <h3 style={{marginTop:'-10px', opacity:'.5'}}>Delivery Method</h3>
            </div>
            <div className="checkoutBoxLine"/>

            <div style={{height:'50px'}}/>
          </div>
        </div>
        <div>
          <h3>Progress</h3>
          <Steps
            size="small"
            current={1}
            items={[
              {
                title: "Finished",
              },
              {
                title: "In Progress ",
              },
              {
                title: "Waiting",
              },
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
