import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoDAC from "../../../Asset/Images/logo/logo-agency.png";
import "./HeaderNew.css";
import { NavLink, Link } from "react-router-dom";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import useAxios from "../../../Context/API/UseAxios";
import { UseCart } from "../../../Context/Data/DataCart";
import { useNavigate } from "react-router-dom";
const HeaderNew = () => {
  const [emailUser] = useState(localStorage.getItem("email"));
  const navigate = useNavigate();
  const brandName = "D.A.C";
  const dataAdmin = useAxios(
    "https://6724cb3bc39fedae05b2bf65.mockapi.io/categoryProduct/category"
  );
  const check = dataAdmin.find((item) => item.email === emailUser);
  const { cart } = UseCart();
  const handleInputSearch = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      navigate(`/search/${e.target.value}`);
    }
  };
  return (
    <div className="header-new">
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-page mb-3">
          <Container>
            <Row>
              <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={4}>
                <div className="logo">
                  <Link to="/" className="brands">
                    <img
                      src={logoDAC}
                      className="d-inline-block align-top"
                      alt="Logo"
                    />
                  </Link>
                </div>
              </Col>
              <Col xxl={6} xl={6} lg={5} md={5} sm={5} xs={4}>
                <div className="search">
                  <InputGroup>
                    <Form.Control
                      onKeyDown={handleInputSearch}
                      placeholder="Tìm kiếm sản phẩm..."
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </div>
              </Col>
              <Col xxl={4} xl={4} lg={5} md={0}>
                <div className="user">
                  <Row>
                    <Col lg={6} md={6}>
                      {check ? (
                        <div className="menu-item menu-user">
                          <NavLink to="/admin-page">
                            <span>
                              Xin chào, {check.role}
                            </span>
                          </NavLink>
                        </div>
                      ) : (
                        <div className="menu-user">
                          <NavLink to="/login">
                            <span>
                              <i className="fa-solid fa-user"></i> Đăng nhập
                            </span>
                          </NavLink>
                        </div>
                      )}
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="cart-header">
                        <Link to="/cart">
                          <span>
                            <i className="fa-solid fa-cart-shopping"></i> Giỏ
                            hàng{" "}
                            <i id="quantity">
                              {cart.reduce(
                                (sum, item) => sum + item.quantity,
                                0
                              )}
                            </i>
                          </span>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      {brandName} Xin Chào,
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 nav-menu-mobile">
                      <div className="menu-moblie">
                        <NavLink className="item-menu" to="/">
                          Trang Chủ
                        </NavLink>
                        <NavLink className="item-menu" to="/about-us">
                          Về Chúng Tôi
                        </NavLink>
                        <NavDropdown
                          title="Dịch vụ"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="/giai-phap-marketing">
                            Marketing Trọn Gói
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/pricing-plan">
                            Pricing Plan
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink className="item-menu" to="/product-category">
                          {/* Thiết kế - Thi Công */}
                          Themes - Plugin
                        </NavLink>
                        <NavLink className="item-menu" to="/blog">
                          Tin tức
                        </NavLink>
                        <NavLink className="item-menu" to="/contact">
                          Liên hệ
                        </NavLink>
                      </div>

                      {check ? (
                        <div className="menu-item menu-user-mobile">
                          <NavLink to="/admin-page">
                            <span id="admin-log">
                              Xin chào, <i className="fa-solid fa-user"></i>{" "}
                              {check.role}
                            </span>
                          </NavLink>
                          <div className="sub-menu-services">
                            <Link to="/user">Sửa hồ sơ</Link>
                            <Link to="/add-product">Thêm sản phẩm</Link>
                            <Link to="/list-product">Danh sách sản phẩm</Link>
                            <Link to="/logout">Đăng xuất</Link>
                          </div>
                        </div>
                      ) : (
                        <div className="menu-user-mobile">
                          <NavLink to="/login">
                            <span>
                              <i className="fa-solid fa-user"></i> Đăng nhập
                            </span>
                          </NavLink>
                        </div>
                      )}
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="menu-header menu-pc flex">
                  <NavLink className="item-menu" to="/">
                    Trang Chủ
                  </NavLink>
                  <NavLink className="item-menu" to="/about-us">
                    Về Chúng Tôi
                  </NavLink>
                  <NavLink className="item-menu hover-menu" to="/services">
                    Dịch vụ
                  </NavLink>
                  {/* <div className="sub-menu-services">
                      <Link to="/giai-phap-marketing">Marketing Trọn Gói</Link>
                      <Link to="/pricing-plan">Pricing Plan</Link>
                    </div> */}
                  <NavLink className="item-menu" to="/product-category">
                    {/* Thiết kế - Thi Công */}
                    Themes - Plugin
                  </NavLink>
                  <NavLink className="item-menu" to="/blog">
                    Tin tức
                  </NavLink>
                  <NavLink className="item-menu" to="/contact">
                    Liên hệ
                  </NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default HeaderNew;
