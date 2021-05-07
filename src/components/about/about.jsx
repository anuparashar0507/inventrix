import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/sunny.jpeg";
import Person02 from "../../assets/about/anupam.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT US." />
      <p className="font12">
        Turning your vision into reality by creating<br></br>unique Web & Mobile projects.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Sunny Chouhan" job="Graphic designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Anupam Parashar" job="Web Developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
