import { useState } from "react";
import { Card, Col,Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./mainpage.css";
import Arrow from  "../assets/right-arrow-w.png";
import user from "../assets/user.png";
import  time from "../assets/time-past.png";
import usdcircle from "../assets/usd-circle.png";
import histogram from "../assets/chart-histogram.png";
import commentquestion from "../assets/comment-question.png";
import moneybill from "../assets/money-bill-wave.png";
import badgecheck from "../assets/badge-check.png";
import ethereum from "../assets/ethereum.png";
import rate from "../assets/interest-rate.png"
import righta from "../assets/right-a.png";

const MainPage=()=>{

    return(
        <div className="container" fluid="true">
        <div className="result-area">

<div className="res-body">

    <img src={righta} className="right-a"/>

    <a href="#"> <img src={histogram} className="financial"/></a>
    <img src={time} className="history"/>
    <img src={usdcircle} className="dollar"/>
    <img src={commentquestion} className="liability"/>
    <img src={moneybill} className="loans"/>
    <img src={badgecheck} className="verify"/>

</div>

<div className="res-summary">

    <h1 className="dashboard-txt">Dashboard Overview</h1>

    <nav>
        <ul>

            <div className="circular-bar-accounts">
                <a href="#" className="active-accounts">Account</a>
                <a href="#" className="username-accounts" style={{textTransform:"none"}}>Username</a>
            </div>

        </ul>

        <img src={user} className="user"/>

    </nav>
<div className="analyst-cont">
        <div className="card">
            <div className="heading">
                <img src={rate} className="dashboard-img"/>
                <h1 className="borrow-txt">Borrower</h1>

            </div>
            <div className="text">
                Amount<input type="text" placeholder="Max amount 15k"/>

            </div>
            <div className="collateral">
                Collateral
            </div>
            <div className="but"> <button className="the-button"> <img src={ethereum}
                        className="eth-lend"/></button></div>
                        <a href="#" className="find-lenderers" style={{color:"#0a0a0a"}}>
                        <img src={righta} className="right-arrow"/></a>

        </div>
        <div className="card">
            <div className="heading">
                <img src={rate} className="dashboard-img"/>
                <h1 className="borrow-txt">Lender</h1>

            </div>
            <div className="text">
                Amount<input type="text" placeholder="Max amount 15k"/>

            </div>
            <div className="collateral">
                Interest
            </div>
                        <div className="meter">
                            <div className="slider">
                                <input type = "range" min="0" max="15" onchange="rangevalue.value=value"/>
                                  <output id="rangevalue">15</output>
                                </div>
                               
                        </div>
                        <Link to="/ChatBot" className="find-lenderers" style={{color:"#0a0a0a"}}>
                            <img src={righta} className="right-arrow-lender"/></Link>

        </div>


    </div>
    <div className="gcard">
        <div className="graphs"></div>
        <div className="graphs"></div>
        <div className="graphs"></div>
    </div>

    <div className="analyst-cont" style={{position:"relative",marginTop:"0.5%"}}>
        <div className="card">
          
        </div>
        <div className="card">
     
        </div>


    </div>

</div>

</div>
        </div>

    );
};

export default MainPage;
