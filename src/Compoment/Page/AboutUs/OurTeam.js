import React from "react";
import "./OurTeam.css";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../Global/Title/Title";
import DataTeam from "../../../Context/Data/DataTeam";
const OurTeam = () => {
  return (
    <div className="our-team space-compoment">
      <Container>
        <Row>
          <Title
            des="Đội ngũ D.A.C"
            title="Gặp gỡ đội ngũ chuyên gia của D.A.C"
          ></Title>
        </Row>
        <Row>
          {DataTeam.map((item) => (
            <Col lg={3}>
              <div className="thumb-our-team">
                <div className="images-thumb-our-team">
                  <img src={item.images} alt={item.name} />
                </div>

                <div className="content">
                  <h4>{item.name}</h4>
                  <p>{item.des}</p>
                </div>
                <div className="team-social">
                  <ul className="flex flex-row">
                    <li>
                      <a href={item.facebook}>
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={item.instagram}>
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={item.tiktok}>
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
