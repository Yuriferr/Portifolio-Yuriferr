import React from "react";
import './style.scss'

import Pagination from "../Pagination";

import Cards from "./Skill";

import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiMysql, SiSqlite, SiGithub, SiGitlab, SiFigma } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export default function Skills(){
    return(
        <div className="Skills">
            <Pagination numberPage={"04"} percentage={"100%"} />

            <div className="title">
                <h1>Habilidades</h1>
                <p className="background">HABILIDADES</p>
            </div>

            <div className="cards">
                <Cards icon={<SiHtml5 size={60}/>}/>
                <Cards icon={<SiCss3 size={60}/>}/>
                <Cards icon={<SiJavascript size={60}/>}/>
                <Cards icon={<SiTypescript size={60}/>}/>

                <Cards icon={<SiNodedotjs size={60}/>}/>
                <Cards icon={<SiPython size={60}/>}/>
                <Cards icon={<FaJava size={60}/>}/>

                <Cards icon={<SiMysql size={60}/>}/>
                <Cards icon={<SiSqlite size={60}/>}/>

                <Cards icon={<SiGithub size={60}/>}/>
                <Cards icon={<SiGitlab size={60}/>}/>
                <Cards icon={<SiFigma size={60}/>}/>
            </div>  
        </div>
    )
}