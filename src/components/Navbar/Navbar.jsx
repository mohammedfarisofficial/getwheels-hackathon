import "./style.scss";
import Logo from "../../assets/logo/logo.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-line-container" />
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav-links">
        <h3>Home</h3>
        <h3>Shops</h3>
        <h3>Collection</h3>
        <h3>Buy a car</h3>
        <h3>Sell a Car</h3>
        <h3>About Us</h3>
        <h3>Login / Register</h3>
      </div>
    </div>
  );
};

export default Navbar;
