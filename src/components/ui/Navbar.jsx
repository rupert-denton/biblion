//external dependencies
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo-container">
          <div className="biblion-logo">Biblion.</div>
        </div>
      </div>
    </div>
  )
}
