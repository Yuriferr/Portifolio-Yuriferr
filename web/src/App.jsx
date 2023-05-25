import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./App.scss";
import Background from './assets/background.jpg'

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from './components/Skills'

import { Mousewheel, Pagination } from "swiper";

export default function App() {
  return (
    <div className="App">
      <Header/>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Main/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><About/></SwiperSlide>
        <SwiperSlide><Skills/></SwiperSlide>
      </Swiper>

      <Footer/>

      <img src={Background} className="background-web"/>
    </div>
  );
}
