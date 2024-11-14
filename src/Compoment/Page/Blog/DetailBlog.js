import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../Context/API/UseAxios";
import { UseCart } from "../../../Context/Data/DataCart";
import "./DetailBlog.css";
import { Container, Row } from "react-bootstrap";
const DetailBlog = () => {
  const { slug: keyValue } = useParams();
  //   console.log(keyValue);

  const { linkBlog } = UseCart();
  const dataBlog = useAxios(linkBlog).find((item) => item.id === keyValue);
  console.log(dataBlog);

  return (
    <div className="blog-detail">
      <Container>
        <Row>
          <div className="blog-detail">
            <div className="blog-header">
              <h1 className="blog-title">{dataBlog && dataBlog.title}</h1>
              <div className="blog-meta">
                <span className="blog-date">{dataBlog && dataBlog.date}</span> {" - "}
                <span className="blog-date">{dataBlog && dataBlog.author}</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-image-container">
                <img
                  src={dataBlog && dataBlog.image_thumbnail}
                  alt={dataBlog && dataBlog.title}
                  className="blog-image"
                />
              </div>
              <div className="blog-text">{dataBlog && dataBlog.content}</div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default DetailBlog;
