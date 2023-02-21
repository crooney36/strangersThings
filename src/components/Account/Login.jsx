import React, { useState } from "react";
import { loginUserBackend } from "../../api-adapter";

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
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={(element) => {
          element.preventDefault();
          loginUser();
        }}
      ></form>
    </div>
  );
};

export default Login;
