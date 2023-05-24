import React from "react";
import './style.scss'

import { BiMenu } from 'react-icons/bi'

export default function Header(){
    return(
        <header>
            <p>Yuriferr</p>

            <div>
                <BiMenu color="white" size={25}/>
            </div>
        </header>
    )
}