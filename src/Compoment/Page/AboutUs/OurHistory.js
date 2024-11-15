import React from "react";
import "./OurHistory.css";
import Title from "../../Global/Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import ThumbDoubleImage from "../../Global/Thumb/ThumbDoubleImage";
import images1 from "../../../Asset/Images/About-Us/3.jpg";
import images2 from "../../../Asset/Images/About-Us/4.jpg";
import DataHistory from "../../../Context/Data/DataHistory";
import { Link } from "react-router-dom";
const OurHistory = () => {
  return (
    <div className="our-history space-compoment">
      <Container>
        <Row>
          <Title
            des="Lịch sử hình thành D.A.C"
            title="Hành trình của chúng tôi"
          ></Title>
        </Row>
        <Row>
          <Col lg={6}>
            <ThumbDoubleImage
              images1={images1}
              images2={images2}
            ></ThumbDoubleImage>
          </Col>
          <Col lg={6}>
            <Row>
              {DataHistory.map((item) => (
                <Col lg={6} md={6} xs={6}>
                  <div className="slide-history">
                    <span>{item.year}</span>
                    <h4>{item.title}</h4>
                    <p>{item.des}</p>
                    <div className="view-more">
                      <Link to={`/about-us`}>
                        Xem Thêm <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurHistory;
