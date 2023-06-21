import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername , setToken } from "../../store/authslice";
import "../Login/Login.css";
import { API } from "../General";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    let credentials = {
      username,
      password,
    };
    fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        dispatch(setUsername(result.username));
        dispatch(setToken(result.token));
        navigate("/home");
      });
  };
  return (
    <div className="login-form">
      <div className="username">
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          className="input-text"
          onChange={(event) => {
            setusername(event.target.value);
            // console.log(event.target.value);
          }}
        />
      </div>
      <div className="password">
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          className="input-text"
          onChange={(event) => {
            setpassword(event.target.value);
            // console.log(event.target.value);
          }}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
