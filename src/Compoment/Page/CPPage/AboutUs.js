import React from "react";
import "./AboutUs.css";
import HeadingPage from "../../Global/Title/HeadingPage";
import About from "../Marketing/CategoryMar/About";
import Partner from "../Marketing/CategoryMar/Partner";
import WhyChooseUs from "../AboutUs/WhyChooseUs";
import Vision from "../Marketing/CategoryMar/Vision";
import OurHistory from "../AboutUs/OurHistory";
import FeedbackCustomer from "../Marketing/CategoryMar/Feedback";
import OurSkill from "../AboutUs/OurSkill";
const AboutUs = () => {
  return (
    <div className="page-about-us">
      <HeadingPage title="About Us"></HeadingPage>
      <About></About>
      <Partner></Partner>
      <WhyChooseUs></WhyChooseUs>
      <Vision></Vision>
      <OurHistory></OurHistory>
      <OurSkill></OurSkill>
      <FeedbackCustomer></FeedbackCustomer>
    </div>
  );
};

export default AboutUs;
