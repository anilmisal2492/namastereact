import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btntext, SetBtntext] = useState("LogIn");
  return (
    <div className="mainContainer">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="navBar">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Cart</li>
        <li>Contact us</li>
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
