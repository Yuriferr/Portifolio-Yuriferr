import React from "react"
import './header.scss'

import Logo from '../../assets/logoBranca.png'

export default ({white}) => {
    return(
        <header className={white ? 'header' : ''}>
            <div className="container-logo">
                <img src={Logo}/>
            </div>
            <div className="container-links">
                <a href="#about">Sobre</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contatos</a>
            </div>
        </header>
    )
}