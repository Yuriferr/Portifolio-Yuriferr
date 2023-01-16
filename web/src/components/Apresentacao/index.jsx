import React from "react"
import './style.scss'

import Info from '../../assets/infos.png'

export default function Apresentacao(){


    return(
        <div className="apresentacao">
            <div>
                <h1>Yuri Fernandes</h1>
                <h3>Desenvolvedor Full Stack</h3>
            </div>

            <div className="img">
                <img src={Info}/>
            </div>
        </div>
    )
}