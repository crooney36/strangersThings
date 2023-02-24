import React, { useState } from "react";
import { registerUserBackend } from "../../api-adapter";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Navigate = useNavigate();

  const registerUser = async () => {
    const data = await registerUserBackend(username, password);
    localStorage.setItem("token", data);
    Navigate("/");
  };

  return (
    <div>
      <div id="registration-header" r>
        <h1 id="registration-header-title">Registration Page</h1>
        <p id="registration-header-p">
          <strong>
            Usernames and passwords must be at least 3 characters!
          </strong>
        </p>
      </div>
      <form
        onSubmit={(element) => {
          element.preventDefault();
          if (
            password === confirmPassword &&
            username.length >= 3 &&
            password.length >= 3
          ) {
            registerUser();
          }
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
        <input
          type="password"
          placeholder="confirm Password"
          value={confirmPassword}
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button type="submit"> Register </button>
      </form>
    </div>
  );
};
export default Register;
