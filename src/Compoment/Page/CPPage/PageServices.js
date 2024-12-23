import React from "react";
import HeadingPage from "../../Global/Title/HeadingPage";

import "./PageServices.css";
import WhyChooseUs from "../AboutUs/WhyChooseUs";
import OurSkill from "../AboutUs/OurSkill";
import ListServices from "../Services/ListServices";
import OurTeam from "../AboutUs/OurTeam";
import usePageTitle from "../../../Features/TitlePage";
const PageServices = () => {
  usePageTitle(`Dịch vụ - D.A.C`);

  return (
    <div className="page-services">
      <HeadingPage title="Dịch vụ của chúng tôi"></HeadingPage>
      <ListServices></ListServices>
      <WhyChooseUs></WhyChooseUs>
      <OurSkill></OurSkill>
      <OurTeam></OurTeam>
    </div>
  );
};

export default PageServices;
