import React from "react";
import "./CardProduct.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseCart } from "../../../Context/Data/DataCart";
import ConvertPrice from "../Thumb/ConvertPrice";

const CardProduct = ({ id, image, title, description, price }) => {
  const { handleAddToCart } = UseCart();
  return (
    <div className="thumb">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <ConvertPrice price={price}></ConvertPrice>
      <div className="product-actions">
        <Button
          className="add-to-cart"
          onClick={() =>
            handleAddToCart({ id, image, title, description, price })
          }
        >
          Thêm vào giỏ hàng
        </Button>
        <Link to={`/product/${id}`}>
          <Button className="view-more">Xem chi tiết</Button>
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
