import React from "react";
import Qualification from "./Qualification";

const Qualifications = () => {
  return (
    <section className="qualification section container">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container">
        <Qualification
          major="Life Science"
          university="Bint Jbeil Hight School"
          fromYear={2018}
          toYear={2021}
        />
        <Qualification
          major="Computer Science"
          university="Lebanese University"
          fromYear={2021}
          toYear={2024}
        />
      </div>
    </section>
  );
};

export default Qualifications;
