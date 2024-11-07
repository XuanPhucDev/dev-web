import React from "react";
import Title from "../../Global/Title/Title";
import Slider from "react-slick";
import { Container, Row } from "react-bootstrap";
import DataFeedback from "../../../Context/Data/DataFeedback";
import "./Feedback.css";
const FeedbackCustomer = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true
  };
  return (
    <div className="feedback-homepage space-compoment">
      <Container fluid>
        <Row>
          <Title
            des="Đánh giá về D.A.C"
            title="Khách hàng đánh giá Chúng tôi trên Google Reviews"
          ></Title>
          <div className="slider-container">
            <Slider {...settings}>
              {DataFeedback.map((item) => (
                <div className="thumb-review ">
                  <div className="flex flex-row">
                    <div className="text-thumb-review">
                      <p id="comment">{item.comment}</p>
                      <div className="info">
                        <p>
                          {[...Array(item.rating)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}{" "}
                        </p>
                        <p id="user">{item.user}</p>
                      </div>
                    </div>
                    <div className="images-thumb-review">
                      <img src={item.images} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FeedbackCustomer;
