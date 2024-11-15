import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useAxios from "../../../../Context/API/UseAxios";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Title from "../../../Global/Title/Title";
import axios from "axios";
import { UseCart } from "../../../../Context/Data/DataCart";
import usePageTitle from "../../../../Features/TitlePage";
const AddProduct = () => {
  usePageTitle(`Thêm sản phẩm - D.A.C`);

  const [validated, setValidated] = useState(false);
  const { linkCate, linkProduct } = UseCart();

  const [dataProduct, setDataProduct] = useState({
    title: "",
    code: "",
    sale: "",
    qty: "",
    imagethumb: "",
    price: "",
    category: "",
    description: "",
  });
  const cate = useAxios(linkCate);
  const fetchData = async () => {
    try {
      await axios.post(linkProduct, dataProduct);
    } catch (error) {
      console.log("Errors creating Product: ", error);
    }
  };
  const handlePostProduct = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    console.log(dataProduct);

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      fetchData();
      alert("Post Product Success");
    }

    setValidated(true);
  };
  return (
    <div className="form-add-product">
      <Container>
        <Row>
          <Title title="Thêm sản phẩm mới"></Title>
        </Row>
        <Form noValidate validated={validated} onSubmit={handlePostProduct}>
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
              placeholder="Tiêu đề sản phẩm"
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
                placeholder="123456789"
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
                placeholder="123456789"
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
              placeholder="123456789"
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
              placeholder="Link hình ảnh"
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              setDataProduct({ ...dataProduct, category: e.target.value })
            }
          >
            <option>Danh mục sản phẩm</option>
            {cate.map((item) => (
              <option value={item.title} key={item.id}>
                {item.title}
              </option>
            ))}
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Thông tin sản phẩm</Form.Label>
            <Form.Control
              onChange={(e) =>
                setDataProduct({ ...dataProduct, description: e.target.value })
              }
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
  );
};

export default AddProduct;
