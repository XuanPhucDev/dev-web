import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import person1 from "../../../Asset/Images/Homepage/person1.jpg";
import iconPerson1 from "../../../Asset/Images/Homepage/icon-person1.png";
import person2 from "../../../Asset/Images/Homepage/person2.jpg";
import iconPerson2 from "../../../Asset/Images/Homepage/icon-person2.png";
import iconText from "../../../Asset/Images/Homepage/icon-text.png";
import Title from "../../Global/Title/Title";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about-marketing space-compoment">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="person-1">
              <img className="image-person" src={person1} alt="" />
              <img className="icon-person" src={iconPerson1} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-about-us">
              <img className="rotate" src={iconText} alt="" />
              <Title
                des="Giải pháp SEO & Digital Marketing Toàn Diện"
                title="Nơi chúng tôi chuyên cách mạng hóa
                hiển thị trực tuyến thông qua SEO và Digital Marketing"
              ></Title>
              <div className="view-more">
                <Link to={`/about-us`}>
                  Xem Thêm <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="person-2">
              <img className="image-person" src={person2} alt="" />
              <img className="icon-person" src={iconPerson2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
