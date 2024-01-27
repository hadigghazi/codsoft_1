import React from "react";
import { FigmaOriginal } from "devicons-react";
import Service from "./Service";
import { FaCode, FaDatabase } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <Service service="UI/UX Design" icon={<FigmaOriginal size={30} />} />
        <Service service="Frontend Development" icon={<FaCode size={30} />} />
        <Service
          service="Backend Development"
          icon={<FaDatabase size={30} />}
        />
      </div>
    </section>
  );
};

export default Services;
