import React, { useState,useContext,useEffect } from "react";
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
import { AuthProvider } from "./context/AuthContext";
import { AuthContext } from "./context/AuthContext";


function App() {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState(authContext ? authContext.user : null);

  useEffect(() => {
    setUser(authContext ? authContext.user : null);
  }, [authContext]);
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar  first="Home" second={user?"Profile":"Log in"} third={user?"Log out":"Sign up"}/> <Homepage/></>
    },
    {
      path:"/login",
      element: <><Navbar  first="Home" second="Log in" third="Sign up" /> <Login/></>
    },
    {
      path:"/signup",
      element: <><Navbar  first="Home" second="Log in" third="Sign up"/> <Signup/></>
    },
    {
      path:"/profile",
      element: <><Navbar  first="Home" second="Profile" third="Log out"/> <Profile/></>
    },
  ])
  return (
    <AuthProvider>
  <>
      
      <RouterProvider router={router} />
     
      <Footer/>
    </>
    </AuthProvider>
  );
}

export default App;
