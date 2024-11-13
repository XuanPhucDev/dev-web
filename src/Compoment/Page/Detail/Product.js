import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import SeoProduct from "../Product/SeoProduct";
import { UseCart } from "../../../Context/Data/DataCart";
import useAxios from "../../../Context/API/UseAxios";
import ConvertPrice from "../../Global/Thumb/ConvertPrice";
import { useNavigate } from "react-router-dom";
import ThumbPopUpForm from "../../Global/Thumb/ThumbPopUpForm";
import ThumbQty from "../../Global/Thumb/ThumbQty";

const Product = () => {
  const { searchQuery } = useParams();
  const { handleAddToCart } = UseCart();
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    localStorage.getItem("BuyNow")
      ? JSON.parse(localStorage.getItem("BuyNow"))
      : []
  );
  const handleBuyNow = (product) => {
    const newCart = [product];
    newCart[0].quantity
      ? (newCart[0].quantity += 1)
      : (newCart[0].quantity = 1);
    console.log(newCart);
    setCart(newCart);
    localStorage.setItem("BuyNow", JSON.stringify(newCart));
    navigate("/cart/buy-now");
  };
  const product = useAxios(
    "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing"
  ).find((item) => item.id === searchQuery);
  return (
    <div className="detail-product space-compoment">
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
            <div className="info flex flex-row">
              <p>
                By <span>{product && product.user}</span>
              </p>
              <p>
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                {product && product.count} sales
              </p>
              <p id={product && product.update ? "active" : "normal"}>
                Recently Updated{" "}
                {product && product.update ? (
                  <i className="fa-solid fa-circle-check"></i>
                ) : (
                  <i className="fa-solid fa-circle-xmark"></i>
                )}{" "}
              </p>
              <p id={product && product.update ? "active" : "normal"}>
                Well Documented{" "}
                {product && product.update ? (
                  <i className="fa-solid fa-circle-check"></i>
                ) : (
                  <i className="fa-solid fa-circle-xmark"></i>
                )}{" "}
              </p>
            </div>
            <h1>{product && product.title}</h1>
            <ConvertPrice price={product && product.price}></ConvertPrice>
            <ThumbQty></ThumbQty>

            <h4>Đặc điểm nổi bật</h4>
            <p className="product-features">{product && product.description}</p>
            <div className="product-actions">
              <ThumbPopUpForm product={product}></ThumbPopUpForm>

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
    </div>
  );
};

export default Product;
