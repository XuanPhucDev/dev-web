import React from "react";
import "./ContactHomePage.css";
import { Container, Row } from "react-bootstrap";
import Title from "../../Global/Title/Title";
import ThumbContact from "../../Global/Thumb/ThumbContact";
const ContactHomePage = () => {
  return (
    <div className="contact-homepage space-compoment">
      <Container>
        <Row>
          <Title des="Thông tin liên hệ" title="Liên hệ với D.A.C"></Title>
        </Row>
       <ThumbContact></ThumbContact>
      </Container>
    </div>
  );
};

export default ContactHomePage;
