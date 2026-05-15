import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Skills = lazy(() => import("./components/Skills"));
const Project = lazy(() => import("./components/Project"));
const Certificates = lazy(() => import("./components/Certificates"));
import Footer from "./components/Footer";
import SectionNavigator from "./components/SectionNavigator";
import SchemaInjector from "./components/SchemaInjector";
import { Toaster } from "react-hot-toast";

function App(){
  return (
    <>
    <SchemaInjector />
    <Navbar/>
    <Home/>
    <Suspense fallback={null}>
      <About/>
      <Skills/>
      <Project/>
      <Certificates/>
      <Contact/>
    </Suspense>
    <Footer/>
    <SectionNavigator />
    <Toaster/>
    </>  )
}

export default App