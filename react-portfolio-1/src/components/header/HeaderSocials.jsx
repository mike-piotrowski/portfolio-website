import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/micha%C5%82-piotrowski-69972b173/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mike-piotrowski" target="_blank">
        <FaGithub />
      </a>
      <a href="https://app.netlify.com/teams/mike-piotrowski/" target="_blank">
        <SiNetlify />
      </a>
    </div>
  );
};

export default HeaderSocials;
