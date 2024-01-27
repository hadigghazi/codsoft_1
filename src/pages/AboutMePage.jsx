import React from "react";

const AboutMePage = () => {
  return (
    <section
      className="about section"
      id="about"
      style={{ marginBottom: "4rem" }}
    >
      <h2 className="section__title" style={{ marginTop: "4rem" }}>
        About Me
      </h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img
          src="../../WhatsApp Image 2024-01-01 at 19.37.40_e566adb2.jpg"
          className="about__img"
          alt="personal"
        />
        <div className="about__data">
          <p className="about__description">
            Senior computer science student at the Lebanese University, and a
            junior web developer, delivering a quality work.{" "}
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
                Year <br /> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> projects
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Technologies <br /> Learned
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              download=""
              href="../../HadiGhaziCv.docx"
              className="button button__flex"
            >
              Download CV<i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
