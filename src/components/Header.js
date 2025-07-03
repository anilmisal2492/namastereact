import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="mainContainer">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="navBar">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Cart</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};
export default Header;
