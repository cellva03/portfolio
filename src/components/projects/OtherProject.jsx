import React from 'react'
import { Fade } from 'react-reveal';
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { TiFolderOpen } from "react-icons/ti";

const OtherProject = ({item}) => {
  return (
    <Fade left cascade delay={1000}>
      <div className="other-project" key={item.id}>
        <div className="head">
          <div className="icons">
            <div className="folder-icon">
              <TiFolderOpen style={{fontSize:'1.5rem'}}/>
            </div>
            <div className="other-project-links">
              <a target={'_blank'} href={item.github}><RiGithubLine/></a>
              <a target={'_blank'} href={item.url}><FiExternalLink/></a>
            </div>
          </div>
          <div className="other-project-title">
            <h4>{item.title}</h4>
          </div>
          <div className="other-project-description">
            <p>{item.description}</p>
          </div>        
        </div>
        <div className="tail">
          <ul className='other-project-skills'>
            {
              item.skills.map((skills,i)=>{
                return(
                  <li key={i}>{skills}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </Fade>
  )
}

export default OtherProject