import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConvertPrice from "../Thumb/ConvertPrice";
import "./Step.css";
import ThumbForm from "../Thumb/ThumbForm";
const FirstStep = (props) => {
  const product = props.product;
  console.log(product);
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
    <div>
      <div className="info-product">
        <Container>
          <Row>
            <Col lg={2}>
              <img src={product.imagethumb} alt="" />
            </Col>
            <Col lg={5}>
              <h3>{product.title}</h3>
            </Col>
            <Col lg={3}>
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
            </Col>
            <Col lg={2}>
              <ConvertPrice price={product.price * count}></ConvertPrice>
            </Col>
          </Row>
          <Row>
            <div className="total-price flex flex-row">
              <p id="giatri">Giá trị đơn hàng: </p>
              <ConvertPrice price={product.price * count}></ConvertPrice>
            </div>
          </Row>
          <Row>
            <h3>Thông tin khách hàng</h3>
            <ThumbForm></ThumbForm>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FirstStep;
