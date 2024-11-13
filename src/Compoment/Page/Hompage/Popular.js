import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dataFeatures from "../../../Context/Data/FeaturesPageMarketing";
import "./Popular.css";
import Title from "../../Global/Title/Title";
import ThumbServices from "../../Global/Thumb/ThumbServices";
import { Link } from "react-router-dom";
const Popular = () => {
  const FeaturesTop = dataFeatures.filter((item) => item.top === true);
  return (
    <div className="popular space-compoment">
      <Container>
        <Row>
          <Col>
            <Title
              title="Dịch vụ Digital Marketing"
              des="Dịch vụ phổ biến dành cho bạn"
            ></Title>
          </Col>
        </Row>
        <Row className="services">
          {FeaturesTop.map((item) => (
            <Col lg={3} md={6} sm={12}>
              <ThumbServices title={item.title} images={item.images} content={item.content}></ThumbServices>
            </Col>
          ))}
        </Row>

        <Row>
          <div className="view-more">
            <Link to="/services">
              Xem Thêm <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Popular;
