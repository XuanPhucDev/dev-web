import React from "react";
import HeadingPage from "../../Global/Title/HeadingPage";
import { Col, Container, Row } from "react-bootstrap";
import dataTestimonials from "../../../Context/Data/DataTestimonials";
import ThumbTestimonials from "../../Global/Thumb/ThumbTestimonials";
const PageTestimonials = () => {
  return (
    <div className="page-testimonials">
      <HeadingPage title="Testimonials"> </HeadingPage>
      <Container>
        <div className="space-compoment">
          <Row>
            {dataTestimonials.map((item) => (
              <Col lg={3}>
                <ThumbTestimonials
                  content={item.content}
                  name={item.name}
                  star={item.star}
                  images={item.images}
                ></ThumbTestimonials>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PageTestimonials;
