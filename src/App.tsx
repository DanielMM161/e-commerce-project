import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components'
import { store } from './redux/store'
import GlobalStyle from './styled-component/global.styled.component'
import { AppContainer } from './styled-component/layout.styled.component'
import HomePage from './pages/Home/Home'
import LoginPage from './pages/Login/Login'
import ProductsPage from './pages/Products/Products'
import ProfilePage from './pages/Profile/Profile'
import RegisterPage from './pages/Register/Register'
import { SingleProductPage } from './pages/SingleProduct'

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
            <NavBar />
            <GlobalStyle />
            <AppContainer>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<SingleProductPage />} />
                <Route path="/Login" element={<LoginPage/>} />
                <Route path="/Register" element={<RegisterPage />} />
                <Route path="/Profile" element={<ProfilePage />} />
              </Routes>          
            </AppContainer>
          </BrowserRouter>        
      </Provider>
    </React.StrictMode>
  )
}

export default App