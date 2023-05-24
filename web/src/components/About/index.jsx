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
          Sobre mim: <br/> Olá! Sou Yuri Fernandes, um desenvolvedor Full Stack
          apaixonado por tecnologia e pela arte de criar soluções digitais.
          Atualmente, estou cursando a graduação em Análise e Desenvolvimento de
          Sistemas, aprimorando constantemente minhas habilidades e
          conhecimentos nesta área em constante evolução.
        </p>

        <p>
          Formação e experiência: <br/> Além de minha formação acadêmica, tenho uma
          sólida base técnica adquirida durante meu ensino médio no Colégio
          Cotemig, onde me especializei em programação. Essa base sólida me
          proporcionou uma compreensão profunda dos princípios fundamentais da
          lógica de programação e me permitiu iniciar minha jornada como
          desenvolvedor Full Stack há mais de 3 anos.
        </p>

        <p>
          Meu objetivo é criar soluções inovadoras e funcionais, unindo o melhor
          dos mundos front-end e back-end para entregar experiências digitais
          excepcionais aos usuários. Convido você a explorar meu portfólio, onde
          compartilho alguns dos projetos que desenvolvi, demonstrando minha
          dedicação em transformar ideias em realidade por meio do código.
        </p>

        <p>
          Vamos juntos explorar novas possibilidades e construir um futuro
          digital inspirador!
        </p>
      </div>
    </div>
  );
}
