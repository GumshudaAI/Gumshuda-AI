import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import "./Parent.scss";
import Dragdrop from "../../components/Draganddrop/Draganddrop";
import Navbar from "../../components/Navbar/Navbar";
import Avatar from "@mui/joy/Avatar";
import Matching from "../../components/Matching/Matching";

const parentdata = [
  {
    Name: "Gagan",
    Mobile: "8349061831",
    Address: "Hostel no 01",
  },
  {
    Name: "Aryan",
    Mobile: "8349061831",
    Address: "Hostel no 06",
  },
  {
    Name: "Kartik",
    Mobile: "8349061831",
    Address: "Hostel no 05",
  },
];

export default function Parent() {
  const [Open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <>
      <Navbar />
      <div id="parent">
        <div className="div-inner-left">
          <div className="leftdetails">
            <h4>Enter Your name</h4>
            <div className="name">
              <input type="name" placeholder="Name"></input>
            </div>
            <h4>Phonenumber</h4>
            <div className="phonenumber">
              <input type="name" placeholder="Phonenumber"></input>
            </div>
            <h4>Adhar</h4>
            <div className="adhar">
              <input type="name" placeholder="Adhar"></input>
            </div>
            <h4>Address</h4>
            <div className="address">
              <input type="name" placeholder="Address"></input>
            </div>
            <h4>Aboutchild</h4>
            <div className="aboutchild">
              <textarea placeholder="Details"></textarea>
            </div>
          </div>

          <div className="rightdi">
            <div className="dd">
              <Dragdrop />
            </div>
            <button type="Sumbit" onClick={handleOpenDialog}>
              Sumbit
            </button>
            <Dialog
              open={Open}
              onClose={handleCloseDialog}
              sx={{ width: "80vw", height: "80vh" }}
            >
              <DialogContent>
                <Matching />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="div-inner-right">
          <div className="details">
            <h4>Gagan Shukla</h4>
            <Avatar
              style={{
                marginRight: "2rem",
                marginRight: "2rem",
                marginLeft: "6rem",
                marginTop: "7px",
              }}
              size="lg"
            >
              RE
            </Avatar>
          </div>

          <div className="details-card-parent">
            <p>Mobile : 8669528559</p>
            <br></br>
            <p>Adress : 84561</p>
          </div>
        </div>
      </div>
    </>
  );
}
