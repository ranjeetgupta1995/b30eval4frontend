import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"15px"}}>
        <Link to="/">Home</Link>
        <Link to="/register">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/posts">Posts</Link>
        <button>Logout</button>
    </div>
  )
}
