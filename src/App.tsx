import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import ProductsIdPage from './pages/ProductId'
import ProductsPage from './pages/Products'
import ProfilePage from './pages/Profile'
import RegisterPage from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductsIdPage />} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App