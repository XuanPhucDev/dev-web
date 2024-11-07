import React from "react";
import "./ThumbServices.css";
const ThumbServices = (props) => {
  return (
    <div className="thumb-services flex flex-column">
      <h4>{props.title}</h4>
      <img src={props.images} alt={props.title} />
      <p>{props.content}</p>
    </div>
  );
};

export default ThumbServices;
