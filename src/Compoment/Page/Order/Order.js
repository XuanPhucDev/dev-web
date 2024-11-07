import React, { useRef } from "react";
import "./Order.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Order = () => {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u2wexxs", "template_x2cndy8", form.current, {
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
  };

  return (
    <form ref={form} id="form-order" onSubmit={sendEmail}>
      <input
        type="text"
        onChange={formik.handleChange}
        name="user_name"
        placeholder="Your Name"
      />
      {formik.touched.user_name && formik.errors.user_name ? (
        <div className="error">{formik.errors.user_name}</div>
      ) : null}
      <input
        type="email"
        onChange={formik.handleChange}
        name="user_email"
        placeholder="Your Email"
      />
      {formik.touched.user_email && formik.errors.user_email ? (
        <div className="error">{formik.errors.user_email}</div>
      ) : null}
      <textarea name="message" placeholder="Your Message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Order;
