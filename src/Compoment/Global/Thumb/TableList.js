import React from "react";
import { Container, Row } from "react-bootstrap";
import useAxios from "../../../Context/API/UseAxios";
import ConvertPrice from "./ConvertPrice";

const TableList = (props) => {
  //							Cửa hàng	Lý do hủy
  const tableListProduct = [
    "Đơn hàng",
    "Thời gian",
    "Sản phẩm",
    "Tổng tiền",
    "Khách hàng",
    "Nội dung chuyển khoản",
    "Nhân viên",
    props.other,
  ];
  const data = useAxios(props.link);
  return (
    <Container>
      <Row>
        <thead>
          <tr>
            {tableListProduct &&
              tableListProduct.map((item) => <th>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
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
                  {/* <a href="javascript:;" onClick={() => handleDelete(index)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </a>
                  <a href="javascript:;" onClick={() => handleUpdate(item.id)}>
                    <i class="fa-solid fa-pen"></i>
                  </a> */}
                </td>
              </tr>
            ))}
        </tbody>
      </Row>
    </Container>
  );
};

export default TableList;
