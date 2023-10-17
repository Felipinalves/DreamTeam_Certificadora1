import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

export function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary bg-nav fixed-top px-1">
      <div className="mx-auto">
        <div className="TextNav">neweinstein</div>
      </div>

      <a className="btn" style={{color:'#2185D5'}}>
        <i className="bi bi-box-arrow-right" onClick={() => signOut(auth)} style={{color:'#FFFFFF', fontSize: '20px'}}></i>
      </a>
	</nav>
  )
}

