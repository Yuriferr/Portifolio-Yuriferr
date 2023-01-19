import React, { useState } from "react";
import './style.scss'

import siteDeusesGregos from '../../assets/siteDeusesGregos.png'
import landingPage from '../../assets/landingpageYuriferr.png'
import loginLeagueOfLegends from '../../assets/loginLeagueOfLegends.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function Projetos(){
    const [projetos, setProjetos] = useState([
        {
            name: 'Tela de Login - League of Legends',
            img: loginLeagueOfLegends,
            url: 'https://login-league-of-legends.vercel.app',
            linguagens: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            ]
        },
        {
            name: 'Landing Page - Yuriferr',
            img: landingPage,
            url: 'https://landingpage-yuriferr.vercel.app',
            linguagens: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
            ]
        },
        {
            name: 'Blog Compacto - Deuses Gregos',
            img: siteDeusesGregos,
            url: 'https://blogcompacto-mitologiagrega.vercel.app',
            linguagens: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
            ]
        }
    ])

    return(
        <div className="projetos">
            <h1 data-aos="fade-right">Projetos</h1>
            <div className="cards">
                {projetos.map((item, index) => {
                    return(
                        <a target="_blank" href={item.url}>
                            <div className="posts" data-aos="zoom-in" style={{backgroundImage : `url(${item.img})`}}>
                                <div className="fundo"/>
                                <p data-aos="zoom-in" className="name">{item.name}</p>
                                <div className="images">
                                    {item.linguagens.map((item, index) => {
                                        return(
                                            <div data-aos="zoom-in" key={index}>
                                                <img src={item}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>

        </div>
    )
}   