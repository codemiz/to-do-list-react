import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./Login";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Signup from "./Signup";
import Profile from "./Profile";

let array = [];

function App() {
  return (
    <>
      <Navbar one="Mark's profile" home="Home" two="Log Out" />
      
     <Profile></Profile>
      <Footer/>
    </>
  );
}

export default App;
