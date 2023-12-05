import "./login.css";
import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  // for uploader
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Handle drag and drop events
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  //
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set("name", name);

    formData.set("email", email);

    formData.set("password", password);

    formData.set("avatar", avatar);

    var object = {};

    formData.forEach((value, key) => (object[key] = value));

    var json = object;
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }

      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      (
      <div className="loginparent">
        <div className="login-page">
          <div className="formrm">
            <form className="login-form" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="email address"
                name="email"
                value={email}
                onChange={onChange}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                name="password"
                onChange={onChange}
              />

              <div
                className="profile-image-uploader"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {selectedImage ? (
                  <img src={selectedImage} alt="Profile" />
                ) : (
                  <div className="upload-text">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={onChange}
                      name="avatar"
                      required
                      id="fileInput"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="fileInput">
                      Drag & Drop or Click to Upload
                    </label>
                  </div>
                )}
              </div>
              <button>create</button>
              <p className="messagege">
                Already registered? <Link to="/login">Sign In</Link> or{" "}
                <Link to="/me/forgot/password">Forgot password?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      )
    </Fragment>
  );
};

export default Register;
