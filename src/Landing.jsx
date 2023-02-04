import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Left from './components/sidebar/Left'
import Right from './components/sidebar/Right';

const Landing = () => {
  return (
    <>
        <Navbar/>
        <div className="content">
        <Left/>
        <Home/>
        <Right/>
        </div>
    </>
  )
}

export default Landing