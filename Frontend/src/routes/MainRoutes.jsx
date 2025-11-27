import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Register from '../pages/Register'
const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={Home}></Route>
    <Route path="/products" element={Products}></Route>
    <Route path="/login" element={Login}></Route>
    <Route path="/register" element={Register}></Route>
   </Routes>
  )
}

export default MainRoutes