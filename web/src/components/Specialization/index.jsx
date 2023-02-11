import React from "react";
import "./specialization.scss";

import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiPhp,
  DiSqllite,
  DiMysql,
  DiSass,
  DiGithubBadge,
} from "react-icons/di";

import { SiTypescript, SiGitlab } from "react-icons/si";

export default () => {
  return (
    <div className="specialization">
      <div className="container-specialization">
        <h1>Especializações</h1>
        <div data-aos="fade-up" className="container-icons">
          <a>
            <DiHtml5 color="#7569BF" size={50} />
          </a>
          <a>
            <DiCss3 color="#7569BF" size={50} />
          </a>
          <a>
            <DiJavascript color="#7569BF" size={50} />
          </a>
          <a target="_blank" href="https://pt-br.reactjs.org">
            <DiReact color="#7569BF" size={50} />
          </a>
          <a target="_blank" href="https://nodejs.org/en/">
            <DiNodejsSmall color="#7569BF" size={50} />
          </a>
          <a target="_blank" href="https://www.php.net">
            <DiPhp color="#7569BF" size={50} />
          </a>
          <a target="_blank" href="https://www.sqlite.org/index.html">
            <DiSqllite color="#7569BF" size={50} />
          </a>
          <a target="_blank" href="https://www.mysql.com">
            <DiMysql color="#7569BF" size={50} />
          </a>
          <a
            target="_blank"
            href="https://webcache.googleusercontent.com/search?q=cache:ER9dZY0-X_0J:https://sass-lang.com/&cd=1&hl=pt-BR&ct=clnk&gl=br&client=opera-gx"
          >
            <DiSass color="#7569BF" size={50} />
          </a>
          <a target="_blank" href="https://github.com/Yuriferr">
            <DiGithubBadge color="#7569BF" size={50} />
          </a>
          <a target="_blank" href="https://about.gitlab.com">
            <SiGitlab color="#7569BF" size={40} />
          </a>
          <a target="_blank" href="https://www.typescriptlang.org">
            <SiTypescript color="#7569BF" size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};
