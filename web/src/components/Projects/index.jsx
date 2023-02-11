import React from "react";
import './projects.scss'

import Netflix from '../../assets/netflix.png'
import Card from '../../assets/card.png'
import Lol from '../../assets/lol.png'

import {DiHtml5, DiCss3, DiJavascript1, DiReact, DiSass, DiJavascript} from 'react-icons/di'

export default () => {
    return(
        <div id="projects" className="projects">
            <h1>Projetos</h1>
            <div className="container-cards">
                <a target="_blank" href="https://login-league-of-legends-dtdl36gy0-yuriferr.vercel.app" className="cards" style={{backgroundImage: `url(${Lol})`}}>
                        <p className="title">Login League of Legends</p>
                        <div className="icons">
                            <DiReact size={35} color="white"/>
                            <DiSass size={35} color="white"/>
                        </div>
                        <div className="background-black"/>
                    </a>

                    <a target="_blank" href="https://netflix-yuriferr.netlify.app" className="cards" style={{backgroundImage: `url(${Netflix})`}}>
                        <p className="title">Netflix Página Inicial</p>
                        <div className="icons">
                            <DiReact size={35} color="white"/>
                            <DiSass size={35} color="white"/>
                        </div>
                        <div className="background-black"/>
                    </a>

                    <a target="_blank" href="https://interactive-card-yuriferr.netlify.app" className="cards" style={{backgroundImage: `url(${Card})`}}>
                        <p className="title">Cadastro de Cartão de Credito</p>
                        <div className="icons">
                            <DiHtml5 size={35} color="white"/>
                            <DiCss3 size={35} color="white"/>
                            <DiJavascript size={35} color="white"/>
                        </div>
                        <div className="background-black"/>
                    </a>
            </div>
        </div>
    )
}