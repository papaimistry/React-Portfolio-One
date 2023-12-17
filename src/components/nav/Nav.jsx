import React from "react";
import "./nav.css";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineSms } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => setActiveNav("#home")}
      >
        <GoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <GiSkills />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <GoProjectSymlink />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <MdOutlineSms />
      </a>
    </nav>
  );
};

export default Nav;
