import React from "react";
import './style.scss'

import Pagination from "../Pagination";

import Cards from "./Cards";

import { AiFillHtml5 } from 'react-icons/ai'

export default function Skills(){
    return(
        <div className="Skills">
            <Pagination numberPage={"04"} percentage={"100%"} />

            <div className="title">
                <h1>Sobre</h1>
                <p className="background">SOBRE</p>
            </div>

            <div className="cards">
                <Cards icon={<AiFillHtml5 size={60}/>}/>
                <Cards icon={<AiFillHtml5 size={60}/>}/>
                <Cards icon={<AiFillHtml5 size={60}/>}/>
                <Cards icon={<AiFillHtml5 size={60}/>}/>
                <Cards icon={<AiFillHtml5 size={60}/>}/>
            </div>  
        </div>
    )
}