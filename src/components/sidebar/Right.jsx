import React from 'react'
import './right.css'
import Fade from 'react-reveal/Fade';

const Right = () => {
  return (
      <Fade right cascade collapse>
        <div className='right'>
            <div className="right-items">
                <a href="mailto:selvavignesh432@gmail.com">selvavignesh432@gmail.com</a>
            </div>
        </div>
      </Fade>
  )
}

export default Right