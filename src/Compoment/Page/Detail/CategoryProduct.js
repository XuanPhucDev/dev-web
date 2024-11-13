import React, { useEffect, useState } from "react";
import "./CategoryProduct.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardProduct from "../../Global/CardProduct/CardProduct.js";
import useFetch from "../../../Context/API/ApiProduct.js";
import HeadingPage from "../../Global/Title/HeadingPage.js";
import Title from "../../Global/Title/Title.js";
const CategoryProduct = (props) => {
  const ApiProduct = useFetch(
    "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing"
  );
  const [fileterProduct, setFilterProduct] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  const filterProduct = props.search
    ? ApiProduct.filter((item) =>
        item.title.toLowerCase().includes(props.search.toLowerCase())
      )
    : null;
  const handlefilterText = (e) => {
    //GPT viet toi uu code
    const sortBy = e.target.getAttribute("value");
    setSelectedValue(e.target.value);
    const filtertext = filterProduct ? [...filterProduct] : [...fileterProduct];

    const sortOptions = {
      min: (a, b) => b.price - a.price,
      max: (a, b) => a.price - b.price,
      rating: (a, b) => b.rating.rate - a.rating.rate,
      count: (a, b) => b.rating.count - a.rating.count,
    };

    // Kiểm tra nếu sortBy có trong sortOptions, thực hiện sắp xếp
    if (sortOptions[sortBy]) {
      setFilterProduct(filtertext.sort(sortOptions[sortBy]));
    } else if (e.target.value === "all") {
      filterProduct
        ? setFilterProduct(filterProduct)
        : setFilterProduct(ApiProduct);
    }
  };
  const handlePrice = (e) => {
    const checkboxName = e.target.name;

    // Cập nhật trạng thái chỉ cho phép chọn một checkbox
    setSelectedCheckbox(checkboxName);

    // Log giá trị valueFull khi checkbox được chọn
    const valueFull = e.target.getAttribute("value");
    console.log(`Checkbox ${checkboxName} selected with valueFull:`, valueFull);
    if (valueFull === "all") {
      setFilterProduct(ApiProduct);
    }
    if (valueFull === "0-99") {
      setFilterProduct(
        filterProduct
          ? filterProduct.filter((item) => item.price <= 99000)
          : ApiProduct.filter((item) => item.price <= 99000)
      );
    } else if (valueFull === "100-299") {
      setFilterProduct(
        filterProduct
          ? filterProduct.filter(
              (item) => item.price >= 100000 && item.price <= 299000
            )
          : ApiProduct.filter(
              (item) => item.price >= 100000 && item.price <= 299000
            )
      );
    } else if (valueFull === "300-499") {
      setFilterProduct(
        filterProduct
          ? filterProduct.filter(
              (item) => item.price >= 300000 && item.price <= 499000
            )
          : ApiProduct.filter(
              (item) => item.price >= 300000 && item.price <= 499000
            )
      );
    } else if (valueFull === "500") {
      setFilterProduct(
        filterProduct
          ? filterProduct.filter((item) => item.price >= 500000)
          : ApiProduct.filter((item) => item.price >= 500000)
      );
    }
    //Reset fiter text
    setSelectedValue("");
  };
  useEffect(() => {
    if (props.search) {
      setFilterProduct(filterProduct);
    } else {
      setFilterProduct(ApiProduct);
    }
  }, [ApiProduct]);

  return (
    <>
      <div className="cate-product ">
        <HeadingPage
          title={props.search ? `Tìm kiếm: ${props.search}` : "Trang Sản Phẩm"}
        ></HeadingPage>
        <Container>
          <div className="space-compoment"></div>
          <Row>
            <Col lg={3}>
              <div className="filter ">
                <div className="filter-value">
                  <Title title="Giá sản phẩm" des="Lọc sản phẩm: "></Title>
                  <form action="#" className="filter-by-price">
                    <div className="form-tick">
                      <input
                        type="checkbox"
                        value={"all"}
                        onClick={handlePrice}
                        name="all"
                        id="all"
                        checked={selectedCheckbox === "all"}
                      />
                      <label htmlFor="all">Tất cả</label>
                    </div>
                    <div className="form-tick">
                      <input
                        type="checkbox"
                        value={"0-99"}
                        onClick={handlePrice}
                        name="0-99"
                        id="0-99"
                        checked={selectedCheckbox === "0-99"}
                      />
                      <label htmlFor="0-99">Dưới 99.000 đ</label>
                    </div>
                    <div className="form-tick">
                      {" "}
                      <input
                        type="checkbox"
                        value={"100-299"}
                        onClick={handlePrice}
                        name="100-299"
                        id="100-299"
                        checked={selectedCheckbox === "100-299"}
                      />
                      <label htmlFor="100-299">100.000 đ - 299.000 đ</label>
                    </div>
                    <div className="form-tick">
                      <input
                        type="checkbox"
                        value={"300-499"}
                        onClick={handlePrice}
                        name="300-499"
                        id="300-499"
                        checked={selectedCheckbox === "300-499"}
                      />
                      <label htmlFor="300-499">300.000 đ - 499.000 đ</label>
                    </div>
                    <div className="form-tick">
                      {" "}
                      <input
                        type="checkbox"
                        value={"500"}
                        onClick={handlePrice}
                        name="500"
                        id="500"
                        checked={selectedCheckbox === "500"}
                      />
                      <label htmlFor="500">Trên 500.000 đ</label>
                    </div>
                    <div className="form-tick"></div>
                  </form>
                </div>
                <div className="filter-price">
                  <Title title="Sắp xếp sản phẩm" des="Lọc sản phẩm: "></Title>

                  <form action="#" className="filter-by-price">
                    <div className="form-tick">
                      {" "}
                      <input
                        type="checkbox"
                        value="max"
                        onClick={handlefilterText}
                        name="max"
                        id="max"
                        checked={selectedValue === "max"}
                      />
                      <label htmlFor="max">Giá từ thấp đến cao</label>
                    </div>
                    <div className="form-tick">
                      {" "}
                      <input
                        type="checkbox"
                        value="min"
                        onClick={handlefilterText}
                        name="min"
                        id="min"
                        checked={selectedValue === "min"}
                      />
                      <label htmlFor="min">Giá từ cao đến thấp</label>
                    </div>
                    <div className="form-tick">
                      {" "}
                      <input
                        type="checkbox"
                        value="rating"
                        onClick={handlefilterText}
                        name="rating"
                        id="rating"
                        checked={selectedValue === "rating"}
                      />
                      <label htmlFor="rating">Đánh giá</label>
                    </div>
                    <div className="form-tick">
                      {" "}
                      <input
                        type="checkbox"
                        value="count"
                        onClick={handlefilterText}
                        name="count"
                        id="count"
                        checked={selectedValue === "count"}
                      />
                      <label htmlFor="count">Lượt Mua Hàng</label>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div className="list-product">
                <Row>
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
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CategoryProduct;
