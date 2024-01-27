import React from "react";

const Service = ({ icon, service }) => {
  return (
    <div className="services__content">
      {icon}
      <h3 className="services__title">{service}</h3>
    </div>
  );
};

export default Service;
