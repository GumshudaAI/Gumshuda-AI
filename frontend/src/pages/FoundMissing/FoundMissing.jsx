import React, { useState } from "react";
import "./FoundMissing.scss";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

export default function FoundMissing() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", file);
    console.log("FormData:", formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/get_results/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setShowImages(true);
      setImages(response.data.images);
      console.log("Response:", response.data.images);
    } catch (error) {
      setShowImages(false);
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div id="parent">
        {!showImages && (
          <div className="div-inner-left">
            <div className="leftdetails">
              <h4>Name: </h4>
              <div className="name">
                <input
                  type="text"
                  value={description}
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <h4>Description: </h4>
              <div className="name">
                <input
                  type="text"
                  value={description}
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <h4>City where it was Lost</h4>
              <div className="name">
                <input
                  type="text"
                  value={description}
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <h4>Date when Lost: </h4>
              <div className="name">
                <input
                  type="date"
                  value={description}
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
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
          </div>
        )}
        {showImages &&
          images.map((link, index) => (
            <div key={index}>
              <img
                src={link}
                style={{ width: "200px", height: "150px" }}
                alt={`${index}`}
              />
            </div>
          ))}
      </div>
    </>
  );
}
