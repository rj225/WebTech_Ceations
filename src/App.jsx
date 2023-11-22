import { useEffect } from 'react'
import React from 'react'
import Hero from './components/Hero'
import Aos from "aos";
import "aos/dist/aos.css";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <Navbar/>
     <Hero/>
     <Skills/>
     <Projects/>
     <Contact/>

     <footer className="p-3 text-center">
        <h6 className="mb-3">WebTech Creations</h6>
        <p>WebTech Creations © All CopyRights Reserved 2023</p>
      </footer>

   </div>
  )
}

export default App