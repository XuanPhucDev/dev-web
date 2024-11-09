import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Vision.css";
import Title from "../../Global/Title/Title";
import { Link } from "react-router-dom";
const Vision = () => {
  return (
    <div className="vision space-compoment">
      <Container>
        <Row>
          <Col>
            <Title
              des="Về D.A.C"
              title="Tầm nhìn - Sứ Mệnh - Giá Trị Cốt Lõi"
            ></Title>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="our-value flex flex-row">
              <div className="overlay"></div>

              <div className="text">
                <h4>Tầm nhìn</h4>
                <p className="tagline">
                  Khám phá Đề xuất giá trị độc đáo của chúng tôi và cách chúng
                  tôi thúc đẩy tăng trưởng kinh doanh
                </p>
                <p>
                  Chúng tôi tự hào khi cung cấp một đề xuất giá trị vượt xa mong
                  đợi. Cách tiếp cận của chúng tôi tập trung vào việc hiểu
                  INSIDE doanh nghiệp của bạn
                </p>
                <div className="view-more">
                  <Link to="/services">
                    Xem Thêm <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="col-right flex flex-row">
              <div className="our-mission flex flex-row">
                <div className="headline flex flex-row">
                  <h4>Sứ mệnh </h4>

                  <div className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <p className="tagline">
                  Khám phá Đề xuất giá trị độc đáo của chúng tôi và cách chúng
                  tôi thúc đẩy tăng trưởng kinh doanh
                </p>
                <p>
                  Chúng tôi tự hào khi cung cấp một đề xuất giá trị vượt xa mong
                  đợi. Cách tiếp cận của chúng tôi tập trung vào việc hiểu
                  INSIDE doanh nghiệp của bạn
                </p>
              </div>
              <div className="our-vision flex flex-row">
                <div className="headline flex flex-row">
                  <h4>Giá trị cốt lõi </h4>

                  <div className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <p className="tagline">
                  Khám phá Đề xuất giá trị độc đáo của chúng tôi và cách chúng
                  tôi thúc đẩy tăng trưởng kinh doanh
                </p>
                <p>
                  Chúng tôi tự hào khi cung cấp một đề xuất giá trị vượt xa mong
                  đợi. Cách tiếp cận của chúng tôi tập trung vào việc hiểu
                  INSIDE doanh nghiệp của bạn
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vision;
