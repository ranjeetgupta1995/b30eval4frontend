import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { Signup } from '../components/Signup'
import { Login } from '../components/Login'
import { Posts } from '../components/Posts'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    </div>
  )
}
