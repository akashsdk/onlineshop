import React from "react";
import "./Category.css";
import { Button } from "antd";

import img from "../Icon/tablet.png"

export default function Category(props) {
  return <Button className="categoryBody">
    <div className="categoryHover">
    <img src={props.categoryImg} className="categoryImg"/>
    <p className="categoryText1">{ props.categoryFastText }</p>
    <p className="categoryText2">{ props.categoryScendText }</p>
    </div>
  </Button>;
}
