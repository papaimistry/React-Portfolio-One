import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_se8e1c6",
        "template_44vnywg",
        form.current,
        "2Cg_if9H6oIn6S98g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-title" />
            <h4>Email</h4>
            <h5>papaimistry01@gmail.com</h5>
            <a href="mailto:papaimistry01@gmail.com" target="blank">
              Send a massage
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger contact__option-title />
            <h4>Messenger</h4>
            <h5>Papai Mistry</h5>
            <a href="https://m.me/partha.mistry.376" target="blank">
              Send a massage
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp contact__option-title />
            <h4>Whatsapp</h4>
            <h5>+91 1234567890</h5>
            <a href="https://wa.me/911234567890" target="blank">
              Send a massage
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
