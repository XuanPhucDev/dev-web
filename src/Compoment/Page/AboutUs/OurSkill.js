import Title from "../../Global/Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bsG from "../../../Asset/Images/About-Us/BsG.png";
import "./OurSkill.css";
const OurSkill = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Các giá trị mục tiêu
  const targets = {
    smm: 82,
    ppc: 59,
    seo: 99,
    digitalMarketing: 96,
  };

  // Trạng thái đếm cho mỗi mục tiêu
  const [counts, setCounts] = useState({
    smm: 0,
    ppc: 0,
    seo: 0,
    digitalMarketing: 0,
  });

  useEffect(() => {
    if (!inView) return;

    const intervals = {};

    // Hàm đếm cho từng mục tiêu
    const startCounting = (key, target) => {
      intervals[key] = setInterval(() => {
        setCounts((prevCounts) => {
          const newCount = prevCounts[key] + 1;
          if (newCount >= target) {
            clearInterval(intervals[key]);
            return { ...prevCounts, [key]: target };
          }
          return { ...prevCounts, [key]: newCount };
        });
      }, 100);
    };

    // Bắt đầu đếm cho mỗi giá trị
    Object.keys(targets).forEach((key) => {
      startCounting(key, targets[key]);
    });

    // Dọn dẹp intervals khi component unmount
    return () => Object.values(intervals).forEach(clearInterval);
  }, [inView]);
  return (
    <div className="our-skill space-compoment flex flex-column">
      <Container>
        <Row>
          <Title des="Skill" title="Our Skill"></Title>
        </Row>
        <Row>
          <div className="icon-our-skill-1">
            <img src={bsG} alt="" />
          </div>
          <Col>
            <div ref={ref} className="flex flex-row">
              <div className="content">
                <h4>{counts.smm} %</h4>
                <p>SMM</p>
              </div>
              <div className="content">
                <h4>{counts.ppc} %</h4>
                <p>PPC</p>
              </div>
              <div className="content">
                <h4>{counts.seo} %</h4>
                <p>SEO</p>
              </div>
              <div className="content">
                <h4>{counts.digitalMarketing} %</h4>
                <p>Digital Marketing</p>
              </div>
            </div>
          </Col>
          <div className="icon-our-skill-2">
            <img src={bsG} alt="" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default OurSkill;
