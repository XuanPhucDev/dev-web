import React from "react";
import "./Blog.css";
import Title from "../../Global/Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListBlog from "./ListBlog";
const Blog = () => {
  return (
    <div className="Blog space-compoment">
      <Container>
        <Row>
          <Title
            des="Tin tức Marketing & SEO"
            title="Bài viết mới nhất của D.A.C"
          ></Title>
        </Row>
        <ListBlog></ListBlog>
        <Row>
          <Col lg={12}>
            <div className="view-more">
              <Link to={`/blog/`}>
                Xem thêm <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
