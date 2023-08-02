import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Diagrams from '../components/Diagrams'
import Info from '../components/Info'
import Carousel from '../components/Carousel'
import SleekCarousel from '../components/SleekCarousel'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      
      <Navbar/>
      <HeroSection/>
      <Diagrams/>
      <Info/>
      <SleekCarousel  />
      <Footer/>


    </div>
  )
}

export default Home