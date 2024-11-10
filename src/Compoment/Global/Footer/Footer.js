import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logoCoffee from "../../../Asset/Images/logo/logo-agency.png";
import Social from "../Social/Social";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer space-compoment">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={6}>
            <div className="footer-col-1 flex flex-column">
              <img src={logoCoffee} alt="" />
              <p>
                Bằng cách tối ưu hóa nội dung, tận dụng các từ khóa có liên quan
                và tuân thủ các phương pháp hay nhất, doanh nghiệp có thể đảm
                bảo vị trí nổi bật (SEO)
              </p>
              <Social></Social>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <div className="footer-col-2 flex flex-column">
              <h4>About Links</h4>
              <ul>
                <li>
                  <Link to="/case-studies" className="flex flex-row">
                    <span>Case Studies</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/pricing-plan" className="flex flex-row">
                    <span>Pricing Plans</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="flex flex-row">
                    <span>Testimonials</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex flex-row">
                    <span>Contact Us</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <div className="footer-col-3 flex flex-column">
              <h4>Get in touch</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-paper-plane"></i>

                  <Link to="#">
                    Đường số 23, Phường 11, Quận 6, Thành phố Hồ Chí Minh, Việt
                    Nam
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-paper-plane"></i>
                  <Link to="tel:0983731545">0983.731.545</Link>
                </li>
                <li>
                  <i className="fa-solid fa-paper-plane"></i>
                  <Link to="mailto:xuanphucdev1907@gmail.com">
                    xuanphucdev1907@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <div className="footer-col-3 footer-col-4 flex flex-column">
              <h4>Account</h4>
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa-solid fa-user"></i>Tài khoản
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-solid fa-user"></i>Đơn hàng
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-solid fa-user"></i>Hướng dẫn thanh toán
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-solid fa-user"></i>Chính sách thanh toán
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
