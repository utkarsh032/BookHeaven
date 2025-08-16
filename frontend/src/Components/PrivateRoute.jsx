import React from 'react'
import { Navigate } from 'react-router-dom'

const isAuthenticated = () => {
  return !!localStorage.getItem('token') || !!localStorage.getItem('user')
}

export const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to='/login' replace />
}
