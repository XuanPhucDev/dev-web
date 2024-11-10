import React, { useState } from "react";
import useAxios from "../../../Context/API/UseAxios";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import ThumbProductMarketing from "./ThumbProductMarketing";
import "./ThumbTab.css";
const ThumbTab = (props) => {
  const data = props.data;
  const cate = useAxios(props.cate);
  const [filterData, setFilterData] = useState([data]);
  const handleChangData = (e) => {
    setFilterData(data.filter((item) => item.category === e));
  };
  return (
    <div className="thumb-tab space-compoment">
      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example"
        className="mb-3"
        onSelect={(e) => handleChangData(e)}
      >
        <Tab eventKey="all" title="All">
          <Row>
            {data &&
              data.map((item) => (
                <Col xl={3} lg={4} md={6} xs={6} sm={4}>
                  <ThumbProductMarketing
                  key={item.id}
                    id={item.id}
                    title={item.title}
                    images={item.imagethumb}
                    des={item.description}
                    price={item.price}
                    rate={item.rating}
                  />
                </Col>
              ))}
          </Row>
        </Tab>
        {cate.map((item) => (
          <Tab eventKey={item.category} title={item.title}>
            <Row>
              {filterData &&
                filterData.map((item) => (
                  <Col xl={3} lg={4} md={6} xs={6} sm={4}>
                    <ThumbProductMarketing
                      id={item.id}
                      key={item.id}
                      title={item.title}
                      images={item.imagethumb}
                      des={item.description}
                      price={item.price}
                      rate={item.rating}
                    />
                  </Col>
                ))}
            </Row>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default ThumbTab;
