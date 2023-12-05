import React, { Fragment, useEffect, useState } from "react";
import "../User/login.css";
import { useNavigate } from "react-router-dom";
import { clearErrors, updatePassword } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import { UPDATE_PASSWORD_RESET } from "../../constants/userContants";
import Loader from "../layouts/Loader";
import { useAlert } from "react-alert";

const Changepassword = () => {

  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");

  const { isUpdated, error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const alert = useAlert();


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Update password successfully");

      navigate("/me");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, alert, isUpdated, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set("oldPassword", oldPassword);

    formData.set("password", password);

    var object = {};

    formData.forEach((value, key) => (object[key] = value));

    var json = object;

    dispatch(updatePassword(json));
  };

  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <div className="loginparent">
            <MetaData title={"Change password"} />

            <div className="login-page">
              <div className="formrm">
                <form className="login-form" onSubmit={submitHandler}>
                  <input
                    type="password"
                    placeholder="Old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button>Update</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default Changepassword;
