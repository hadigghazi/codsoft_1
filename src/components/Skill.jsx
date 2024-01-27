import React from "react";

const Skill = ({ skill, icon }) => {
  return (
    <div className="skill">
      <div className="image">{icon}</div>
      <h3 className="skill_name">{skill}</h3>
    </div>
  );
};

export default Skill;
