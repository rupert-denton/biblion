//external dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import './Navbar.css'

export default function Navbar() {
  const { logout, loginWithRedirect } = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo-container">
          <Link to={'/'} className="biblion-logo">
            Biblion.
          </Link>
          <IfAuthenticated>
            <Link to={'/curator'} className="nav-item">
              Curator
            </Link>
            <div className="nav-item-container">
              <a className="nav-item" href="/" onClick={handleLogoff}>
                Log off
              </a>
            </div>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <div className="nav-item-container">
              <a className="nav-item" href="/" onClick={handleSignIn}>
                Admin Sign In
              </a>
            </div>
          </IfNotAuthenticated>
        </div>
      </div>
    </div>
  )
}
