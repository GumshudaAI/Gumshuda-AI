import "./Home.scss";
import React from "react";
import Img1 from "./asset/left.jpg";
import Img2 from "./asset/card1.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Law from "../Laws/Law";
import { useNavigate } from "react-router-dom";

const Carddata = [
  {
    main: Img2,
    head: "Citizen",
    para: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    main: Img2,
    head: "Today Static",
    para: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    main: Img2,
    head: "Police login",
    para: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    main: Img2,
    head: "Cwc Login",
    para: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/police")
  }
  const handleParent = () => {
    navigate("/parent")
  }
  
  return (
    <div className="root">
      <NavBar />
      <div id="main">
        <div className="innerdiv">
          <div className="leftinnerdiv">
            <div className="heading">
              <h1>
                TALAASH AI
              </h1>
              <p>Now finding the lost belongings is Easy</p>
            </div>
            <div className="innerbtn">
              <button className="bt1" onClick={handleParent}>Report Missing Belonging</button>
              <button className="bt2">Found Missing Belonging</button>
            </div>
          </div>
          <div className="rightinnerdiv">
            <img src={Img1} />
          </div>
        </div>

        {/* card div */}

        <div id="card-section">
          {Carddata.map((data, i) => (
            <div className="card">
              <img src={data.main} />
              <h3>{data.head}</h3>
              <p>{data.para}</p>
              <span className="icon" onClick={handleClick}>
                <ArrowCircleRightOutlinedIcon/>
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
