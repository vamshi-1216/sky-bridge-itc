import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <div className='bg-gray-100'>
        <Navbar/>
        <Hero/>
        <Services/>
        <Features/>
        <CTA/>
        <Footer/>
    
        </div>
        
        </>
  )
}

export default Home
