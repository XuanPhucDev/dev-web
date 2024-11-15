import React, { useState } from "react";
import HeadingPage from "../../../Global/Title/HeadingPage";
import useAxios from "../../../../Context/API/UseAxios";
import { Container, Row } from "react-bootstrap";
import AddProduct from "../Controller/AddProduct";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListProduct from "../Controller/ListProduct";
import usePageTitle from "../../../../Features/TitlePage";
const PageAdmin = () => {
  usePageTitle(`Trang Quản Trị - D.A.C`);

  const [emailUser] = useState(localStorage.getItem("email"));

  const dataAdmin = useAxios(
    "https://6724cb3bc39fedae05b2bf65.mockapi.io/categoryProduct/category"
  );
  const check = dataAdmin.find((item) => item.email === emailUser);

  return (
    <div className="page-admin space-compoment">
      <HeadingPage title={`Xin chào ${check && check.role}`}></HeadingPage>
      <Container>
        <Row>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Danh sách sản phẩm">
              <ListProduct></ListProduct>
            </Tab>
            <Tab eventKey="profile" title="Thêm sản phẩm">
              <AddProduct></AddProduct>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default PageAdmin;
