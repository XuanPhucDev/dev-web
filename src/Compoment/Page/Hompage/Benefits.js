import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Benefits.css";
import Title from "../../Global/Title/Title";
import Category from "./Category";
import ThumbBenefits from "../../Global/Thumb/ThumbBenefits";
import ThumbBenefitsMobile from "../../Global/Thumb/ThumbBenefitsMobile";

const Benefits = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="Benefits space-compoment">
      <Container>
        <Row>
          <Col>
            <Title
              des="Về D.A.C"
              title="Lợi ích của SEO & Digital Marketing"
            ></Title>
          </Col>
        </Row>
        <div className="content">
        {isMobile ? <ThumbBenefitsMobile /> : <ThumbBenefits />}
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
