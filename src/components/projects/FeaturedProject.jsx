import React from 'react'
import { Fade } from 'react-reveal';
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

const FeaturedProject = ({item}) => {
  return (
    <Fade left cascade delay={1000} key={item.id}>
      <div className="sigle-project">
        <div className="single-project-image">
            <img src={item.img} alt="project image" className='project-image'/>
            <div className="overlay">
              <h1 className='project-title'>{item.title}</h1>
              <div className="project-description">
                  <p> { item.description} </p>
              </div>
              <ul className='project-skills'>
              {
                item.skills.map((skills,i)=>{
                  return(
                    <li key={i}>{skills}</li>
                  )
                })
              }
              </ul>
              <div className="project-links">
                <a target={'_blank'} href={item.github}><RiGithubLine/></a>
                <a target={'_blank'} href={item.url}><FiExternalLink/></a>
              </div>
            </div>
        </div>
        <div className="single-project-content">
          <h1 className='project-title'>{item.title}</h1>
          <div className="project-description">
              <p> { item.description} </p>
          </div>
          <ul className='project-skills'>
          {
            item.skills.map((skills,i)=>{
              return(
                <li key={i+10}>{skills}</li>
              )
            })
          }
          </ul>
          <div className="project-links">
            <a target={'_blank'} href={item.github}><RiGithubLine/></a>
            <a target={'_blank'} href={item.url}><FiExternalLink/></a>
          </div>
        </div>
      </div>
      </Fade>
  )
}

export default FeaturedProject