import React from "react";
import { Container } from "react-bootstrap";
import FadeInSection from "../../../Features/FadeInSection";
import Title from "../../Global/Title/Title";
import ThumbTab from "../../Global/Thumb/ThumbTab";
import DataProduct from "../../../Context/Data/DataProduct";
const Product = () => {
  return (
    <div className="space-compoment">
      <Container className="Product-Marketing ">
        <FadeInSection>
          <Title
            des="Mẫu sản phẩm của D.A.C"
            title="Các mẫu giao diện của chúng tôi"
          ></Title>
        </FadeInSection>
        <ThumbTab
          data="https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing?limit=8&page=1"
          cate="https://671eebe51dfc429919836d48.mockapi.io/myweb/categoryMarketing"
        ></ThumbTab>
      </Container>
    </div>
  );
};

export default Product;
