import React from "react";
import "./HeadingPage.css";
const HeadingPage = (props) => {
  return (
    <div className="heading-page flex flex-row">
          <div className="title">
            <h2>{props.title}</h2>
            <h3>
              D.A.C {">"} {props.title}
            </h3>
          </div>
    </div>
  );
};

export default HeadingPage;
