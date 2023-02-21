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
      <form onSubmit= {(element) => {
          element.preventDefault();
          registerUser();
        }} >
     
       <input type ="text" placeholder="userName" value = {userName} required onChange = {(e)=> {setUsername(e.target.value)}} /> 
       <input type ="password" placeholder="password" value = {password} required onChange = {(e)=> {setPassword(e.target.value)}} /> 
       <input type ="password" placeholder="confirm Password"value = {confirmPassword} required onChange ={(e)=> {setConfirmPassword(e.target.value)}} />
       <button type = "submit"> Register </button>
      </form>
    </div>
  );
};
export default Register;
