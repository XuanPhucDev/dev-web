import React, { useState } from "react";
import useAxios from "../../../../Context/API/UseAxios";
import axios from "axios";
const SignUp = ({ onSignUpSuccess }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const handlepost = async () => {
    try {
      const res = await axios.post(
        "https://6724cb3bc39fedae05b2bf65.mockapi.io/categoryProduct/category",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: "customer",
        }
      );
    } catch (error) {
      console.log("Erros post data", errors);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors("Mật khẩu và xác nhận mật khẩu không khớp!");
    } else {
      console.log("Form Data: ", formData);
      handlepost();
      setTimeout(() => {
        alert("Đăng ký thành công");
        onSignUpSuccess(); // Gọi hàm chuyển về Login
      }, 1000);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Họ và tên của bạn"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email của bạn"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu của bạn"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Nhập lại mật khẩu"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <span>{errors}</span>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignUp;
