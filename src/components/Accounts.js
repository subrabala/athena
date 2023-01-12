import "./accounts.css";
import { Link} from "react-router-dom";
import Login from "./Login";
import eth from "../assets/ethereum.png";
import push from "../assets/push.png";
// import worldid from "../assets/worldcoin.png";


const Accounts = () => {
    
  return (
    <div className="whole">
    <nav>
        <ul>
            <Link className="index-homepage" to="/">Logo</Link>
            <div className="circular-bar">
                <a href="#" className="active">Home</a>
                <a href="#" className="index-link-blog">Blogs</a>
                <a href="#" className="index-link-contact">Contact</a>
            </div>
            <Link className="index-login" to="/Login">Login</Link>
            
        </ul>
    </nav>

    <h1 className="header-txt">
        <div>
        Speedy,<br></br> Easy & <span className="green">Fast.</span>
        </div>
    </h1>

    {/* <div
        className="eth-index-logo">
        <img src={eth}
        className="eth-logo-official"/>
    </div> */}
    <a href="#">
        <div className="mouse"></div>
    </a>    
  </div> 
  );
};

export default Accounts;
