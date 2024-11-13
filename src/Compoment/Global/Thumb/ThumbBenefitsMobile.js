import React from "react";
import { Col, Row } from "react-bootstrap";
import DataBenefits from "../../../Context/Data/DataBenefits";
import "./ThumbBenefitsMobile.css";
const ThumbBenefitsMobile = () => {
  return (
    <div className="thumb-benefits-mobile">
      <Row>
        {DataBenefits.map((item) => (
          <Col lg={4} md={6} sm={12} xs={12}>
            <a href={item.link}>
              <div
                className="case-study flex flex-row"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div className="overlay"></div>
                <div className="content-case">
                  <h4>{item.headline}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ThumbBenefitsMobile;
