import React, { useState } from "react";
import { UseCart } from "../../../Context/Data/DataCart";
import "./Card.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import HeadingPage from "../../Global/Title/HeadingPage";
import DataVoucher from "../../../Context/Data/DataVoucher";
import ConvertPrice from "../../Global/Thumb/ConvertPrice";
import ThumbCart from "../../Global/Thumb/ThumbCart";
import ThumbTableCart from "../../Global/Thumb/ThumbTableCart";
const Card = () => {
  const { cart, buyNow } = UseCart();
  const [errors, setErrors] = useState("");
  const [discount, setDiscount] = useState(0);
  const sum = buyNow
    ? buyNow.reduce((prev, current) => {
        return prev + current.quantity * current.price;
      }, 0)
    : cart.reduce((prev, current) => {
        return prev + current.quantity * current.price;
      }, 0);
  const [total, setTotal] = useState(
    buyNow
      ? buyNow.reduce((prev, current) => {
          return prev + current.quantity * current.price;
        }, 0)
      : cart.reduce((prev, current) => {
          return prev + current.quantity * current.price;
        }, 0)
  );
  
  const handleVoucher = (e) => {
    if (e.key === "Enter") {
      const check = DataVoucher.find((item) => item.name === e.target.value);
      if (check) {
        setDiscount(check.discount);
        setErrors("");
        setTotal(sum - sum * check.discount);
      } else {
        setErrors(
          "Mã Không Tồn Tại, Vui lòng nhập mã khác hoặc liên hệ với quản trị viên"
        );
        setTotal(sum);
      }
    }
  };

  return (
    <div className="page-cart">
      <HeadingPage title="Trang Giỏ Hàng"></HeadingPage>
      <Container>
        <div className="space-compoment"></div>
        <Row>
          <Col lg={8}>
            <ThumbTableCart></ThumbTableCart>
          </Col>
          <Col lg={4}>
            <div className="s_total">
              <div className="info">
                <div>Tổng Đơn Hàng: </div>
                <div className="total">
                  <ConvertPrice price={total}></ConvertPrice>
                </div>
              </div>
              <div className="voucher">
                <h5>Nhập mã giảm giá (nếu có): </h5>
                <input
                  onKeyDown={(e) => handleVoucher(e)}
                  id="input-quantity"
                  type="text"
                  name="quantity"
                  placeholder="Nhập mã giảm giá"
                />
                <p>{errors}</p>
              </div>
              <Link to="/order" className="s_button">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> MUA
                NGAY
              </Link>
            </div>
          </Col>
        </Row>
      </Container> 
    </div>
  );
};

export default Card;
