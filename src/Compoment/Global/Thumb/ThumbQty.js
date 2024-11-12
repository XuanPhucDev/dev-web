import React, { useState } from "react";

const ThumbQty = () => {
  const [count, setCount] = useState(1);

  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };
  return (
    <>
      <span type="minus" onClick={() => handleQuantity("minus")}>
        <i className="fa fa-minus" aria-hidden="true"></i>
      </span>
      <input
        id="input-quantity"
        type="number"
        name="quantity"
        value={count}
        disabled="disabled"
      />
      <span type="plus" onClick={() => handleQuantity("plus")}>
        <i className="fa fa-plus"></i>
      </span>
    </>
  );
};

export default ThumbQty;
