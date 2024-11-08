import React from "react";
import "./WhyChooseUs.css";
import Title from "../../Global/Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import imagesUser1 from "../../../Asset/Images/About-Us/234.jpg";
import imagesUser2 from "../../../Asset/Images/About-Us/323.jpg";
import ThumbDoubleImage from "../../Global/Thumb/ThumbDoubleImage";
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us space-compoment">
      <Container>
        <Row>
          <Title des="" title="Tại sao bạn nên chọn D.A.C"></Title>
        </Row>
        <Row>
          <Col lg={6}>
            <h3>Lý do chọn D.A.C là sự lựa chọn đúng đắn</h3>
            <p>
              Tại D.A.C, chúng tôi hiểu rằng bạn có nhiều lựa chọn khi nói đến
              dịch vụ tiếp thị kỹ thuật số. Vậy tại sao bạn nên chọn chúng tôi?
              Dưới đây là một vài lý do
            </p>
            <ul>
              <li className="flex flex-row">
                <i className="fa-solid fa-clipboard-check"></i>
                <div className="text-why-choose-us">
                  <h4>Proven Result</h4>
                  <p>
                    We have a track record of delivering tangible results for
                    our clients. From increasing website traffic and improving
                    search.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <i className="fa-solid fa-clipboard-check"></i>
                <div className="text-why-choose-us">
                  <h4>Customized Solutions</h4>
                  <p>
                    We believe that one size does not fit all when it comes to
                    digital marketing. That's why we take the time to understand
                    your SEO.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <i className="fa-solid fa-clipboard-check"></i>
                <div className="text-why-choose-us">
                  <h4>Dedicated Support</h4>
                  <p>
                    Your success is our top priority. That's why provide
                    dedicated support and guidance every step of the way to
                    running seo.
                  </p>
                </div>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
           <ThumbDoubleImage images1={imagesUser1} images2={imagesUser2}></ThumbDoubleImage>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
