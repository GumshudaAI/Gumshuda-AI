import React, { useState } from "react";
import "./Report.scss";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

export default function Report() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [postSuccess, setPostSuccess] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const finalData = JSON.stringify({
      "description": description,
      "name": name,
      "city": city,
      "date": date,
    });
    formData.append("finalData", finalData);
    formData.append("image", file);
    console.log("FormData:", formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/post_request/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPostSuccess(true);
      console.log("Response:", response.data);
    } catch (error) {
      setPostSuccess(false);
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div id="parent">
        <div className="div-inner-left">
          {!postSuccess && (
            <div className="leftdetails">
              <h4>Name: </h4>
              <div className="name">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <h4>Description: </h4>
              <div className="name">
                <input
                  type="text"
                  value={description}
                  placeholder="Enter Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <h4>City where it was Lost</h4>
              <div className="name">
                <input
                  type="text"
                  value={city}
                  placeholder="Enter City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <h4>Date when Lost: </h4>
              <div className="name">
                <input
                  type="date"
                  value={date}
                  placeholder="Enter Date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <h4>Upload refernce image: </h4>
              <div className="name">
                <input type="file" onChange={handleFileChange} />
              </div>

              <button type="submit" onClick={handleSubmit}>
                Sumbit
              </button>
            </div>
          )}
          {postSuccess && (
            <div className="leftdetails">
              <h4>Successfully posted the image</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
