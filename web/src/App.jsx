import { useState, useEffect } from 'react'
import './App.scss'

import Header from './components/Header'
import Presentation from './components/Presentation'
import About from './components/About'
import Projects from './components/Projects'
import Specialization from './components/Specialization'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [whiteHeader, setWhiteHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setWhiteHeader(true)
      } else{
        setWhiteHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])


  return (
    <div className="App">
      <Header white={whiteHeader}/>

      <Presentation/>

      <About/>

      <Projects/>

      <Specialization/>

      <Contact/>

      <Footer/>
    </div>
  )
}
