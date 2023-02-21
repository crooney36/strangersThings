import React, { useState } from "react";
import { loginUserBackend } from "../../api-adapter";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = props.token;
  const setToken = props.setToken;

  const loginUser = async () => {
    const data = await loginUserBackend(userName, password);
    setToken = data;
  };
  return (
    <div id="loginPage">
      <form
        onSubmit={(element) => {
          element.preventDefault();
          loginUser();
        }}
      >
        <input
          type="text"
          placeholder="userName"
          value={userName}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit"> Login </button>
        <div id="registrationOnLogin">
          <h5>Create an account here!</h5>
          <Link to="/Registration-page">
            <button className="nav-button">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
