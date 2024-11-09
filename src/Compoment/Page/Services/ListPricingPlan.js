import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataPricingPlan from "../../../Context/Data/DataPricingPlan";
import "./ListPricingPlan.css";
import ThumbPlan from "../../Global/Thumb/ThumbPlan";
import Title from "../../Global/Title/Title";
const ListPricingPlan = () => {
  return (
    <div className="list-pricing-plan space-compoment">
      <Container fluid>
        <Row>
            <Title title="Các gói dịch vụ của D.A.C" des="Pricing plan D.A.C"></Title>
        </Row>
        <Row>
          {DataPricingPlan.map((item) => (
            <Col>
              <ThumbPlan
                name={item.name}
                targetAudience={item.targetAudience}
                price={item.price}
                features={item.features}
                content = {item.content}
              ></ThumbPlan>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListPricingPlan;
