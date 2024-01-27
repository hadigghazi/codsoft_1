import React from "react";
import Skill from "./Skill";
import {
  Html5OriginalWordmark,
  Css3OriginalWordmark,
  JavascriptOriginal,
  TailwindcssOriginalWordmark,
  ReactOriginalWordmark,
  NodejsOriginal,
  ExpressOriginalWordmark,
  MongodbOriginalWordmark,
  MysqlOriginalWordmark,
  JavaOriginalWordmark,
  PhpOriginal,
  COriginal,
} from "devicons-react";

const Skills = () => {
  const skills = [
    "html",
    "css",
    "JavaScript",
    "Tailwind",
    "ReactJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "MySQL",
    "Java",
    "PHP",
    "C",
  ];

  const icons = {
    html: <Html5OriginalWordmark size="90" />,
    css: <Css3OriginalWordmark size="90" />,
    JavaScript: <JavascriptOriginal size="90" />,
    Tailwind: <TailwindcssOriginalWordmark size="90" />,
    ReactJs: <ReactOriginalWordmark size="90" />,
    NodeJs: <NodejsOriginal size="90" />,
    ExpressJs: <ExpressOriginalWordmark size="90" />,
    MongoDB: <MongodbOriginalWordmark size="90" />,
    MySQL: <MysqlOriginalWordmark size="90" />,
    Java: <JavaOriginalWordmark size="90" />,
    PHP: <PhpOriginal size="90" />,
    C: <COriginal size="90" />,
  };

  return (
    <section className="skills section container" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <ul className="skills__container">
        {skills.map((skill, i) => (
          <Skill key={i} skill={skill} icon={icons[skill]} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
