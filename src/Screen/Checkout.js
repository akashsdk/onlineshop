import React, { useState } from "react";
import "./Style/Checkout.css";
import "./Style/Cart.css";
import Footer from "../Components/Footer";
import { Steps, Input, Button, Result, Modal } from "antd";
import { Link } from "react-router-dom";

const { TextArea } = Input;

export default function Checkout() {
  const [page, setPage] = useState(1);

  //   select

  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [select3, setSelect3] = useState("");
  const [isSelect2Disabled, setIsSelect2Disabled] = useState(true);
  const [isSelect3Disabled, setIsSelect3Disabled] = useState(true);

  const handleSelect1Change = (e) => {
    const value = e.target.value;
    setSelect1(value);
    setSelect2("");
    setSelect3("");
    setIsSelect2Disabled(value === "");
    setIsSelect3Disabled(true);
  };

  const handleSelect2Change = (e) => {
    const value = e.target.value;
    setSelect2(value);
    setSelect3("");
    setIsSelect3Disabled(value === "");
  };

  const handleSelect3Change = (e) => {
    const value = e.target.value;
    setSelect3(value);
  };

  //   Radio Buttons (Step-2)

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderOutput = () => {
    switch (selectedOption) {
      case "A":
        return <h3>Cost: 100 TK</h3>;
      case "B":
        return <h3>Cost: 110 TK</h3>;
      case "C":
        return <h3>Cost: 120 TK</h3>;
      default:
        return <h3>Select an option</h3>;
    }
  };

  const renderOutput4 = () => {
    switch (selectedOption) {
      case "A":
        return <p className="cartTopMidPriceP">100</p>;
      case "B":
        return <p className="cartTopMidPriceP">120</p>;
      case "C":
        return <p className="cartTopMidPriceP">120</p>;
      default:
        return <p className="cartTopMidPriceP">You didn't select the option</p>;
    }
  };

  //   Radio Buttons (Step-3)

  const [selectedOption2, setSelectedOption2] = useState("");

  const handleOptionChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const renderOutput2 = () => {
    switch (selectedOption2) {
      case "D":
        return <h3>Cash on Delivery</h3>;
      case "E":
        return <h3>bKash NO: 015********</h3>;
      case "F":
        return <h3>Nagag NO: 015********</h3>;
      case "G":
        return <h3>Rocket NO: 015********</h3>;
      default:
        return <h3>Select an option</h3>;
    }
  };

  const renderOutput3 = () => {
    switch (selectedOption2) {
      case "D":
        return <p className="cartTopMidPriceP">Cash on Delivery</p>;
      case "E":
        return <p className="cartTopMidPriceP">bKash</p>;
      case "F":
        return <p className="cartTopMidPriceP">Nagag</p>;
      case "G":
        return <p className="cartTopMidPriceP">Rocket</p>;
      default:
        return <p className="cartTopMidPriceP">You didn't select the option</p>;
    }
  };

  //   Modal

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setPage(2);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  // Value send

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="overflowBox">
      {page === 1 ? (
        <div className="checkoutBody">
          <div className="checkoutBox">
            {/* Step-1 Customer Information */}
            <div className="checkoutDiv">
              <div>
                <h3>Step-1</h3>
                <h3 style={{ marginTop: "-10px", opacity: ".5" }}>
                  Customer Information
                </h3>
              </div>
              <div className="checkoutBoxLine" />
              <div className="checkoutBoxDiv">
                <div className="checkoutBoxDiv2">
                  <p className="checkoutBoxText">First Name* </p>
                  <Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="checkoutBoxDiv2">
                  <p className="checkoutBoxText">Last Name </p>
                  <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>

              <div className="checkoutBoxDiv">
                <div className="checkoutBoxDiv2">
                  <p className="checkoutBoxText">Division* </p>
                  <select
                    className="checkoutBoxSelect"
                    value={select1}
                    onChange={handleSelect1Change}
                  >
                    <option value="">Choose Your Division</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Sylhet">Sylhet</option>
                  </select>
                </div>
                <div className="checkoutBoxDiv2">
                  <p className="checkoutBoxText">City* </p>
                  <select
                    className="checkoutBoxSelect"
                    value={select2}
                    onChange={handleSelect2Change}
                    disabled={isSelect2Disabled}
                  >
                    <option value="">Choose Your City</option>
                    {select1 === "Barishal" ? (
                      <>
                        <option value="Barisal">Barisal</option>
                        <option value="Barguna">Barguna</option>
                        <option value="Bhola">Bhola</option>
                        <option value="Jhalokati">Jhalokati</option>
                        <option value="Patuakhali">Patuakhali</option>
                        <option value="	Pirojpur"> Pirojpur</option>
                      </>
                    ) : select1 === "Chittagong" ? (
                      <>
                        <option value="Bandarban">Bandarban</option>
                        <option value="Brahmanbaria">Brahmanbaria</option>
                        <option value="Chandpur">Chandpur</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Comilla">Comilla</option>
                        <option value="Cox's Bazar">Cox's Bazar</option>
                        <option value="Feni">Feni</option>
                        <option value="Khagrachhari">Khagrachhari</option>
                        <option value="	Lakshmipur"> Lakshmipur</option>
                        <option value="Maijdee">Maijdee</option>
                        <option value="Rangamati">Rangamati</option>
                      </>
                    ) : select1 === "Dhaka" ? (
                      <>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Gazipur">Gazipur </option>
                        <option value="Kishoreganj"> Kishoreganj</option>
                        <option value="Manikganj">Manikganj </option>
                        <option value="Munshiganj"> Munshiganj</option>
                        <option value="Narayanganj"> Narayanganj</option>
                        <option value="Narsingdi"> Narsingdi</option>
                        <option value="Tangail"> Tangail</option>
                        <option value="Faridpur"> Faridpur</option>
                        <option value="Gopalganj"> Gopalganj</option>
                        <option value="Madaripur">Madaripur </option>
                        <option value="Rajbari"> Rajbari</option>
                        <option value="Shariatpur"> Shariatpur</option>
                      </>
                    ) : select1 === "Khulna" ? (
                      <>
                        <option value="Bagerhat"> Bagerhat</option>
                        <option value="Chuadanga"> Chuadanga</option>
                        <option value="Jashore"> Jashore</option>
                        <option value="Jhenaidah"> Jhenaidah</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Kushtia"> Kushtia</option>
                        <option value="Magura">Magura </option>
                        <option value="Meherpur"> Meherpur</option>
                        <option value="Narail"> Narail</option>
                        <option value="	Satkhira">Satkhira </option>
                      </>
                    ) : select1 === "Rajshahi" ? (
                      <>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Chapainawabganj">
                          Chapainawabganj{" "}
                        </option>
                        <option value="Natore"> Natore</option>
                        <option value="Naogaon"> Naogaon</option>
                        <option value="Pabna"> Pabna</option>
                        <option value="Sirajganj"> Sirajganj</option>
                        <option value="Bogra"> Bogra</option>
                        <option value="Joypurhat"> Joypurhat</option>
                      </>
                    ) : select1 === "Mymensingh" ? (
                      <>
                        <option value="Jamalpur">Jamalpur</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Netrokona">Netrokona</option>
                        <option value="Sherpur">Sherpur</option>
                      </>
                    ) : select1 === "Sylhet" ? (
                      <>
                        <option value="Habiganj"> Habiganj</option>
                        <option value="Moulvibazar"> Moulvibazar</option>
                        <option value="Sunamganj"> Sunamganj</option>
                        <option value="Sylhet">Sylhet</option>
                      </>
                    ) : select1 === "Rangpur" ? (
                      <>
                        <option value="Dinajpur"> Dinajpur</option>
                        <option value="Kurigram">Kurigram </option>
                        <option value="Gaibandha">Gaibandha </option>
                        <option value="Lalmonirhat"> Lalmonirhat</option>
                        <option value="Nilphamari"> Nilphamari</option>
                        <option value="Panchagarh"> Panchagarh</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Thakurgaon"> Thakurgaon</option>
                      </>
                    ) : null}
                  </select>
                </div>
              </div>

              <div className="checkoutBoxDiv">
                <div className="checkoutBoxDiv2">
                  <p className="checkoutBoxText">Area* </p>
                  <select
                    className="checkoutBoxSelect"
                    value={select3}
                    onChange={handleSelect3Change}
                    disabled={isSelect3Disabled}
                  >
                    <option value="">Choose Your Area</option>
                    {select2 === "Kushtia" ? (
                      <>
                        <option value="Bheramara">Bheramara</option>
                        <option value="Daulatpur"> Daulatpur</option>
                        <option value="Khoksa"> Khoksa</option>
                        <option value="Kumarkhali"> Kumarkhali</option>
                        <option value="Kushtia"> Kushtia Sadar</option>
                        <option value="Mirpur"> Mirpur</option>
                      </>
                    ) : select2 === "abir" ? (
                      <>
                        <option value="tree">Tree Name</option>
                        <option value="toy">Toy Name</option>
                      </>
                    ) : select2 === "bristy" ? (
                      <>
                        <option value="tree">Tree Name</option>
                        <option value="plays">Plays Name</option>
                      </>
                    ) : select2 === "promy" ? (
                      <>
                        <option value="tree">Tree Name</option>
                        <option value="toy">Toy Name</option>
                      </>
                    ) : null}
                  </select>
                </div>
                <div className="checkoutBoxDiv2">
                  <p className="checkoutBoxText">Post Code</p>
                  <Input placeholder="Post Code" />
                </div>
              </div>

              <div className="checkoutBoxDiv3">
                <p className="checkoutBoxText">Email </p>
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="checkoutBoxDiv3">
                <p className="checkoutBoxText">Phone* </p>
                <Input
                  placeholder="Phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="checkoutBoxDiv3">
                <p className="checkoutBoxText">Address* </p>
                <Input
                  placeholder="Address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="checkoutBoxDiv3">
                <p className="checkoutBoxText"> Comment (Optional) </p>
                <TextArea
                  showCount
                  maxLength={100}
                  placeholder="Write any Comment here (Optional)"
                />
              </div>
              <div style={{ height: "50px" }} />
            </div>
            {/* Step-2 and 3 Delivery Method */}
            <div className="checkoutDivLeft">
              {/* Step-2 Delivery Method */}
              <div className="checkoutDiv2">
                <div>
                  <h3>Step-2</h3>
                  <h3 style={{ marginTop: "-10px", opacity: ".5" }}>
                    Delivery Method
                  </h3>
                </div>
                <div className="checkoutBoxLine" />

                <div className="checkoutBoxInput-RadioDiv">
                  <label style={{ fontSize: "20px" }}>
                    <input
                      type="radio"
                      value="A"
                      checked={selectedOption === "A"}
                      onChange={handleOptionChange}
                    />
                    Red-X [48hrs to 72 hrs]
                  </label>
                </div>
                <div className="checkoutBoxInput-RadioDiv">
                  <label style={{ fontSize: "20px" }}>
                    <input
                      type="radio"
                      value="B"
                      checked={selectedOption === "B"}
                      onChange={handleOptionChange}
                    />
                    Express Delivery [24hrs to 72hrs]
                  </label>
                </div>
                <div className="checkoutBoxInput-RadioDiv">
                  <label style={{ fontSize: "20px" }}>
                    <input
                      type="radio"
                      value="C"
                      checked={selectedOption === "C"}
                      onChange={handleOptionChange}
                    />
                    Outside Dhaka | Sundarban (48hrs to 72hrs)
                  </label>
                </div>
                {renderOutput()}

                <div style={{ height: "50px" }} />
              </div>
              {/* Step-3 Payment Method */}
              <div className="checkoutDiv2">
                <div>
                  <h3>Step-3</h3>
                  <h3 style={{ marginTop: "-10px", opacity: ".5" }}>
                    Payment Method
                  </h3>
                </div>
                <div className="checkoutBoxLine" />

                <div className="checkoutBoxInput-RadioDiv">
                  <label style={{ fontSize: "20px" }}>
                    <input
                      type="radio"
                      value="D"
                      checked={selectedOption2 === "D"}
                      onChange={handleOptionChange2}
                    />
                    Cash on Delivery
                  </label>
                </div>

                <div className="checkoutBoxInput-RadioDiv">
                  <label style={{ fontSize: "20px" }}>
                    <input
                      type="radio"
                      value="E"
                      checked={selectedOption2 === "E"}
                      onChange={handleOptionChange2}
                    />
                    Online Payment bKash
                  </label>
                </div>

                <div className="checkoutBoxInput-RadioDiv">
                  <label style={{ fontSize: "20px" }}>
                    <input
                      type="radio"
                      value="F"
                      checked={selectedOption2 === "F"}
                      onChange={handleOptionChange2}
                    />
                    Online Payment Nagag
                  </label>
                </div>

                <div className="checkoutBoxInput-RadioDiv">
                  <label style={{ fontSize: "20px" }}>
                    <input
                      type="radio"
                      value="G"
                      checked={selectedOption2 === "G"}
                      onChange={handleOptionChange2}
                    />
                    Online Payment Rocket
                  </label>
                </div>
                {renderOutput2()}

                <div style={{ height: "50px" }} />
              </div>
            </div>
          </div>
          {/* Button Box */}
          <div
            style={{
              display: "flex",
              width: "95%",
              marginLeft: "2.5%",
              marginTop: "50px",
            }}
          >
            <Link to="/My-Cart">
              <Button style={{ flex: "1" }} size={"large"} type="dashed" danger>
                Go Back Cart
              </Button>
            </Link>
            <div style={{ flex: "3" }}></div>
            <Button
              style={{ flex: "1" }}
              onClick={showModal}
              size={"large"}
              type="primary"
              danger
            >
              Proceed To Payment
            </Button>
            <Modal
              title="Apply Coupon and Voucher"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <h3>You Already Apply Coupon and Voucher, So Press 'OK'</h3>
            </Modal>
          </div>
        </div>
      ) : page === 2 ? (
        <div className="checkoutBody">
          <div style={{ height: "30px" }} />
          <h2 style={{ opacity: ".7" }}>Order Overview</h2>

          <div className="cartBody">
            <div className="cartBox">
              <p>Product Information</p>
              <div className="cartTopBox">
                <div className="cartTopImg">
                  <h3>Image</h3>
                </div>
                <div className="cartTopText">
                  <h3>Product</h3>
                </div>
                <div className="cartTopModel">
                  <h3>Model</h3>
                </div>
                <div className="cartTopQuantity">
                  <h3>Quantity</h3>
                </div>
                <div className="cartTopPrice">
                  <h3>Unit Price</h3>
                </div>
                <div className="cartTopTotal">
                  <h3>Total</h3>
                </div>
              </div>

              <div className="cartTopBox2">
                <div className="cartTopImg2">
                  <p>Image</p>
                </div>
                <div className="cartTopText2">
                  <p>Product</p>
                </div>
                <div className="cartTopModel2">
                  <p>Model</p>
                </div>
                <div className="cartTopQuantity2">
                  <p>1 x</p>
                </div>
                <div className="cartTopPrice2">
                  <p>Unit Price</p>
                </div>
                <div className="cartTopTotal">
                  <p>3440</p>
                </div>
              </div>

              <div className="cartTopBox2">
                <div className="cartTopImg2">
                  <p>Image</p>
                </div>
                <div className="cartTopText2">
                  <p>Product</p>
                </div>
                <div className="cartTopModel2">
                  <p>Model</p>
                </div>
                <div className="cartTopQuantity2">
                  <p>1 x</p>
                </div>
                <div className="cartTopPrice2">
                  <p>Unit Price</p>
                </div>
                <div className="cartTopTotal">
                  <p>3440</p>
                </div>
              </div>

              <div className="cartTopLineDiv" />

              <div className="cartTopMidPriceDiv">
                <div className="cartTopMidPriceDox">
                  <h3>Sub-Total:</h3>
                  <p className="cartTopMidPriceP">BDT 5000</p>
                </div>

                <div className="cartTopMidPriceDox2">
                  <h3>Delivery Charge:</h3>
                  {renderOutput4()}
                </div>

                <div className="cartTopMidPriceDox2">
                  <h3>Total Discount:</h3>
                  <p className="cartTopMidPriceP">0</p>
                </div>

                <div className="cartTopMidPriceDox2">
                  <h3>Total:</h3>
                  <p className="cartTopMidPriceP">BDT 7200</p>
                </div>

                <div className="cartTopMidPriceDox2">
                  <h3>Payment Method:</h3>
                  {renderOutput3()}
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            {/* Screen Up to 1000px */}
            <div className="checkoutInformationBox">
              <p>Delivery Information</p>
              <div className="checkoutInformationTopBox">
                <div style={{ flex: "1" }}>
                  <h3>Name</h3>
                </div>
                <div style={{ flex: "1" }}>
                  <h3>Email</h3>
                </div>

                <div style={{ flex: "1" }}>
                  <h3>Phone</h3>
                </div>

                <div style={{ flex: "1.5" }}>
                  <h3>Address</h3>
                </div>
              </div>
            </div>

            <div className="checkoutInformationBox2">
              <div style={{ flex: "1" }}>
                <p>
                  {firstName} {lastName}
                </p>
              </div>
              <div style={{ flex: "1" }}>
                <p>{email}</p>
              </div>

              <div style={{ flex: "1" }}>
                <p>{phone}</p>
              </div>

              <div style={{ flex: "1.5" }}>
                <p>{address}</p>
              </div>
            </div>

            {/* Screen Below 1000px */}
            <div className="checkoutInformationBox3">
              <p>Delivery Information</p>
              <div className="cartTopLineDiv" />
              <div style={{ display: "flex" }}>
                <div className="checkoutInformationTopBox3">
                  <h3>Name:</h3>
                  <h3>Email:</h3>
                  <h3>Phone:</h3>
                  <h3>Address:</h3>
                </div>
                <div className="checkoutInformationTop-Box3">
                  <h3 style={{ opacity: ".6" }}>
                    {firstName} {lastName}
                  </h3>
                  <h3 style={{ opacity: ".6" }}>{email}</h3>
                  <h3 style={{ opacity: ".6" }}>{phone}</h3>
                  <h3 style={{ opacity: ".6" }}>{address}</h3>
                </div>
              </div>
            </div>
            <div style={{ height: "50px" }} />
          </div>

          {/* Button Box */}
          <div
            style={{
              display: "flex",
              width: "95%",
              marginLeft: "2.5%",
              marginTop: "50px",
            }}
          >
            <Button
              onClick={() => {
                setPage(1);
              }}
              style={{ flex: "1" }}
              size={"large"}
              type="dashed"
              danger
            >
              Go Back
            </Button>
            <div style={{ flex: "3" }}></div>
            <Button
              style={{ flex: "1" }}
              onClick={() => {
                setPage(3);
              }}
              size={"large"}
              type="primary"
              danger
            >
              Subbmit
            </Button>
          </div>
        </div>
      ) : page === 3 ? (
        <div>
          <Result
            status="success"
            title="Successfully To Purchased Your Oder"
            subTitle="Order number: 2017182818828182881, Thanks for being with us😍"
            extra={[
              <Link to="/">
                <Button
                  style={{ flex: "1" }}
                  size={"large"}
                  type="dashed"
                  danger
                >
                  Continue Shopping
                </Button>
              </Link>,
            ]}
          />
        </div>
      ) : (
        <h1> Error page</h1>
      )}

      {/* Progress */}
      {page === 1 ? (
        <div className="checkoutProgress">
          <h3 className="checkoutProgressText">Progress</h3>
          <Steps
            className="checkoutProgressSteps"
            size="small"
            current={1}
            items={[
              {
                title: "Information",
              },
              {
                title: "Overview",
              },
              {
                title: "Purchased",
              },
            ]}
          />
        </div>
      ) : page === 2 ? (
        <div className="checkoutProgress">
          <h3 className="checkoutProgressText">Progress</h3>
          <Steps
            className="checkoutProgressSteps"
            size="small"
            current={2}
            items={[
              {
                title: "Information",
              },
              {
                title: "Overview",
              },
              {
                title: "Purchased",
              },
            ]}
          />
        </div>
      ) : page === 3 ? (
        <div className="checkoutProgress">
          <h3 className="checkoutProgressText">Progress</h3>
          <Steps
            className="checkoutProgressSteps"
            size="small"
            current={3}
            items={[
              {
                title: "Information",
              },
              {
                title: "Overview",
              },
              {
                title: "Purchased",
              },
            ]}
          />
        </div>
      ) : (
        <h1> Error page</h1>
      )}

      <Footer />
    </div>
  );
}
