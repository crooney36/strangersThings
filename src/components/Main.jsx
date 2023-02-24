import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { getUser } from "../api-adapter";

const Main = () => {
  const [token, setToken] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [isAuthor, setIsAuthor] = React.useState(false);

  const getUserData = async () => {
    try {
      let data = await getUser(localStorage.getItem("token"));
      setUser(data);
      console.log("User data: ", data);
      setIsLoggedIn(true);
      console.log("Is logged in: ", isLoggedIn);
    } catch (err) {
      console.log("Error getting user data");
    }
  };

  // Listen for changes to isLoggedIn and get user data corresponding to token
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData();
      console.log("User data: ", user);
    }
  }, [isLoggedIn]);

  return (
    <div id="main">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
      />
      <Outlet
        context={[
          token,
          setToken,
          isLoggedIn,
          setIsLoggedIn,
          user,
          setUser,
          isAuthor,
          setIsAuthor,
        ]}
      />
    </div>
  );
};

export default Main;
