import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./Login.css";
import ForgotPasswordForm from "./ForgotPasswordForm";
const AuthPage = () => {
  const [account, setAccount] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false); // false -> không quên mật khẩu, true -> quên mật khẩu
  const toggleForgotPassword = () => {
    setForgotPassword(true);
  };
  // Hàm gửi yêu cầu quên mật khẩu
  const handleForgotPasswordSubmit = (email) => {
    // Logic gửi yêu cầu quên mật khẩu ở đây (gửi đến server hoặc API)
    alert(`Yêu cầu quên mật khẩu đã được gửi đến email: ${email}`);
    setForgotPassword(false); // Sau khi gửi, quay lại giao diện đăng nhập
  };
  const toggleAuthMode = () => {
    setAccount(!account);
    setForgotPassword(false); // Khi chuyển đổi giữa đăng nhập và đăng ký, reset lại quên mật khẩu
    // Hàm chuyển sang chế độ quên mật khẩu
  };
  return (
    <div className="login-page">
      <div className="auth-container flex flex-column">
        <h2>
          {account
            ? forgotPassword
              ? "Lấy lại mật khẩu"
              : "Đăng Nhập"
            : "Đăng ký"}
        </h2>
        {forgotPassword ? (
          <ForgotPasswordForm onSubmit={handleForgotPasswordSubmit} />
        ) : account ? (
          <Login onForgotPassword={toggleForgotPassword} />
        ) : (
          <SignUp onSignUpSuccess={() => setAccount(true)} />
        )}
        <button onClick={toggleAuthMode}>
          {account ? "Tạo tài khoản" : "Bạn đã có tài khoản? Đăng nhập tại đây"}
        </button>
        {/* {account ? (
          <p>
            <a href="" onClick={toggleAuthMode}>
              Tạo tài khoản
            </a>
            |<a href="/lostpassword">Bạn quên mật khẩu ?</a>
          </p>
        ) : (
          <a href="" onClick={toggleAuthMode}>
            Bạn đã có tài khoản? Đăng nhập tại đây
          </a>
        )} */}
      </div>
    </div>
  );
};

export default AuthPage;
