import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const linkCate =
    "https://671eebe51dfc429919836d48.mockapi.io/myweb/categoryMarketing";
  const linkProduct =
    "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing";
  // const [quantitycart, setQuantityCart] = useState(0);
  const [cart, setCart] = useState(
    localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
  );
  const [buyNow, setBuyNow] = useState(
    localStorage.getItem("BuyNow")
      ? JSON.parse(localStorage.getItem("BuyNow"))
      : []
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (product) => {
    //add product to cart
    const newCart = [...cart];

    const checkIndex = newCart.findIndex((item) => item.id === product.id);
    if (checkIndex >= 0) {
      newCart[checkIndex].quantity++;
    } else {
      product.quantity = 1;
      newCart.push(product);
    }
    setCart(newCart);

    //add cart to localStorage
    localStorage.setItem("CART", JSON.stringify(newCart));
  };
  const handleQuantity = (oftion, type, index) => {
    if (oftion === "BuyNow") {
      const newCart = [buyNow];
      console.log(newCart);

      if (type === "plus") {
        newCart[index].quantity++;
      } else if (type === "minus") {
        if (newCart[index].quantity > 1) {
          newCart[index].quantity--;
        } else {
          newCart.splice(index, 1);
        }
      }

      setBuyNow(newCart);
      localStorage.setItem("BuyNow", JSON.stringify(newCart));
    } else {
      const newCart = [...cart];
      if (type === "plus") {
        newCart[index].quantity++;
      } else if (type === "minus") {
        if (newCart[index].quantity > 1) {
          newCart[index].quantity--;
        } else {
          newCart.splice(index, 1);
        }
      }
      setCart(newCart);
      localStorage.setItem("CART", JSON.stringify(newCart));
    }
  };
  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        linkCate,
        linkProduct,
        buyNow,
        handleAddToCart,
        handleQuantity,
        handleDelete,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const UseCart = () => {
  return useContext(CartContext);
};

export { CartProvider, UseCart };
