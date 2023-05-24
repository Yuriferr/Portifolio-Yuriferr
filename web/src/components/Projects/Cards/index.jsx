import React from "react";
import './style.scss'



export default function Cards({name, description, image, link, number}){
    return(
        <a target="_blank" href={link} className="Card">
                <section>

                    <div className="number">
                        <div className="border"/>
                        <p>{number}</p>
                    </div>

                    <div className="description">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </section>
                
                <img src={image}/>

                <div className="background"/>
        </a>
    )
}