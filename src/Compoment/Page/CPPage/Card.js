import React, { useState } from "react";
import { UseCart } from "../../../Context/Data/Cart";
import "./Card.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import HeadingPage from "../../Global/Title/HeadingPage";
import DataVoucher from "../../../Context/Data/DataVoucher";
import ConvertPrice from "../../Global/Thumb/ConvertPrice";
const Card = () => {
  const { cart, handleQuantity, handleDelete } = UseCart();
  const [errors, setErrors] = useState("");
  const [discount, setDiscount] = useState(0);
  const sum = cart.reduce((prev, current) => {
    return prev + current.quantity * current.price;
  }, 0);
  const [total, setTotal] = useState(cart.reduce((prev, current) => {
    return prev + current.quantity * current.price;
  }, 0));

  const handleVoucher = (e) => {
    if (e.key === "Enter") {
      const check = DataVoucher.find((item) => item.name === e.target.value);
      if (check) {
        setDiscount(check.discount);
        setErrors("");
        setTotal(sum-(sum*check.discount));
      } else {
        setErrors(
          "Mã Không Tồn Tại, Vui lòng nhập mã khác hoặc liên hệ với quản trị viên"
        );
        setTotal(sum);
      }
    }
  };
  console.log(discount);

  return (
    <div className="page-cart">
      <HeadingPage title="Trang Giỏ Hàng"></HeadingPage>
      <Container>
        <div className="space-compoment"></div>
        <Row>
          <Col lg={8}>
            <table
              className="table-cart"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <tr>
                <th style={{ width: "20%" }}>Hình ảnh</th>
                <th style={{ width: "30%" }}>Sản Phẩm</th>
                <th style={{ width: "20%" }}>Số Lượng</th>
                <th style={{ width: "10%" }}>Giá</th>
                <th style={{ width: "10%" }}>Tạm Tính</th>
                <th style={{ width: "10%" }}>Xoá</th>
              </tr>
              {cart.map((item, index) => (
                <tr>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>
                    <h3 className="title">{item.title}</h3>
                  </td>
                  <td>
                    <span
                      type="minus"
                      onClick={() => handleQuantity("minus", index)}
                    >
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <input
                      id="input-quantity"
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      disabled="disabled"
                    />
                    <span
                      type="plus"
                      onClick={() => handleQuantity("plus", index)}
                    >
                      <i className="fa fa-plus"></i>
                    </span>
                  </td>
                  <td>
                    <ConvertPrice price={item.price}></ConvertPrice>
                  </td>
                  <td>
                    <ConvertPrice
                      price={item.price * item.quantity}
                    ></ConvertPrice>
                  </td>
                  <td>
                    <a href="javascript:;" onClick={() => handleDelete(index)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </table>
          </Col>
          <Col lg={4}>
            <div className="s_total">
              <div className="info">
                <div>Tổng Đơn Hàng: </div>
                <div className="total">
                  <ConvertPrice
                    price={total}
                  ></ConvertPrice>
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
