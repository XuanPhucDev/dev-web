import React from "react";
import { UseCart } from "../../../Context/Data/DataCart";
import ConvertPrice from "./ConvertPrice";

const ThumbCart = (props) => {
  const { handleQuantity, handleDelete } = UseCart();

  return (
    <tr>
      <td>
        <img src={props.image} alt="" />
      </td>
      <td>
        <h3 className="title">{props.title}</h3>
      </td>
      <td>
        <span
          type="minus"
          onClick={() => handleQuantity("minus", props.index)}
        > <i className="fa fa-minus"></i></span>
        <input
          id="input-quantity"
          type="number"
          name="quantity"
          value={props.quantity}
          disabled="disabled"
        />
        <span type="plus" onClick={() => handleQuantity("plus", props.index)}>
          <i className="fa fa-plus"></i>
        </span>
      </td>
      <td>
        <ConvertPrice price={props.price}></ConvertPrice>
      </td>
      <td>
        <ConvertPrice price={props.price * props.quantity}></ConvertPrice>
      </td>
      <td>
        <a href="javascript:;" onClick={() => handleDelete(props.index)}>
          <i className="fa-solid fa-trash-can"></i>
        </a>
      </td>
    </tr>
  );
};

export default ThumbCart;
