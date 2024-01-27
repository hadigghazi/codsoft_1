import React, { useState } from "react";

const ContactPage = () => {
  const recipientEmail = "hadigghazi@gmail.com";

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    setTimeout(() => {}, 3000);
    const subject = "Regarding your portfolio";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  const handleMessageChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+961 76639613</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">hadigghazi@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Lebanon - Nabatiyeh</span>
            </div>
          </div>
        </div>
        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Name
              </label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <input type="email" className="contact__input" />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="r" className="contact__label">
              Message
            </label>
            <textarea
              name=""
              id="r"
              cols="0"
              rows="7"
              className="contact__input"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={handleSendMessage} className="button button__flex">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
