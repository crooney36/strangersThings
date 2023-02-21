import React, { useState } from "react";
import { registerUserBackend } from "../../api-adapter";

const Register = (props) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = props.token;
  const setToken = props.setToken;

  const registerUser = async () => {
    const data = await registerUserBackend(userName, password);
    setToken = data;
  };
  return (
    <div>
      <h1>Registration Page</h1>
      <form></form>
    </div>
  );
};
export default Register;
