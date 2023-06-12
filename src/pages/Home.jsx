import React from "react";
import Main from "../components/Home/Main";
import CardCourses from "../components/Home/CardCourses";
import About from "../components/Home/About";
import Instagram from "../components/Home/Instagram";

function Home() {
  return (
    <>
      <Main />
      <CardCourses />
      <About />
      <Instagram/>
    </>
  );
}

export default Home;
