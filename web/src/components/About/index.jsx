import React from "react";
import "./style.scss";

import Pagination from "../Pagination";

export default function About() {
  return (
    <div className="About">
      <Pagination numberPage={"03"} percentage={"75%"} />

      <div className="title">
        <h1>Sobre</h1>
        <p className="background">SOBRE</p>
      </div>

      <div className="description">
        <p>
          Olá, eu sou um desenvolvedor web com mais de 3 anos de experiência em criar sites e aplicativos dinâmicos e responsivos. Eu tenho conhecimento em diversas tecnologias e ferramentas, como HTML, CSS, JavaScript, React, Node.js, MongoDB, Firebase, Git e muito mais.
        </p>

        <p>
        Atualmente, eu estou cursando Análise e Desenvolvimento de Sistemas na FIAP, uma das melhores faculdades de tecnologia do Brasil. Eu também me formei no ensino médio técnico no Colégio Cotemig, onde aprendi os fundamentos da programação e desenvolvi vários projetos.
        </p>

        <p>
        Eu sou apaixonado por aprender coisas novas e resolver problemas com criatividade e eficiência. Eu gosto de trabalhar em equipe e compartilhar ideias e conhecimentos. O meu objetivo é me tornar um profissional cada vez melhor e contribuir para o avanço da tecnologia.
        </p>

        <p>
          Vamos juntos explorar novas possibilidades e construir um futuro
          digital inspirador!
        </p>
      </div>
    </div>
  );
}
