import React from "react";
import './style.scss'
import Pagination from "../Pagination";

export default function Main(){
    return(
        <div className="Main">
            <Pagination numberPage={"01"} percentage={"25%"}/>

            <div className="info">
                <h1>Yuri Fernandes</h1>
                <h3>Desenvolvedor</h3>
                <p>Minha missão é criar soluções inovadoras e funcionais, combinando habilidades front-end e back-end para entregar experiências digitais excepcionais.</p>
            </div>
        </div>
    )
}