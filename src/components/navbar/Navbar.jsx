import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll';
import { Link as Refer } from 'react-router-dom';
import Logo from '../../assets/vite.svg'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import classnames from "classnames";
import { useState, useEffect } from 'react';

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    window.document.querySelector(".nav-bar").classList.remove("hidden");
  } else {
    window.document.querySelector(".nav-bar").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}

const Navbar = () => {
  const[showXToggle,setShowXToggle] = useState(false)
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });


  const handleToggle = ()=>{

    const nav = document.querySelector('.nav-items');
    const visiblity = nav.getAttribute("data-visible")
    if (visiblity === "false") {
        nav.setAttribute("data-visible",true)
        setShowXToggle(true)
    }
    else{
        nav.setAttribute("data-visible",false)
        setShowXToggle(false)
    }
  }  

  return (
    // <Fade top>
        <div className={classnames("nav-container", {"navbar--hidden": !visible })}>
            <nav className={`nav-bar`} >
                <div className='logo'>
                  <Refer to={'/'}>
                    <img src={Logo} alt="" width={50} height={50}/>
                  </Refer>
                </div>
                {
                    !showXToggle ?
                    <HiOutlineBars3CenterLeft className='nav-toggle' onClick={handleToggle}/>
                    :
                    <RxCross2 className='nav-toggle' onClick={handleToggle}/>
                }
                <div className={`nav-items`} data-visible="false" >
                    <li className='list-item'>
                      <Link activeClass="active"
                        to="about_me"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={2000}>
                        About
                      </Link>
                    </li>
                    <li className='list-item'>
                      <Link activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={2000}>Works</Link>
                        </li>
                    <li className='list-item'>
                      <Link activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={2000}>Contact</Link>
                    </li>
                    <div className='resume-btn-container'>
                      <a target={'_blank'} className='resume-btns' href='/resume.pdf'><span>Resume</span></a>
                    </div>
                </div>  
            </nav>
        </div>
    // </Fade>
  )
}

export default Navbar