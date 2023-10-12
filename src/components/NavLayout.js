import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavLayout() {
  return (
    <div><nav className='nav'>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='about'>About</Link></li>
      <li><Link to='resposive'>Responsive</Link></li>
      <li><Link to='player'>FIFA Cards</Link></li>
      <li><Link to='help'>Help</Link></li>
    </ul>
  </nav>
  <main><Outlet/></main>
  </div>
  )
}

export default NavLayout