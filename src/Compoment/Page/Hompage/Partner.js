import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAxios from "../../../Context/API/UseAxios";
import Slider from "react-slick";
import "./Partner.css";
import Title from "../../Global/Title/Title";
const Partner = () => {
  const dataPartner = useAxios(
    "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/userData"
  );
  const settings = {
    infinite: true, // Lặp lại slider
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 4, // Số slide hiển thị cùng lúc
    slidesToScroll: 1, // Số slide cuộn mỗi lần
    autoplay: true, // Tự động chuyển slide 
    pauseOnHover: true,
    arrow: false,
    dot: false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200, // Tablet
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };
  return (
    <div className="partner flex flex-row space-compoment">
      <Container>
        <Row>
          <Col lg={3}>
          <Title des="Về D.A.C" title="Đối tác nổi bật"></Title>
          </Col>
          <Col lg={9}>
            <div className="slide-partner mt-4">
              <Slider {...settings}>
                {dataPartner.map((item) => (
                  <div>
                    <img src={item.images} alt={item.title} />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partner;
