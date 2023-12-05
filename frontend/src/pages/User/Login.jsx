import "./login.css"
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom"


const Login = () => {

  
  const location = useLocation();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/"

  const navigate = useNavigate();
    

  const submitHandler = (e) => {
    e.preventDefault();
    
}

  return (
    <Fragment>
       (
          <div className='loginparent'>
                
          <div className="login-page">
      <div className="formrm">
        <form className="login-form" onSubmit={submitHandler}>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
          <button>login</button>
          <p className="messagege">Not registered? <Link to="/register">Create an account</Link> or <Link to="/me/forgot/password">Forgot Password?</Link></p>
        </form>
      </div>
    </div>
        </div>
       )

    </Fragment>
   
  )
}

export default Login