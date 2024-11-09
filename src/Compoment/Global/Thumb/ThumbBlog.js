import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThumbBlog = (props) => {
  return (
    <Link to={`/blog/${props.id}`}>
      <Card key={props.id}>
        <Card.Img variant="top" src={props.image_thumbnail} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <div className="view-more">
            <Link to={`/blog/${props.id}`}>
              Đọc tiếp <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ThumbBlog;
