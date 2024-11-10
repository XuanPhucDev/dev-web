import React from "react";
import "./CardProduct.css";
import {  Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseCart } from "../../../Context/Data/Cart";
import ConvertPrice from "../Thumb/ConvertPrice";

const CardProduct = ({id,image,title,description,price}) => {
  const {handleAddToCart} = UseCart();
  return (
    <div className="thumb">
      <Link to={`/product/${id}`}>
      <img
        src={image}
        alt={title}
      />
      <h3>{title}</h3>
      </Link>
      <ConvertPrice price={price}></ConvertPrice>
      <Button variant="primary" onClick={()=>handleAddToCart({id,image,title,description,price})}>Add to card</Button>
    </div>
  )
};

export default CardProduct;