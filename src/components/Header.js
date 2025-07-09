import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnelineStatus";

const Header = () => {
  const [btntext, SetBtntext] = useState("LogIn");
  const onlineStatus = UseOnlineStatus();
  return (
    <div className="mainContainer">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="navBar">
        <li>
          {" "}
          <Link to="/">{onlineStatus ? "✅" :"❌" }Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
        <li>
          <Link to="/grossary">Grossary</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <button
          className="btn-login"
          onClick={() => {
            btntext === "LogIn" ? SetBtntext("Log-Out") : SetBtntext("LogIn");
          }}
        >
          {" "}
          {btntext}
        </button>
      </ul>
    </div>
  );
};
export default Header;
