import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary bg-nav fixed-top px-1">

      <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{color:"#2185D5"}}>
        <i className="bi bi-list" style={{color: 'white', fontSize: '24px',}}></i>
      </button>

      <div className="mx-auto">
        <div className="TextNav">neweinstein</div>
      </div>

      <a className="btn" style={{color:'#2185D5'}}>
        <i className="bi bi-box-arrow-right" onClick={() => signOut(auth)} style={{color:'#FFFFFF', fontSize: '20px'}}></i>
      </a>

      <div className="offcanvas offcanvas-start" style={{backgroundColor:"white"}} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{color:'#303841'}}>Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <li className="nav-item" style={{listStyleType:"none"}}>
              <a className="nav-link active" aria-current="page" href="Home" style={{color:'#303841'}}>Questões</a>
            </li>
            <hr/>

            <li className="nav-item" style={{listStyleType:"none"}}>
              <a className="nav-link active" aria-current="page" href="Resolvidas" style={{color:'#303841'}}>Questões Resolvidas</a>
            </li>
            <hr/>

        </div>
      </div>

	</nav>
  )
}

