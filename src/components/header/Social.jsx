import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className="header__social">
      <a href="https://github.com/papaimistry" target="blank">
        <FaGithubSquare />
      </a>
      <a href="https://www.linkedin.com/in/papai-mistry" target="blank">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/papai_mis_try/" target="blank">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default Social;
