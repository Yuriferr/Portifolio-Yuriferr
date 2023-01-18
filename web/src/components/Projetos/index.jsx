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
        },
        {
            name: 'Landing Page - Yuriferr',
            img: landingPage,
            url: 'https://landingpage-yuriferr.vercel.app',
        },
        {
            name: 'Blog Compacto - Deuses Gregos',
            img: siteDeusesGregos,
            url: 'https://blogcompacto-mitologiagrega.vercel.app',
        }
    ])

    return(
        <div className="projetos">
            <h1 data-aos="fade-right">Projetos</h1>
            <div className="cards">
                {projetos.map((item, index) => {
                    return(
                        <div data-aos="fade-in">
                            <img data-aos="zoom-in" src={item.img}/>
                            <p data-aos="zoom-in" className="name">{item.name}</p>
                            <a data-aos="zoom-in" target='_blank' href={item.url}><p className="link">{item.url}</p></a>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}   