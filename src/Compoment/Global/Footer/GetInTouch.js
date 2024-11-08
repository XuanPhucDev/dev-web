import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./GetInTouch.css";
import { Link } from "react-router-dom";
const GetInTouch = () => {
  return (
    <div className="get-in-touch space-compoment">
      <Container fluid>
        <Row>
          <Col>
            <div className="content-GIT flex flex-column ">
              <h3>Bạn đã sẵn sàng đưa website của bạn lên tầm cao mới?</h3>
              <p>
                Chiến lược SEO hiệu quả không chỉ nâng cao khả năng hiển thị của
                trang web mà còn thúc đẩy lưu lượng truy cập được nhắm mục tiêu,
                nâng cao trải nghiệm người dùng
              </p>
              <div className="view-more">
                <Link to={`/contact`}>
                  Liên hệ ngay với D.A.C <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetInTouch;
