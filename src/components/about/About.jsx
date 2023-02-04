import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="about-content">
        <section id='about_me'>
            <h2 className='about-heading' data-aos="fade-up" data-aos-delay="500" data-aos-once="true">About Me</h2>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-once="true" >Hello! My name is Selva and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom websites themes in wordpress and I’ve always loved coding — turns out creating a custom website taught me a lot about HTML & CSS! And that’s where my journey begins as a web application developer.</p><br/>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-once="true">Since 2020 I’ve started learning and creating web related things using a prominent technology called <span>MERN</span> (Mongodb, Express, Reactjs, Nodejs) stack.</p><br/>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-once="true">Fast-forward to today, I’ve recently graduated in July 2022 and challenged myself to create a fully functional <span>E-commerce application</span> and a  Dashboard to manage the E-commerce application within 20 - 25 days Which I’ve done.</p><br/>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-once="true">Here are a few technologies I’ve been working with recently:</p>
            <div className="skills">
                <ul data-aos="fade-up" data-aos-delay="1200" data-aos-once="true">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
                <ul data-aos="fade-up" data-aos-delay="1300" data-aos-once="true">
                    <li>Material UI</li>
                    <li>Mongodb</li>
                    <li>Nodejs</li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default About