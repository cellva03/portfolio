import React from 'react'
import './home.css'
import About from '../about/About';
import Project from '../projects/Project';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div className='main-content'>
          <div className="introduction">
              <p className='greeting' data-aos="fade-down" data-aos-delay="1000">Hello, I am</p>
              <div className='name-container'>
                <h1 className="name" data-aos="fade-down" data-aos-delay="1000">SELVAVIGNESH</h1>
              </div>
              <h1 className="profession" data-aos="fade-down"data-aos-delay="1200">I build things for the web and deploy</h1>
              <p className="details" data-aos="fade-down"data-aos-delay="1200">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</p>

              <div className='checkout-resume-btn-container' data-aos="fade-down" data-aos-delay="1300" data-aos-once="true">
                <a target={'_blank'} className='resume-btn' href='/resume.pdf'><span>Check out my resume</span></a>
              </div>
          </div>
          <About/>
          <Project/>
          <Contact/>
          <Footer/>
</div>
  )
}

export default Home