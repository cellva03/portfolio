import React from 'react'
import { Link as Refer } from 'react-router-dom';
import Logo from '../../assets/vite.svg'
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

  return (
    // <Fade top>
        <div className={classnames("nav-container", {"navbar--hidden": !visible })}>
            <nav className={`nav-bar`} >
                <div className='logo'>
                  <Refer to={'/'}>
                    <img src={Logo} alt="" width={50} height={50}/>
                  </Refer>
                </div>
                <div data-visible="false" style={{marginRight:'20px'}}>
                    <div className='resume-btn-containers'>
                        <a target={'_blank'} className='resume-btns' href='/resume.pdf'><span>Resume</span></a>
                    </div>
                </div>  
            </nav>
        </div>
  )
}

export default Navbar