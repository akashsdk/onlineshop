import React from "react";
import "./Style/Contacts.css";
import Footer from "../Components/Footer";
import Login from '../AccountPage/Login';
import ForgetPassword from '../AccountPage/ForgetPassword';
import Register from '../AccountPage/Register';

export default function Account() {
  return (
    <div className="overflowBox">
      <div>Account</div>
      <Footer />
    </div>
  );
}
