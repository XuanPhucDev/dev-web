import React from "react";
import "./AboutUs.css";
import HeadingPage from "../../Global/Title/HeadingPage";
import WhyChooseUs from "../AboutUs/WhyChooseUs";
import OurHistory from "../AboutUs/OurHistory";
import OurSkill from "../AboutUs/OurSkill";
import About from "../Hompage/About";
import Partner from "../Hompage/Partner";
import Vision from "../Hompage/Vision";
import FeedbackCustomer from "../Hompage/Feedback";
import OurTeam from "../AboutUs/OurTeam";
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
      <OurTeam></OurTeam>
      <FeedbackCustomer></FeedbackCustomer>
    </div>
  );
};

export default AboutUs;
