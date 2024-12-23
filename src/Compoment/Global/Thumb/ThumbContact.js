import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ThumbContact.css";
import ThumbForm from "./ThumbForm";
const ThumbContact = () => {

  return (
    <div className="thumb-contact">
      <Row>
        <Col lg={5}>
          <div className="info-contact flex flex-column">
            <div className="heading-contact">
              <h3>Thông tin liên hệ</h3>
              <p>
                D.A.C ở đây để giúp đỡ! Nếu bạn có bất kỳ câu hỏi nào hoặc muốn
                thảo luận về cách dịch vụ SEO và tiếp thị kỹ thuật số của D.A.C
                có thể mang lại lợi ích cho doanh nghiệp của bạn
              </p>
            </div>
            <div className="social-contact">
              <ul>
                <li>
                  <Link to="">
                    <div className="flex flex-row">
                      <i className="fa-solid fa-paper-plane"></i>
                      <div className="text">
                        <h4>Địa chỉ</h4>
                        <p>
                          Đường số 23, Phường 11, Quận 6, Thành phố Hồ Chí Minh,
                          Việt Nam
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="tel:0983731545">
                    <div className="flex flex-row">
                      <i className="fa-solid fa-paper-plane"></i>
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
                      <i className="fa-solid fa-paper-plane"></i>
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
            <h3>Để lại thông tin tại đây</h3>
            <ThumbForm></ThumbForm>
        </Col>
      </Row>
    </div>
  );
};

export default ThumbContact;
