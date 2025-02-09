import React from 'react'
import { useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import Project from './Project'

const Layout = () => {
  const experienceRef = useRef(null)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const projectRef = useRef(null)
  function scrollToRef(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavClick = (section) => {
    switch (section) {
      case 'home':
        scrollToRef(homeRef);
        break;
      case 'about':
        scrollToRef(aboutRef);
        break;
      case 'experience':
        scrollToRef(experienceRef);
        break;
      case 'contact':
        scrollToRef(contactRef);
        break;
      case 'project':
        scrollToRef(projectRef);
        break;
      default:
        break;
    }
  };
  return (
    <>
    <Navbar handleNavClick={handleNavClick}/>
    <div ref={homeRef}>
        <Home />
    </div>
    <div ref={aboutRef}>
        <About/>
    </div>
    <div ref={projectRef}>
        <Project/>
    </div>
    <div ref={experienceRef}>
        <Experience />
    </div>
    <div ref={contactRef}>
        <Contact />
    </div>
    <Footer/>
    </>
  )
}

export default Layout