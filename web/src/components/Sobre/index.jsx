import React from "react";
import './style.scss'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Sobre(){
    return(
        <div className="sobre" data-aos="fade-in">
            <h1 data-aos="fade-up">Sobre</h1>
            <div data-aos="fade-down" className="texto">
            <p>Meu amor pela tecnologia foi a razão para fazer da programação o meu negócio. Hoje, tenho como objetivo principal desenvolver minhas capacidades como desenvolvedor.</p>
            <p>O primeiro contato com essa área surgiu quando ganhei meu primeiro videogame, jogos que me fizeram me conectar com o mundo virtual e que me motivaram a buscar o conhecimento de como fazê-los. Com o passar dos anos me distanciei do mundo dos games e me aproximei ao mundo web e mobile que me permitiram chegar onde estou.</p>
            <p>Sou desenvolvedor há 3 anos, sei que estou no começo mas já percebi minha evolução. Nesses anos me desafiei ao máximo no mundo dos códigos e sempre busquei fazer o mais perfeito, e posso dizer que errei com orgulho, pois é nos mais simples erros que evoluímos nossos conhecimentos.</p>
            <p>Busco sempre estar o mais atualizado possível sobre novas linguagens e sempre busco deixar meus códigos mais otimizados.</p>
            </div>
        </div>  
    )
}