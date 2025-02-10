import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Project from "./components/Project";
import Footer from "./components/Footer";
import { Toaster, ToastIcon } from "react-hot-toast";

function App(){
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>  )
}

export default App