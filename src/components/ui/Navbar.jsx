//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
