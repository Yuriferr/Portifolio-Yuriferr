import React from "react";
import "./style.scss";

import Pagination from "../Pagination";

import Cards from "./Cards";

import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="Projects">
      <Pagination numberPage={"02"} percentage={"50%"} />

      <div className="title">
        <h1>Projetos</h1>
        <p className="background">PROJETOS</p>
      </div>

      <p>
        Meus Projetos Recentes
      </p>

      <div className="Cards">
        <Cards
          number="01"
          name="Login Inverno"
          description="Tela de login tematica de inverno"
          image="https://media.licdn.com/dms/image/D4D22AQHGDf2XEKmvQA/feedshare-shrink_800/0/1683557327291?e=1687996800&v=beta&t=BRwND_hGClZY34D2ffPAe-seqPI9SEB6OWe6-9AW2wM"
          link="https://login-animado-inverno-yuriferr.netlify.app"
        />

        <Cards
          number="02"
          name="Portfólio Arte"
          description="Desenvolvimento de um portfólio completo para um artista"
          image="https://cdn.discordapp.com/attachments/1096821782591311992/1110985877552894074/Captura_de_tela_2023-05-24_143750.png"
          link="https://artglow-yuriferr.netlify.app"
        />

        <Cards
          number="03"
          name="Pokedex"
          description="Utilizando o estilo neumorfismo e uma api poderosa"
          image="https://media.licdn.com/dms/image/D4D22AQEZJ6EX0-Mjbw/feedshare-shrink_800/0/1683557032633?e=1687996800&v=beta&t=6WHd2UKEW-QNbkX388c5HoD8U7LvANcea0JPFVcOnR8"
          link="https://pokedex-yuriferr.netlify.app"
        />
      </div>
    </div>
  );
}
