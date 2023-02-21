import React from "react";
import ReactDOM from "react-dom/client";
import { Main, AllPosts, Post, Login, Register, NewPost } from "./components";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<AllPosts />} />
      <Route path=":id" element={<Post />} />
      <Route path="login-page" element = {<Login />} />
      <Route path="Registration-page" element = {<Register />} />
      <Route path="Newpost-page" element = {<NewPost />} />
    </Route>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
