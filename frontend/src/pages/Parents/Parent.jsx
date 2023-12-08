import React, { useState } from "react";
import "./Parent.scss";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

export default function Parent() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

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
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div id="parent">
        <div className="div-inner-left">
          <div className="leftdetails">
            <h4>Enter Description of the product, including </h4>
            <div className="name">
              <input
                type="text"
                value={description}
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <h4>Select image of your product </h4>
            <div className="name">
              <input type="file" onChange={handleFileChange} />
            </div>

            <button type="submit" onClick={handleSubmit}>
              Sumbit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
