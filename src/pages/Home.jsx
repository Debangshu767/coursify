import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Diagrams from '../components/Diagrams'
import Info from '../components/Info'
import Carousel from '../components/Carousel'
import SleekCarousel from '../components/SleekCarousel'

function Home() {
  return (
    <div>
      
      <Navbar/>
      <HeroSection/>
      <Diagrams/>
      <Info/>
      <SleekCarousel  />


    </div>
  )
}

export default Home