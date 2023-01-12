import { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./mainpage.css";
import Arrow from "../assets/right-arrow-w.png";
import user from "../assets/user.png";
import Time from "../assets/time-past.png";
import Usdcircle from "../assets/usd-circle.png";
import Histogram from "../assets/chart-histogram.png";
import Commentquestion from "../assets/comment-question.png";
import Moneybill from "../assets/money-bill-wave.png";
import Badgecheck from "../assets/badge-check.png";
import Ethereum from "../assets/ethereum.png";
import Rate from "../assets/interest-rate.png";
import Righta from "../assets/right-a.png";
// import ChatBot from "./ChatBot";

const MainPage = () => {
  return (
    <div className="container-fluid">
      <Row>
        <div className="res-body">
          <div className="arr-wrap">
            <img src={Arrow} className="right-arr" />
          </div>
          <img src={Histogram} className="image-nav" />
          <img src={Time} className="image-nav" />
          <img src={Usdcircle} className="image-nav" />
          <img src={Commentquestion} className="image-nav" />
          <img src={Moneybill} className="image-nav" />
          <img src={Badgecheck} className="image-nav" />
        </div>

        <div className="res-summary">
          <Row>
            <Col lg={4}>
              <h1
                className="dashboard-txt"
                style={{ paddingTop: "50px", paddingLeft: "20px" }}
              >
                Dashboard Overview
              </h1>
            </Col>
            <Col lg={4}></Col>
            <Col lg={4}>
              <nav>
                <div>
                  <div>
                    <img src={user} className="user" />
                  </div>

                  <div className="circular-bar-accounts">
                    <a href="#" className="active-accounts">
                      Account
                    </a>
                    <a
                      href="#"
                      className="username-accounts"
                      style={{ textTransform: "none" }}
                    >
                      Username
                    </a>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <div className="analyst-cont" style={{ display: "flex" }}>
              <div className="card" style={{ display: "flex" }}>
                <div
                  className="heading"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    src={Rate}
                    className="dashboard-img"
                    style={{ paddingRight: "20px" }}
                  />
                  <h1 className="borrow-txt">Borrower</h1>
                </div>
                <div className="text">
                  Amount
                  <input type="text" placeholder="" />
                </div>
                <div className="collateral">
                  Collateral
                  <img src={Ethereum} className="eth-lend" />
                </div>

                <div
                  className="find-lenderers"
                  style={{ color: "#fff", display:"flex", justifyContent:"end" }}
                >
                  <img src={Righta} className="right-arrow" />
                </div>
              </div>
              <div className="card">
                <div
                  className="heading"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    src={Rate}
                    className="dashboard-img"
                    style={{ paddingRight: "20px" }}
                  />
                  <h1 className="borrow-txt">Lender</h1>
                </div>
                <div className="text">
                  Amount
                  <input type="text" placeholder="" />
                </div>
                <div className="collateral">Interest</div>
                
                <Link
                  to="/ChatBot"
                  className="find-lenderers"
                  style={{ color: "#fff", display:"flex", justifyContent:"end"}}
                >
                    <div className="meter">
                  <div className="slider">
                    <input
                      type="range"
                      min="0"
                      max="15"
                      onchange="rangevalue.value=value"
                    />
                    <output id="rangevalue">15</output>
                  </div>
                </div>
                  <img src={Righta} className="right-arrow-lender" />
                </Link>
              </div>
            </div>
          </Row>
          <div className="gcard">
            <div className="graphs"></div>
            <div className="graphs"></div>
            <div className="graphs"></div>
          </div>

          <div
            className="analyst-cont"
            style={{ position: "relative", marginTop: "0.5%" }}
          >
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </Row>

      {/* <ChatBot></ChatBot> */}
    </div>
  );
};

export default MainPage;
