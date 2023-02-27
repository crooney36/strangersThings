import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { getUser } from "../api-adapter";

const Main = () => {
  const [token, setToken] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [isAuthor, setIsAuthor] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const getUserData = async () => {
    try {
      const localStorageToken = localStorage.getItem("token");
      let data = await getUser(localStorageToken);
      setUser(data);
      console.log("User data: ", user);
      setIsLoggedIn(true);
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
          searchTerm,
          setSearchTerm,
        ]}
      />
    </div>
  );
};

export default Main;
