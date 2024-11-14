import React from "react";
import {Col, Nav, Row, Tab} from 'react-bootstrap';
import "./ThumbPayment.css";
import QrTpBank from "../../../Asset/Images/Payment/qr-tpbank.jpg";
const ThumbPayment = () => {
  return (
    <div className="thumb-payment">
      <Tab.Container id="left-tabs-example" defaultActiveKey="cod">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="cod">Ship COD</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="banking">Chuyển Khoản QR</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="zaloPay">ZaloPay</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="cod">Thanh toán khi nhận hàng</Tab.Pane>
              <Tab.Pane eventKey="banking">
                <h4>Thanh toán qua mã QR sau: </h4>
                <img src={QrTpBank} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="zaloPay">
                <h4>Thanh toán qua ZaloPay: </h4>
                <img src={QrTpBank} alt="" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ThumbPayment;
