import React from "react";
import ApiForm from "../../../Features/ApiForm";
import "./ThumbContact.css";
const ThumbForm = () => {
  return (
    <div className="contact-form">
      <form action="/submit-form" method="POST">
        <div className="form-name flex flex-row">
          <div className="form-group input-name">
            <label htmlFor="firstname">Họ</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Họ của quý khách"
              required
            />
          </div>
          <div className="form-group input-name">
            <label htmlFor="lastname">Tên</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Tên của quý khách"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Gmail của quý khách"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            placeholder="Số điện thoại của quý khách"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <ApiForm></ApiForm>
        <div className="form-group">
          <label htmlFor="message">Thông tin thêm</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Nội dung thêm..."
            required
          ></textarea>
        </div>
        <div className="view-more">
          <button type="submit">Gửi ngay</button>
        </div>
      </form>
    </div>
  );
};

export default ThumbForm;
