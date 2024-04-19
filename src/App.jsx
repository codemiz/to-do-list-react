import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./Login";
import Footer from "./Footer";

let array = [];

function App() {
  return (
    <>
      <Navbar one="Sign in" home="Home" two="Sign up" />
      <Login />
      <Footer/>
    </>
  );
}

export default App;
