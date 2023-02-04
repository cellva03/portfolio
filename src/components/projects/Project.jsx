import React from 'react';
import './project.css';
import {data} from './data.js';
import { Fade } from 'react-reveal';
import OtherProject from './OtherProject';
import FeaturedProject from './FeaturedProject';
import { Link } from 'react-router-dom';



const Project = () => {
  return (
    <div className='project-content'>
        <section id="projects">
          <Fade left delay={1000}>
            <h2 className='project-heading' data-aos="fade-up" data-aos-delay="500">Some Things I've Done</h2>
          </Fade>
          <div className="worked-projects">
            <div className="featured-project">
              {
                data.map((item)=>{
                  return(item.type === "featured" &&  <FeaturedProject item={item} key={item.id}/>)
                })
              }
            </div>
          </div> 
          <Fade left cascade delay={1000}>
          <h2 style={{textAlign:'center',marginBottom:'3rem'}}>Other Projects</h2>
            <div className="other-projects">
              {
                data.map((item)=>{
                  return(item.type === "other" && <OtherProject item={item} key={item.id}/>)
                })
              }
            </div>
            <div className='see-more-btn-container'>
              <Link className='resume-btn' to="/archive"><span>View the Archive</span></Link>
            </div>
          </Fade>
        </section>
    </div>
  )
}

export default Project;