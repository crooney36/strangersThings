import React, { useState } from "react";
import { loginUserBackend } from "../../api-adapter";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = props;
  const Navigate = useNavigate();
  console.log("Login props", props);
  console.log(props.setIsLoggedIn);

  const handleLogin = async () => {
    // Perform login logic here
    try {
      const data = await loginUserBackend(username, password);
      console.log("Login front end", data);
      localStorage.setItem("token", data);
      setIsLoggedIn(true);
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="loginPage">
      <form
        onSubmit={(element) => {
          element.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="userName"
          value={username}
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
        <button type="submit">Login</button>
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
