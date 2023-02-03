import React from "react"
import './style.scss'

import logo from '../../assets/logoBranca.png'

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
                <BsLinkedin color="white" size={25}/>
                <p></p>
            </a>
            <a target="_blank" href="https://github.com/Yuriferr">
                <BsGithub color="white" size={25}/>
                <p></p>
            </a>
            <a href="mailto:yurifernandespreto@gmail.com">
                <MdEmail color="white" size={30}/>
            </a>
        </footer>
    )
}