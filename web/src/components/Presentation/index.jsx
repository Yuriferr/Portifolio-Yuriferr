import React, { useState } from "react";
import "./presentation.scss";

import Wave from "react-wavify";

import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="presentation">
      <Wave
        className="wave"
        fill="white"
        paused={false}
        options={{ height: 480, amplitude: 30, speed: 0.15, points: 3 }}
      ></Wave>
      <div className="container-presentation">
        <section className="section-name">
          <h1>Yuri Fernandes</h1>
          <h3>Desenvolvedor Full Stack</h3>
          <div className="container-icons">
            <a target="_blank" href="https://www.linkedin.com/in/yuriferr"><BsLinkedin size={25} color="white"/></a>
            <a target="_blank" href="https://github.com/Yuriferr"><BsGithub size={25} color="white"/></a>
          </div>
        </section>

        <section className="section-info">
          <div className="container-mac">
            <div className="container-balls">
              <div className="ball red" />
              <div className="ball yellow" />
              <div className="ball green" />
            </div>
            <div className="border"/>
            <div className="division">
              <div className="container-infos">
                {numbers.map((item, index) => {
                  return (
                    <div className="container-numbers" key={index}>
                      {item}
                    </div>
                  );
                })}
              </div>
              <div className="container-data">
                <p className="key">{"{"}</p>

                <p>
                  <span className="title">name: </span>
                  <span className="string">"Yuri Fernandes"</span>
                  <span className="comma">,</span>
                </p>

                <p>
                  <span className="title">office: </span>
                  <span className="string">"Desenvolvedor Full Stack"</span>
                  <span className="comma">,</span>
                </p>

                <p>
                  <span className="title">age: </span>
                  <span className="int">17</span>
                  <span className="comma">,</span>
                </p>

                <p>
                  <span className="title">training: </span>
                  <span className="key">{"{"}</span>
                </p>

                <p className="object">
                  institute: <span className="string">"Cotemig"</span>
                  <span className="comma">,</span>
                </p>

                <p className="object">
                  concluded: <span className="true">True</span>
                  <span className="comma">,</span>
                </p>

                <p className="key">
                  <span className="title">{"}"}</span>
                  <span className="comma">,</span>
                </p>

                <p>
                  <span className="title">location: </span>
                  <span className="key">{"{"}</span>
                </p>

                <p className="object">
                  city: <span className="string">"Belo Horizonte"</span>
                  <span className="comma">,</span>
                </p>

                <p className="object">
                  state: <span className="string">"Minas Gerais"</span>
                  <span className="comma">,</span>
                </p>

                <p className="object">
                  country: <span className="string">"Brasil"</span>
                  <span className="comma">,</span>
                </p>

                <p className="key">
                  <span className="title">{"}"}</span>
                  <span className="comma">,</span>
                </p>

                <p className="key">
                  {"}"}
                  <span className="comma">;</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
