import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ApiForm from "../../../Features/ApiForm";
import "./ThumbContact.css";
const ThumbForm = () => {
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      province: "",
      district: "",
      ward: "",
      location: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Vui lòng điền HỌ của quý khách"),
      last_name: Yup.string().required("Vui lòng điền TÊN của quý khách"),
      phone: Yup.string().required("Vui lòng điền SỐ ĐIỆN THOẠI của quý khách"),
      province: Yup.string().required("Tỉnh is required"),
      district: Yup.string().required("Quận is required"),
      ward: Yup.string().required("Xã is required"),
      location: Yup.string().required("Xã is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Vui lòng điền EMAIL của quý khách"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      emailjs
        .sendForm("service_u2wexxs", "template_0s1ysjp", form.current, {
          publicKey: "cXOgRNnywX48acMXh",
        })
        .then(
          () => {
            alert("Mua hàng thành công !");
          },
          (error) => {
            console.log("Đã có lỗi từ cửa hàng...", error.text);
          }
        );
    },
  });
  return (
    <div className="contact-form">
     <form ref={form} id="form-order" onSubmit={formik.handleSubmit}>
            <label htmlFor="first_name">Họ</label>
            <input
              type="text"
              onChange={formik.handleChange}
              name="first_name"
              id="first_name"
              placeholder="Họ của quý khách"
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className="error">{formik.errors.first_name}</div>
            ) : null}
            <label htmlFor="last_name">Tên</label>
            <input
              type="text"
              onChange={formik.handleChange}
              name="last_name"
              id="last_name"
              placeholder="Tên của quý khách"
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className="error">{formik.errors.last_name}</div>
            ) : null}
            <label htmlFor="last_name">Email</label>
            <input
              type="email"
              onChange={formik.handleChange}
              name="email"
              id="email"
              placeholder="Email của quý khách"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <label htmlFor="last_name">Số điện thoại</label>
            <input
              type="phone"
              onChange={formik.handleChange}
              name="phone"
              id="phone"
              placeholder="Số điện thoại của quý khách"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
            <ApiForm formik={formik}></ApiForm>
            <label htmlFor="message">Ghi chú</label>
            <textarea name="message" placeholder="Thông tin thêm..." />
            <button type="submit">Send</button>
          </form>
    </div>
  );
};

export default ThumbForm;
