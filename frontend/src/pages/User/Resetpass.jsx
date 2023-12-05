import { resetPassword, clearErrors } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import React, { Fragment, useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";

const Resetpass = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { error, success } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Password updated successfully");
      navigate("/login");
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
    <Fragment>
      
        <div className="loginparent">
          <MetaData title={"Reset password"} />
          <div className="login-page">
            <div className="formrm">
              <form className="login-form" onSubmit={submitHandler}>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button>Set password</button>
              </form>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Resetpass;
