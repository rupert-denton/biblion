//external dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo-container">
          <Link to={'/'} className="biblion-logo">
            Biblion.
          </Link>
          <Link to={'/curator'} className="nav-item">
            Curator
          </Link>
        </div>
      </div>
    </div>
  )
}
