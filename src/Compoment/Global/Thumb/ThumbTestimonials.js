import React from "react";
import "./ThumbTestimonial.css";
const ThumbTestimonials = (props) => {
  return (
    <div class="testimonial-boxarea ">
      <img
        decoding="async"
        src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/quito4.svg"
        alt=""
        class="quito"
      />

      <p>{props.content}</p>

      <div class="author-logo">
        <div class="text">
          <a href="#">{props.name}</a>
          <p>
            {[...Array(props.star)].map((_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}{" "}
          </p>
        </div>

        <div class="logo">
          <img decoding="async" src={props.images} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThumbTestimonials;
