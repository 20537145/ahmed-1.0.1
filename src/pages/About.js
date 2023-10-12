import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1 style={{color:'red'}}>Hello Everybody We Are Here To Represent Palestine</h1>
      <Link className='x' style={{ background:'#444', borderLeft:'4px solid #fa0',padding:'7px',textDecoration:'none' ,color:'#FFF'}} to='book'>Photoshop</Link>
      <br />
      <Outlet/>
    </div>
  )
}

export default About