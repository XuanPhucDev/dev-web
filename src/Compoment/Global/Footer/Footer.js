import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logoCoffee from "../../../Asset/Images/logo/logo-agency.png";
import Social from "../Social/Social";

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
                  <a href="#" className="flex flex-row">
                    <span>Case Studies</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-row">
                    <span>Pricing Plans</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-row">
                    <span>Testimonials</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-row">
                    <span>Contact Us</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-row">
                    <span>Faq</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
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

                  <a href="#">
                    Đường số 23, Phường 11, Quận 6, Thành phố Hồ Chí Minh, Việt
                    Nam
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-paper-plane"></i>
                  <a href="tel:0983731545">0983.731.545</a>
                </li>
                <li>
                  <i className="fa-solid fa-paper-plane"></i>
                  <a href="mailto:xuanphucdev1907@gmail.com">
                    xuanphucdev1907@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <div className="footer-col-3 flex flex-column">
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-user"></i>Tài khoản
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-user"></i>Đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-user"></i>Hướng dẫn thanh toán
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-user"></i>Chính sách thanh toán
                  </a>
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
