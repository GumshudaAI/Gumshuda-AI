import React from "react";
import "./Footer.scss";
import logo from "./assets/Hanover 1logo.svg";
import Twitter from "./assets/twitter.svg";
import Fb from "./assets/fb.svg";
import Insta from "./assets/insta.svg";
import LinkedIn from "./assets/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="top">
        <div className="top-left">
          <div className="internal-div-1">
            <div className="internal-div-1-top">
              <img src={logo} alt="Logo" />{" "}
            </div>
            <div className="internal-div-1-mid">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>{" "}
            </div>
            <div className="internal-div-1-bottom">
              <img src={Fb} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Insta} alt="Instagram" />
              <img src={LinkedIn} alt="LinkedIn" />
            </div>
          </div>
          <div className="internal-div-2">
            <div className="internal-div-2-top">
              <p style={{ fontSize: "large", fontWeight: "bold" }}>Resources</p>
            </div>
            <div className="internal-div-2-bottom">
              <div className="list">Do's & Don'ts</div>
              <div className="list">Objectives</div>
              <div className="list">About the initiative</div>
            </div>
          </div>
        </div>
        <div className="top-right">
          <div className="internal-div-3">
            <div className="internal-div-3-top">
              <p style={{ fontSize: "large", fontWeight: "bold" }}>
                Usefull links
              </p>
            </div>
            <div className="internal-div-3-bottom">
              <div className="list">Terms of Service</div>
              <div className="list">Privacy Policy</div>
              <div className="list">Cookie Policy</div>
              <div className="list">Contact Us</div>
            </div>
          </div>
          <div className="internal-div-4">
            <div className="internal-div-4-top">
              <p style={{ fontSize: "large", fontWeight: "bold" }}>
                Track Your Ticket
              </p>
            </div>

            <div className="internal-div-4-bottom">
              <div className="search">
                <input
                  type="text"
                  placeholder="Ticket No."
                  className="search-inp"
                />
                <button
                  style={{
                    height: "2rem",
                    width: "10rem",
                    borderRadius: "0.2rem",
                    background: "rgba(38, 87, 164, 1)",
                    color:"white",
                    border:"None"
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-text">
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "x-large",
              fontWeight: "bold",
              color: "grey",
              textAlign:"center"
            }}
          >
            Copyright 2023, Rehome, All rights<br></br> reserved
          </p>
        </div>
      </div>
    </div>
  );
}
