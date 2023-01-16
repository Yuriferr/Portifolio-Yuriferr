import React, { useState, useEffect } from 'react'
import './App.scss'

import Logo from './assets/logoBranca.png'
import Apresentacao from './components/Apresentacao'

import Header from './components/Header'

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
      <section className='containerProjetos'>

      </section>
    </div>
  )
}
