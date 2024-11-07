import React from "react";
import "./ContactHomePage.css";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../Global/Title/Title";
import { Link } from "react-router-dom";
const ContactHomePage = () => {
  return (
    <div className="contact-homepage space-compoment">
      <Container>
        <Row>
          <Title des="Thông tin liên hệ" title="Liên hệ với D.A.C"></Title>
        </Row>
        <Row>
          <Col lg={5}>
            <div className="info-contact flex flex-column">
              <div className="heading-contact">
                <h3>Thông tin liên hệ</h3>
                <p>
                  D.A.C ở đây để giúp đỡ! Nếu bạn có bất kỳ câu hỏi nào hoặc
                  muốn thảo luận về cách dịch vụ SEO và tiếp thị kỹ thuật số của
                  D.A.C có thể mang lại lợi ích cho doanh nghiệp của bạn
                </p>
              </div>
              <div className="social-contact">
                <ul>
                  <li>
                    <Link to="">
                      <div className="flex flex-row">
                        <i class="fa-solid fa-paper-plane"></i>
                        <div className="text">
                          <h4>Địa chỉ</h4>
                          <p>
                            Đường số 23, Phường 11, Quận 6, Thành phố Hồ Chí
                            Minh, Việt Nam
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:0983731545">
                      <div className="flex flex-row">
                        <i class="fa-solid fa-paper-plane"></i>
                        <div className="text">
                          <h4>Gọi ngay cho D.A.C</h4>
                          <p>0983-731-545</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:xuanphucdev1907@gmail.com">
                      <div className="flex flex-row">
                        <i class="fa-solid fa-paper-plane"></i>
                        <div className="text">
                          <h4>Gửi mail cho D.A.C</h4>
                          <p>xuanphucdev1907@gmail.com</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div class="contact-form">
              <h3>Để lại thông tin tại đây</h3>
              <form action="/submit-form" method="POST">
                <div className="form-name flex flex-row">
                  <div class="form-group input-name">
                    <label for="firstname">Họ</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Họ của quý khách"
                      required
                    />
                  </div>
                  <div class="form-group input-name">
                    <label for="lastname">Tên</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Tên của quý khách" required />
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email"placeholder="Gmail của quý khách" required />
                </div>
                <div class="form-group">
                  <label for="phone">Số điện thoại</label>
                  <input
                    type="tel"
                    placeholder="Số điện thoại của quý khách"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="city">City</label>
                  <select id="city" name="city" required>
                    <option value="">Select your city</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                    <option value="Miami">Miami</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message">Thông tin thêm</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Nội dung thêm..."
                    required
                  ></textarea>
                </div>
                <div className="view-more">
                  <button type="submit">Gửi ngay</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactHomePage;
