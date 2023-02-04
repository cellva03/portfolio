import React from 'react';
import './footer.css';
import { SiCodechef } from "react-icons/si";
import {FiLinkedin } from "react-icons/fi";
import { RiGithubLine, } from "react-icons/ri";
import { AiOutlineCodepen,} from "react-icons/ai";
import { MdOutlineAlternateEmail} from "react-icons/md";
import { Fade } from 'react-reveal';


const Footer = () => {
  return (
    <div className="footer-content">
        <Fade bottom delay={1000}>
        <div className="social-share">
            <a target={'_blank'} href="https://github.com/cellva03"><RiGithubLine/></a>
            <a target={'_blank'} href="https://www.linkedin.com/in/selvavignesh-s-842987216/"><FiLinkedin/></a>
            <a target={'_blank'} href="https://www.codechef.com/users/cellva"><SiCodechef/></a>
            <a target={'_blank'} href="https://codepen.io/cellva03"><AiOutlineCodepen/></a>
            <a href="mailto:selvavignesh432@gmail.com"><MdOutlineAlternateEmail/></a>
        </div>
        </Fade>
        <Fade bottom delay={1000}>
        <div className="copyright">
            Designed & Built by Selva<br/>
            copyright <span>©</span> 2023
        </div>
        </Fade>
    </div>
  )
}

export default Footer