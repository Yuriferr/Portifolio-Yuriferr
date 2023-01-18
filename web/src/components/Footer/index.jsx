import React from "react"
import './style.scss'

import logo from '../../assets/LogoSemFundo.png'

import { BsLinkedin, BsGithub,  } from 'react-icons/bs'

import { MdEmail } from 'react-icons/md'

export default function Footer(){
    return(
        <footer>
            <div className="logo">
                <a href=""> 
                    <img src={logo}/>
                </a>
            </div>
            <a target="_blank" href="https://www.linkedin.com/in/yuriferr">
                <BsLinkedin color="#BD00FF" size={20}/>
                <p></p>
            </a>
            <a target="_blank" href="https://github.com/Yuriferr">
                <BsGithub color="#BD00FF" size={25}/>
                <p></p>
            </a>
            <a href="mailto:yurifernandespreto@gmail.com">
                <MdEmail color="#BD00FF" size={30}/>
            </a>
        </footer>
    )
}