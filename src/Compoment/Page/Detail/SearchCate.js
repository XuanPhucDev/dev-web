import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAxios from "../../../Context/API/UseAxios";
import { useParams } from "react-router-dom";
import usePageTitle from "../../../Features/TitlePage";

const SearchCate = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { slug: keyValue } = useParams();
  const [limit, setLimit] = useState(8);
  usePageTitle(`Tìm kiếm chuyên mục: ${keyValue}`);
  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };
  const ApiProduct = useAxios(
    `https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing?limit=${limit}&page=1`
  ).find((item)=> item.category === keyValue);
  console.log(ApiProduct);
  const handleShowMore = () => {
    setLimit(limit + 4);
  };
  useEffect(() => {
    setSearchQuery(removeAccents(keyValue));
  }, [keyValue]);
  return (
    <div className="search-cate">
      <Container>
        {/* <Row>
          {fileterProduct &&
            fileterProduct.map((item) => (
              <Col lg={3}>
                <CardProduct
                  key={item.id}
                  id={item.id}
                  image={item.imagethumb}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                ></CardProduct>
              </Col>
            ))}
          <div className="view-more flex">
            <button className="view-more" onClick={handleShowMore}>
              Xem thêm
            </button>
          </div>
        </Row> */}
      </Container>
    </div>
  );
};

export default SearchCate;
