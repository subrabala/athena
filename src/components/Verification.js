import { Link } from "react-router-dom";
import {Col,Container,Row} from "reactstrap";
import "./login.css";
import { WorldIDWidget } from '@worldcoin/id'

import Circle from "../assets/Ellipse 1.png";
import { useEffect, useState } from "react";

const Verification = () => {
  

  return (

    <Container className="login" fluid={true}>
      <Row>
        <Col
          lg={5}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="glass col">
          <div id="world-id-container"></div>
          <div className="captcha"></div>
          </div>
          </Col>      
          <Col lg={7} className="d-flex  justify-content-center">
          <img src={Circle} alt="MyCircle" className="circle" />
        <WorldIDWidget actionId="123" signal="123"/>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Verification;