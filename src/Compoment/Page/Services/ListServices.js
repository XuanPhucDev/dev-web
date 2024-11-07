import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dataFeatures from "../../../Context/Data/FeaturesPageMarketing";
import ThumbServices from "../../Global/Thumb/ThumbServices";

const ListServices = () => {
  return (
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
  );
};

export default ListServices;
