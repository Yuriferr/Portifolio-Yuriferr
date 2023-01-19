import React from "react"
import './style.scss'

import Info from '../../assets/infos.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { BsLinkedin, BsGithub,  } from 'react-icons/bs'

export default function Apresentacao(){


    return(
        <div className="apresentacao">
            <div data-aos="fade-right" className="infos">
                <h1>Yuri Fernandes</h1>
                <h3>Desenvolvedor Full Stack</h3>
                <div className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/yuriferr">
                        <BsLinkedin size={30} color="white"/>
                    </a>
                    <a target="_blank" href="https://github.com/Yuriferr">
                        <BsGithub size={30} color="white"/>
                    </a>
                </div>
            </div>

            <div data-aos="zoom-in" className="img">
                <img src={Info}/>
            </div>
        </div>
    )
}