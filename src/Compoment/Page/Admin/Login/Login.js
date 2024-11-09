import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../../Context/API/UseAxios";

const Login = ({ onForgotPassword }) => {
  const [ErrEmail, setErrEmail] = useState("");
  const [ErrPass, setErrPass] = useState("");
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();
  const getData = useAxios(
    "https://6724cb3bc39fedae05b2bf65.mockapi.io/categoryProduct/category"
  );

  const loginUser = () => {
    if (getData[0].email === email) {
      if (getData[0].password === pass) {
        alert("Login Success");
        localStorage.setItem("email", email);
        navigate("/");
      } else {
        setErrPass("Sai mật khẩu");
      }
    } else {
      setErrEmail("Sai tên đăng nhập hoặc không tồn tại");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrEmail("");
    setErrPass("");
    // Xử lý đăng nhập tại đây
    loginUser();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email của bạn"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <p>{ErrEmail}</p>
      <input
        type="password"
        placeholder="Mật khẩu"
        onChange={(e) => setPass(e.target.value)}
        required
      />
      <p>{ErrPass}</p>
      <p id="forgot-pass" onClick={onForgotPassword}>
        Quên mật khẩu?
      </p>
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default Login;