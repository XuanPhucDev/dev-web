import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAxios from "../../../../Context/API/UseAxios";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [erros, setErros] = useState("");
  const form = useRef();
  const checkDataMail = useAxios(
    "https://6724cb3bc39fedae05b2bf65.mockapi.io/categoryProduct/category"
  );
  const sendEmail = (e) => {
    e.preventDefault();
    const check = checkDataMail.find((item) => item.email === email);
    if (check) {
      setErros("");
      alert("Mật khẩu mới đã được gửi đến mail của bạn");
      emailjs
        .sendForm("service_u2wexxs", "template_0s1ysjp", form.current, {
          publicKey: "cXOgRNnywX48acMXh",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setErros("Mail không tồn tại");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="email"
        placeholder="Nhập email của bạn"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="user_email"
        required
      />
      <p>{erros}</p>
      <button type="submit">Gửi yêu cầu</button>
    </form>
  );
};

export default ForgotPasswordForm;
