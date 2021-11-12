import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import ProjectList from "./ProjectList";
import About from "./About";
import Skills from "./Skills";

function Wrapper() {
  return (
    <>
      <Home />
      <Skills />
      <ProjectList />
      <Contact />
    </>
  );
}

export default Wrapper;
