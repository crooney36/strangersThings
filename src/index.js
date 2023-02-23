import React from "react";
import ReactDOM from "react-dom/client";
import {
  Main,
  AllPosts,
  Post,
  Login,
  Register,
  NewPost,
  Profile,
  Messages,
} from "./components";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Account from "./components/Account/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<AllPosts />} />
      <Route path=":id" element={<Post />} />
      <Route path="login-page" element={<Login />} />
      <Route path="registration-page" element={<Register />} />
      <Route path="newpost-page" element={<NewPost />} />
      <Route path="profile-page" element={<Profile />} />
      <Route path="send-messages-page" element={<Messages />} />
    </Route>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
