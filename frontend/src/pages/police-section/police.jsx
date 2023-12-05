import React from "react";
import "./police.scss";
import Logo from "./asset/logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Avatar from "@mui/joy/Avatar";
import Cardinner from "./asset/cardinner.png";
import Graph from "./asset/graph.svg";
import Dragdrop from "../../components/Draganddrop/Draganddrop";
import Navbar from "../../components/Navbar/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Notification = [
  {
    pic: Cardinner,
    name: "Gagan",
    location: "satna",
    Time: "7:20PM",
    Date: "20 Sep 2023",
  },
  {
    pic: Cardinner,
    name: "Ritik",
    location: "satna",
    Time: "7:20PM",
    Date: "20 Sep 2023",
  },
  {
    pic: Cardinner,
    name: "Aryan",
    location: "satna",
    Time: "7:20PM",
    Date: "20 Sep 2023",
  },
];

const data = [
  { city: "Delhi", missingChildren: 504 },
  { city: "Mumbai", missingChildren: 4333 },
  { city: "Kolkata", missingChildren: 399 },
  { city: "Chennai", missingChildren: 25 },
  { city: "Bengaluru", missingChildren: 208 },
  { city: "Hyderabad", missingChildren: 1800 },
  { city: "Ahmedabad", missingChildren: 15 },
  { city: "Pune", missingChildren: 12 },
  { city: "Jaipur", missingChildren: 1000 },
  { city: "Lucknow", missingChildren: 3845 },
  { city: "Kanpur", missingChildren: 657 },
  { city: "Patna", missingChildren: 589 },
  { city: "Indore", missingChildren: 4590 },
  { city: "Chandigarh", missingChildren: 367 },
  { city: "Bhopal", missingChildren: 2000 },
];

export default function police() {
  return (
    <div>
      <Navbar />
      <div id="police">
        <div className="left">
          <div className="leftbar">
            <img src={Logo}></img>

            <list className="navitems">
              <div className="data1">
                <li className="item1">
                  <HomeIcon />
                </li>
                <span className="data">Home</span>
              </div>
              <div className="data1">
                <li className="item1">
                  <NotificationsActiveIcon />
                </li>
                <span className="data">Notification</span>
              </div>
              <div className="data1">
                <li className="item1">
                  <BarChartOutlinedIcon />
                </li>
                <span className="data">Statistics</span>
              </div>
              <div className="data1">
                <li className="item1">
                  <SettingsIcon />
                </li>
                <span className="data">Setting</span>
              </div>
            </list>

            <div className="bottom">
              <div className="last">
                <li className="lastitem">
                  <InfoOutlinedIcon />
                </li>
                <span className="lastdata"> Help & Information </span>
              </div>
              <div className="last1">
                <li className="lastitem">
                  <LogoutOutlinedIcon />
                </li>
                <span className="lastdata">Logout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="righttopsearch">
            <div className="content">
              <h1>Track Ticket Number</h1>
            </div>

            <div className="righttop">
              <div className="search">
                <input
                  type="text"
                  placeholder="Ticket No."
                  className="search-inp"
                />
                <button
                  style={{
                    height: "2rem",
                    width: "5rem",
                    marginBottom: "0",
                    borderRadius: "0.2rem",
                    background: "rgba(38, 87, 164, 1)",
                    color: "white",
                    border: "None",
                    marginRight: "8rem",
                  }}
                >
                  Search
                </button>
              </div>
              <Avatar style={{ marginRight: "2rem" }} size="lg">
                RE
              </Avatar>
            </div>
          </div>

          <div className="rightgraph">
            {/* <img src={Graph}/> */}
            <LineChart width={900} height={290} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="missingChildren" stroke="#8884d8" />
            </LineChart>
          </div>

          <div className="rightdown">
            <div className="imageupload">
              <div className="dad">
                {" "}
                <Dragdrop />
              </div>
            </div>
            <div className="notification">
              <div className="uppertext">
                <h2>Notification</h2>
                <h2>View All</h2>
              </div>

              {Notification.map((data, i) => (
                <div className="card">
                  <div className="card-img">
                    <img src={data.pic} />
                  </div>
                  <div className="card-d">
                    <h3>{data.name}</h3>
                    <h6>
                      <span>{data.Date} | </span>
                      <span>{data.Time} | </span>
                      <span>{data.location}</span>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
