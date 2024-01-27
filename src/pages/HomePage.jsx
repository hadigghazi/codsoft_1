import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Qualifications from "../components/Qualifications";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Qualifications />
      <Services />
    </div>
  );
};

export default HomePage;
