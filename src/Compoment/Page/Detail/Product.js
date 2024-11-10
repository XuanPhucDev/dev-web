import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import SeoProduct from "../Product/SeoProduct";
import { UseCart } from "../../../Context/Data/Cart";
import useAxios from "../../../Context/API/UseAxios";
import ConvertPrice from "../../Global/Thumb/ConvertPrice";

const Product = () => {
  const { searchQuery } = useParams();
  const { handleAddToCart } = UseCart();

  const product = useAxios(
    "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing"
  ).find((item) => item.id === searchQuery);

  const [count, setCount] = useState(1);

  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };
  return (
    <>
      <Container>
        <Row className="product-detail-container">
          <Col lg={5} className="product-image-section">
            <div className="product-image-main">
              <img
                src={product && product.imagethumb}
                alt={product && product.title}
              />
            </div>
          </Col>

          <Col lg={7} className="product-info-section">
            <h1>{product && product.title}</h1>
              <ConvertPrice price={product && product.price}></ConvertPrice>
            <span type="minus" onClick={() => handleQuantity("minus")}>
              <i className="fa fa-minus" aria-hidden="true"></i>
            </span>
            <input
              id="input-quantity"
              type="number"
              name="quantity"
              value={count}
              disabled="disabled"
            />
            <span type="plus" onClick={() => handleQuantity("plus")}>
              <i className="fa fa-plus"></i>
            </span>

            <h4>Đặc điểm nổi bật</h4>
            <p className="product-features">{product && product.description}</p>
            <div className="product-actions">
              <button className="order-now-button">Đặt Hàng</button>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Thêm Vào Giỏ Hàng
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={8}>
            <SeoProduct
              id={product && product.id}
              image={product && product.image}
              title={product && product.title}
              description={product && product.description}
            ></SeoProduct>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
