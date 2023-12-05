import { forgotPassword, clearErrors } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import React, { Fragment, useState, useEffect } from "react";
import Loader from "../layouts/Loader";
import { useAlert } from "react-alert";

const Forgotpassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  

  const [email, setEmail] = useState("");

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error,  message]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set("email", email);

    var object = {};

    formData.forEach((value, key) => (object[key] = value));

    var json = object;

    dispatch(forgotPassword(json));
  };

  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <div className="loginparent">
              <MetaData title={"Reset password"}/>


            <div className="login-page">
              <div className="formrm">
                <h3 style={{marginBottom : "15px"}}>Forgot Password</h3>
                <form className="login-form" onSubmit={submitHandler}>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button disabled={loading ? true : false}>Send Email</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default Forgotpassword;
