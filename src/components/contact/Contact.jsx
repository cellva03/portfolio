import './contact.css'
import Fade from 'react-reveal/Fade';
import React from 'react';
// import TrackVisibility from 'react-on-screen';

const Contact = () => {


  return (
    <div className="contact-content">
        <section id='contact'>
            <Fade bottom delay={1000}>
                <h2 className='contact-heading'>Get In Touch</h2>   
            </Fade>
            <Fade bottom delay={1200}>    
                <div className="contact-details">
                    <p>I’m  currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you as soon as possible!</p>
                    <div className='see-more-btn-container'>
                        <a className='resume-btn' href="mailto:selvavignesh432@gmail.com"><span>Say Hi!</span></a>
                    </div>
                </div>
            </Fade>
        </section>
    </div>
  )
}

export default Contact