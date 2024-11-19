import React from "react";
import Table from "react-bootstrap/Table";
import Title from "../../../Global/Title/Title";
import { Container, Row } from "react-bootstrap";
import { UseCart } from "../../../../Context/Data/DataCart";
import useAxios from "../../../../Context/API/UseAxios";
import ConvertPrice from "../../../Global/Thumb/ConvertPrice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FunctionProduct.css";
import usePageTitle from "../../../../Features/TitlePage";
const ListProduct = (props) => {
  usePageTitle(`Danh sách sản phẩm - D.A.C`);

  const navigate = useNavigate();
  const tableListProduct = [
    "id",
    "Tên Sản Phẩm",
    "Mã Sản Phẩm",
    "Kho",
    "Giá",
    "Danh Mục",
    "Chức Năng",
  ];
  const dataProduct = useAxios(props.link);
  
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${props.link}/${id}`);
      alert("Đã xóa sản phẩm thành công");
    } catch (error) {
      console.log("Errors Deleting Data: ", error);
    }
  };
  const handleUpdate = (index) => {
    navigate(`/update-product/${index}`);
  };
  return (
    <div className="admin-list-product">
      <Container>
        <Row>
          <Title title="Danh sách sản phẩm"></Title>
        </Row>
      </Container>
      <Table>
        <thead>
          <tr>
            {tableListProduct &&
              tableListProduct.map((item) => <th>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {dataProduct &&
            dataProduct.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.code}</td>
                <td>{item.qty}</td>

                <td>
                  <ConvertPrice price={item.price}></ConvertPrice>
                </td>
                <td>{item.category}</td>
                <td className="icon-function">
                  <a href="javascript:;" onClick={() => handleDelete(index)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </a>
                  <a href="javascript:;" onClick={() => handleUpdate(item.id)}>
                    <i class="fa-solid fa-pen"></i>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListProduct;
