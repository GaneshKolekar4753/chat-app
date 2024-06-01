import React from "react";
import logoImg from "../assets/images/platform.png";
import { TextField } from "@mui/material";
const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-image">
        <img src={logoImg} alt="logoImage" />
      </div>
      <div className="login-input-box">
        <p>Login to your Account..</p>
        <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Enter Username...." />
        <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Password" />

      </div>
    </div>
  );
};

export default Login;
