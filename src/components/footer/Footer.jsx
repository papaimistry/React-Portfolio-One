import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Papai Mistry
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/partha.mistry.376">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/papai_mis_try/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/PaperBoss4">
          <RiTwitterXLine />
        </a>
      </div>
      <div className="footer__copyright">
        <small> &copy; Papai Mistry. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
