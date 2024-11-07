import React from "react";
import HeadingPage from "../../Global/Title/HeadingPage";
import { Col, Container, Row } from "react-bootstrap";
import dataFeatures from "../../../Context/Data/FeaturesPageMarketing";
import ThumbServices from "../../Global/Thumb/ThumbServices";
import "./PageServices.css";
import WhyChooseUs from "../AboutUs/WhyChooseUs";
import OurSkill from "../AboutUs/OurSkill";
const PageServices = () => {
  return (
    <div className="page-services">
      <HeadingPage title="Dịch vụ của chúng tôi"></HeadingPage>
      <Container>
        <div className="space-compoment">
          <Row>
            {dataFeatures.map((item) => (
              <Col lg={3}>
                <ThumbServices
                  title={item.title}
                  images={item.images}
                  content={item.content}
                ></ThumbServices>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <WhyChooseUs></WhyChooseUs>
      <OurSkill></OurSkill>
    </div>
  );
};

export default PageServices;
