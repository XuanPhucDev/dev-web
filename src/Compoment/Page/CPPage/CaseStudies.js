import React from "react";
import HeadingPage from "../../Global/Title/HeadingPage";
import ThumbTab from "../../Global/Thumb/ThumbTab";
import { Container } from "react-bootstrap";
import dataCaseStudies from "../../../Context/Data/DataCaseStudies";
import usePageTitle from "../../../Features/TitlePage";
const CaseStudies = () => {
  usePageTitle(`Các Dự Án - D.A.C`);

  return (
    <div className="page-caseStudies">
      <Container className="Product-Marketing ">
        <HeadingPage title="Các dự án đã thực hiện"></HeadingPage>

        <ThumbTab
          data={dataCaseStudies}
          cate="https://671eebe51dfc429919836d48.mockapi.io/myweb/categoryCaseStudies"
        ></ThumbTab>
      </Container>
    </div>
  );
};

export default CaseStudies;
