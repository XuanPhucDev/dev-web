import React from "react";
import Title from "../../Global/Title/Title";
import ThumbContact from "../../Global/Thumb/ThumbContact";
import { Container, Row } from "react-bootstrap";
import usePageTitle from "../../../Features/TitlePage";

const PageContact = () => {
  usePageTitle(`Liên hệ - D.A.C`);

  return (
    <div className="page-contact">
      <Container>
        <Row>
          <Title des="Thông tin D.A.C" title="Liên hệ với D.A.C"></Title>
        </Row>
        <ThumbContact></ThumbContact>
      </Container>
    </div>
  );
};

export default PageContact;
