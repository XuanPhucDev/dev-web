import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Title from "../../../Global/Title/Title";
import { useParams } from "react-router-dom";
import useAxios from "../../../../Context/API/UseAxios";
import { UseCart } from "../../../../Context/Data/DataCart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UpdateProduct = () => {
  const { slug: keyValue } = useParams();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const { linkCate, linkProduct } = UseCart();
  const cate = useAxios(linkCate);
  const data = useAxios(`${linkProduct}/${keyValue}`);
console.log(data);
  const [dataProduct, setDataProduct] = useState([data]);
  // const [dataProduct, setDataProduct] = useState({
  //   title: "",
  //   code: "",
  //   sale: "",
  //   qty: "",
  //   imagethumb: "",
  //   price: "",
  //   category: "",
  //   description: "",
  // });
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${linkProduct}/${keyValue}`, {
        title: dataProduct.title,
        code: dataProduct.code,
        sale: dataProduct.sale,
        qty: dataProduct.qty,
        imagethumb: dataProduct.imagethumb,
        price: dataProduct.price,
        category: dataProduct.category,
        description: dataProduct.description,
      });
      alert("Update Product Success");
      navigate("/admin-page");
    } catch (error) {
      console.log("Errors Update Product: ", error);
    }
  };
  // Đồng bộ `dataProduct` với `data` khi `data` được tải
  useEffect(() => {
    if (data) {
      setDataProduct({
        title: data.title,
        code: data.code,
        sale: data.sale,
        qty: data.qty,
        imagethumb: data.imagethumb,
        price: data.price,
        category: data.category,
        description: data.description,
      });
    }
  }, [data]);
  return (
    <div className="Update-Product">
      <div className="form-add-product">
        <Container>
          <Row>
            <Title title={`Cập nhật sản phẩm: ${data.title}`}></Title>
          </Row>
          <Form noValidate validated={validated} onSubmit={handleUpdateProduct}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tiêu đề Sản phẩm</Form.Label>
              <Form.Control
                required
                size="lg"
                name="title"
                type="text"
                onChange={(e) =>
                  setDataProduct({ ...dataProduct, title: e.target.value })
                }
                value={dataProduct.title}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập tiêu đề sản phẩm.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mã Sản phẩm</Form.Label>
              <Form.Control
                required
                size="lg"
                type="text"
                onChange={(e) =>
                  setDataProduct({ ...dataProduct, code: e.target.value })
                }
                value={dataProduct.code}
                placeholder="Mã sản phẩm"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập mã sản phẩm.
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Giá bán thường</Form.Label>
                <Form.Control
                  required
                  size="lg"
                  type="number"
                  onChange={(e) =>
                    setDataProduct({ ...dataProduct, price: e.target.value })
                  }
                  value={dataProduct.price}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập giá bán sản phẩm.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Giá khuyến mãi</Form.Label>
                <Form.Control
                  size="lg"
                  type="number"
                  onChange={(e) =>
                    setDataProduct({ ...dataProduct, sale: e.target.value })
                  }
                  value={dataProduct.sale}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Số lượng sản phẩm</Form.Label>
              <Form.Control
                size="lg"
                type="number"
                onChange={(e) =>
                  setDataProduct({ ...dataProduct, qty: e.target.value })
                }
                value={dataProduct.qty}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ảnh đại diện sản phẩm</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                id="imagethumb"
                name="imagethumb"
                onChange={(e) =>
                  setDataProduct({ ...dataProduct, imagethumb: e.target.value })
                }
                value={dataProduct.imagethumb}
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                setDataProduct({ ...dataProduct, category: e.target.value })
              }
            >
              <option> {dataProduct.category}</option>
              {cate.map((item) => (
                <option value={item.title} key={item.id}>
                  {item.title}
                </option>
              ))}
            </Form.Select>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Thông tin sản phẩm</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setDataProduct({
                    ...dataProduct,
                    description: e.target.value,
                  })
                }
                value={dataProduct.description}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Xuất bản
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default UpdateProduct;
