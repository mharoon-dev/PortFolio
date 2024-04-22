import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Projects from '../../Components/Projects/Projects'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Footer />
    </>
  )
}

export default Home