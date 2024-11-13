import React from "react";
import { Link } from "react-router-dom";
import "./ThumbProductMarketing.css";
const ThumbProductMarketing = (props) => {
  return (
    <div className="thumb-product-marketing">
      <Link to={`/product/${props.id}`}>
        <img src={props.images} alt={props.title} />
        <h4>{props.title}</h4>
      </Link>
    </div>
  );
};

export default ThumbProductMarketing;
