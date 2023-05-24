import React from "react";
import "./style.scss";

import { BsLinkedin, BsGithub, BsArrowDown } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="links">
        <a target="_blank" href="https://www.linkedin.com/in/yuriferr/">
          <BsLinkedin size={25}/>
        </a>
        <a target="_blank" href="https://github.com/Yuriferr">
          <BsGithub size={25}/>
        </a>
        <a target="_blank" href="mailto:yurifernandespreto@gmail.com">
          <MdEmail size={30}/>
        </a>
      </div>

      <div className="arrow">
        <BsArrowDown color="white" size={25} />
      </div>
    </footer>
  );
}
