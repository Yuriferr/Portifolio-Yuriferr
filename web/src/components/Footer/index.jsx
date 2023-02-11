import React from "react";
import './footer.scss';

import {BsLinkedin, BsGithub} from 'react-icons/bs'

import Logo from '../../assets/Logo.png'

export default () => {
    return(
        <footer>
            <div className="container-logo">
                <img src={Logo}/>
            </div>
            <div className="container-icons">
                <a target="_blank" href="https://www.linkedin.com/in/yuriferr/">
                    <BsLinkedin size={30} color="#321473"/>
                </a>
                <a target="_blank" href="https://github.com/Yuriferr">
                    <BsGithub size={30} color="#321473"/>
                </a>
            </div>
        </footer>
    )
}