import React, { useState } from "react";
import HeadingPage from "../../../Global/Title/HeadingPage";
import useAxios from "../../../../Context/API/UseAxios";
import { Container, Row } from "react-bootstrap";
import AddProduct from "../Controller/AddProduct";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListProduct from "../Controller/ListProduct";
import usePageTitle from "../../../../Features/TitlePage";
import ListOrder from "../Controller/ListOrder";
import TableList from "../../../Global/Thumb/TableList";
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
            defaultActiveKey="list-product"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="list-product" title="Danh sách sản phẩm">
              <ListProduct
                link={"https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing"}
              ></ListProduct>
            </Tab>
            <Tab eventKey="add" title="Thêm sản phẩm">
              <AddProduct></AddProduct>
            </Tab>
            {/* <Tab eventKey="list-order" title="Danh sách đơn hàng">
              <ListOrder></ListOrder>
            </Tab> */}
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default PageAdmin;
