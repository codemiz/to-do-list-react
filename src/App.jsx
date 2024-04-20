import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./Login";
import Footer from "./Footer";
import Homepage from "./Homepage";

let array = [];

function App() {
  return (
    <>
      <Navbar one="Sign in" home="Home" two="Sign up" />
     <Homepage/>
      <Footer/>
    </>
  );
}

export default App;
