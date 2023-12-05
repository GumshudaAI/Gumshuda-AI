import { React, useState } from "react";
import Logo from "./assets/Hanover 1logo.svg";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import Law from "../../pages/Laws/Law";


export default function Navbar() {
  const [signupOpen, setSignupOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register")
  };
  const handleLogo = () => {
    navigate("/")
  }
  const handleLaw = () => {
    navigate("/laws")
  }
  

  return (
    <div className="navbar-main">
      <div className="nav-left">
        <div className="navlogo" onClick={handleLogo}>
          <img src={Logo} style={{ height: "3.6rem" }} />
        </div>
        <div className="navlist">
          <div className="items">Home</div>
          <div className="items">About Us</div>
          <div className="items">Feedback</div>
          <div className="items" onClick={handleLaw}>Rules</div>
        </div>
      </div>
      <div className="nav-right">
        <div className="items-right">EN</div>
        <div className="items-right" onClick={handleClick}>
          Login
        </div>
        <div className="items-right">Help</div>
      </div>
    
    </div>
  );
}
