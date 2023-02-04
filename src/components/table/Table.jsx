import React from 'react';
import Navbar from './Navbar'
import Left from '../sidebar/Left'
import Right from '../sidebar/Right';
import TableData from './TableData';
import Footer from '../footer/Footer.jsx'

const Table = () => {
  return (
    <>
        <Navbar/>
        <div className='content'>
        <Left/>
        <TableData/>
        <Right/>
        </div>
        <Footer/>
    </>
  )
}

export default Table