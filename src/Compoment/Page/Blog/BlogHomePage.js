import React from "react";
import "./Blog.css";
import Title from "../../Global/Title/Title";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import DataBlog from "../../../Context/Data/DataBlog";
import { Link } from "react-router-dom";
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
        <Row>
          {DataBlog.map((item, index) => (
            <Col lg={4}>
              <Link to={`/blog/${index}`}>
                <Card key={index}>
                  <Card.Img variant="top" src={item.image_thumbnail} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                    <div className="view-more">
                      <Link to={`/blog/${index}`}>
                        Đọc tiếp <i class="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={12}>
            <div className="view-more">
              <Link to={`/blog/`}>
                Xem thêm <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
