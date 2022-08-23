import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import PropTypes from 'prop-types'

const isAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

export function IfAuthenticated({ children }) {
  IfAuthenticated.propTypes = {
    children: PropTypes.any,
  }

  return isAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated({ children }) {
  IfNotAuthenticated.propTypes = {
    children: PropTypes.any,
  }

  return !isAuthenticated() ? <>{children}</> : null
}
