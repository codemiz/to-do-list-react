import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./Login";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Signup from "./Signup";
import Profile from "./Profile";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar  home="Home" one="Log in" two="Profile" /> <Homepage intro="Login to continue"/></>
    },
    {
      path:"/login",
      element: <><Navbar  home="Home" one="Log in" two="Sign up" /> <Login/></>
    },
    {
      path:"/signup",
      element: <><Navbar  home="Home" one="Log in" two="Sign up" /> <Signup/></>
    },
    {
      path:"/profile",
      element: <><Navbar  home="Home" one="Log in" two="Sign up" /> <Profile/></>
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />
     
      <Footer/>
    </>
  );
}

export default App;
