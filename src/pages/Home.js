import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p className='clearfix'></p>
      <Link style={{ background:'#444', borderLeft:'4px solid #fa0',padding:'7px',textDecoration:'none' ,color:'#FFF'}} to='test'>Click To see Mr Guy</Link>
    </div>
  )
}

export default Home