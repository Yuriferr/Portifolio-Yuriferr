import React, { useState, useEffect } from 'react'
import './App.scss'

import Logo from './assets/logoBranca.png'
import Apresentacao from './components/Apresentacao'
import Conhecimentos from './components/Conhecimentos'
import Footer from './components/Footer'

import Header from './components/Header'
import Projetos from './components/Projetos'
import Sobre from './components/Sobre'

export default function App() {
  const [iconMenu, setIconMenu] = useState(false)

  useEffect(() => {
    ActiveMenu();
  }, [])
   
  function ActiveMenu(){
    if(window.screen.width <= '500px'){
      setIconMenu(true)
    }
  }

  return (
    <div className="App">
      <Header/>

      <section className='containerApresentacao'>
        <Apresentacao/>
      </section>

      <div className='containerBorda'> 
        <div className='borda'/>
      </div>


      <section id='sobre' className='containerSobre'>
        <Sobre/>
      </section>

      <div className='containerBorda'> 
        <div className='borda'/>
      </div>

      <section id='projetos' className='containerProjetos'>
        <Projetos/>
      </section>

      <div className='containerBorda'> 
        <div className='borda'/>
      </div>

      <section id='conhecimentos' className='containerConhecimentos'>
        <Conhecimentos/>
      </section>

      <section id='contatos'>
        <Footer/>
      </section>

    </div>
  )
}
