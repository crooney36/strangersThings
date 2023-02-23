import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Main = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const loginHelperFunction = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    setIsLoggedIn(true);
  };

  const logoutHelperFunction = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
  };
  return (
    <div id="main">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
      />
      <Outlet
        token={token}
        setToken={setToken}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
        setUser={setUser}
        loginHelperFunction={loginHelperFunction}
        logoutHelperFunction={logoutHelperFunction}
      />
    </div>
  );
};

export default Main;
