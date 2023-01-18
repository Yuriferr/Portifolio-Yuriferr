import React from "react"
import './style.scss'

import Info from '../../assets/infos.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Apresentacao(){


    return(
        <div className="apresentacao">
            <div className="infos">
                <h1>Yuri Fernandes</h1>
                <h3>Desenvolvedor Full Stack</h3>
            </div>

            <div data-aos="zoom-in" className="img">
                <img src={Info}/>
            </div>
        </div>
    )
}