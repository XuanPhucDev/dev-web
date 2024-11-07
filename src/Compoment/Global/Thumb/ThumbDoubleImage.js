import React from "react";
import "./ThumbDoubleImage.css";

import icon1 from "../../../Asset/Images/Homepage/icon-person1.png";
import icon2 from "../../../Asset/Images/About-Us/Element-1.png";
const ThumbDoubleImage = (props) => {
  return (
    <div className="thumb-why-choose-us">
      <div className="user flex flex-row">
        <img id="user1" src={props.images1} alt="" />
        <img id="user2" src={props.images2} alt="" />
      </div>
      <div className="icon">
        <img id="icon1" src={icon1} alt="" />
        <img id="icon2" src={icon2} alt="" />
      </div>
    </div>
  );
};

export default ThumbDoubleImage;
