import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Main = () => {
  const [token, setToken] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [isAuthor, setIsAuthor] = React.useState(false);

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
