import React from "react";
import Title from "../../Global/Title/Title";
import ListBlog from "../Blog/ListBlog";
import { Container, Row } from "react-bootstrap";

const PageBlog = () => {
  return (
    <div className="blog-page">
      <Container>
        <Row>
          <Title des="Thông tin D.A.C" title="Tin tức D.A.C"></Title>
        </Row>
        <ListBlog></ListBlog>
      </Container>
    </div>
  );
};

export default PageBlog;