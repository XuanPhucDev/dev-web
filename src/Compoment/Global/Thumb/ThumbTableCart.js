import React from "react";
import ThumbCart from "./ThumbCart";
import { UseCart } from "../../../Context/Data/DataCart";
import "./ThumbTableCart.css";
const ThumbTableCart = () => {
  const { cart } = UseCart();

  return (
    <div className="thumb-table-cart">
      <table
        className="table-cart"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Hình ảnh</th>
            <th style={{ width: "30%" }}>Sản Phẩm</th>
            <th style={{ width: "20%" }}>Số Lượng</th>
            <th style={{ width: "10%" }}>Giá</th>
            <th style={{ width: "10%" }}>Tạm Tính</th>
            <th style={{ width: "10%" }}>Xoá</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <ThumbCart
              key={index}
              image={item.image}
              title={item.title}
              index={index}
              quantity={item.quantity}
              price={item.price}
            ></ThumbCart>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThumbTableCart;
