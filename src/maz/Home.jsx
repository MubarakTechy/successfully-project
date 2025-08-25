import React from 'react'
import Hero from '../maz/Hero';
import About from '../maz/About';
import Service from '../maz/Service';
import Skills from '../maz/Skills';
import Contact from '../maz/Contact';
import Resume from '../maz/Resume';
import Portfolio from '../maz/Porfolio';
import Faqpage from '../maz/Faqpage';

const Home = () => {
  return (
    <>
       <Hero/>
       <About />
       <Service/> 
       <Resume/>
       <Faqpage/> 
       <Portfolio/>
        <Skills />
       <Contact/>    
    </>
  )
}

export default Home