import React from 'react'
import { SiCodechef } from "react-icons/si";
import {FiLinkedin } from "react-icons/fi";
import { RiGithubLine, } from "react-icons/ri";
import { AiOutlineCodepen} from "react-icons/ai";

import './left.css'
import Fade from 'react-reveal/Fade';


const Left = () => {
  return (
    <Fade left cascade collapse>
      <div className='left'>
        <div className="left-items">
            <a target={'_blank'} href="https://github.com/cellva03"><RiGithubLine/></a>
            <a target={'_blank'} href="https://www.linkedin.com/in/selvavignesh-s-842987216/"><FiLinkedin/></a>
            <a target={'_blank'} href="https://www.codechef.com/users/cellva"><SiCodechef/></a>
            <a target={'_blank'} href="https://codepen.io/cellva03"><AiOutlineCodepen/></a>
        </div>
      </div>
  </Fade>
  )
}

export default Left