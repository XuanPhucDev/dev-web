import React from "react";
import ThumbBlog from "../../Global/Thumb/ThumbBlog";
import { Col, Row } from "react-bootstrap";
import DataBlog from "../../../Context/Data/DataBlog";
import "./ListBlog.css";
const ListBlog = () => {
  return (
    <div className="list-blog">
      <Row>
        {DataBlog.map((item) => (
          <Col lg={4} md={6} xs={12}>
            <ThumbBlog
              title={item.title}
              image_thumbnail={item.image_thumbnail}
              content={item.content}
              id={item.id}
            ></ThumbBlog>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListBlog;
