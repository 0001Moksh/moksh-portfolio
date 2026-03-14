import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Project from "./components/Project";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import SchemaInjector from "./components/SchemaInjector";
import { Toaster, ToastIcon } from "react-hot-toast";

function App(){
  return (
    <>
    <SchemaInjector />
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Project/>
    <Blog/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>  )
}

export default App