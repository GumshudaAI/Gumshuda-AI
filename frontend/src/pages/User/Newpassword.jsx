import { resetPassword, clearErrors } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import React, { Fragment, useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Loader from "../layouts/Loader";
import { useAlert } from "react-alert";


const Newpassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams();
    const alert = useAlert();

  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const { error,success} = useSelector(
      (state) => state.forgotPassword
    );
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      if (success) {
        alert.success("Password updated successfully");
        navigate("/login")
      }
    }, [dispatch, alert, error, success, navigate]);
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
  
      formData.set("password", password);
      formData.set("confirmPassword", confirmPassword);
  
      var object = {};
  
      formData.forEach((value, key) => (object[key] = value));
  
      var json = object;
  
      dispatch(resetPassword(params.token, json));
    };


  return (
    <div>
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="loginparent">
          <div className="login-page">
            <div className="formrm">
              <h3>New Password</h3>
              <form className="login-form" onSubmit={submitHandler}>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button disabled={loading ? true : false}>Send Email</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  </div>
  )
}

export default Newpassword