import { ThemeProvider } from '@mui/material'
import React, { lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components'
import { store } from './redux/store'
import GlobalStyle from './styled-component/global.styled.component'
import { AppContainer } from './styled-component/layout.styled.component'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Routes
const HomePage = lazy(() => import('./pages/Home/Home'))
const ProductsPage = lazy(() => import('./pages/Products/Products'))
const ProductsIdPage = lazy(() => import('./pages/ProductId/ProductId'))
const LoginPage = lazy(() => import('./pages/Login/Login'))
const RegisterPage = lazy(() => import('./pages/Register/Register'))
const ProfilePage = lazy(() => import('./pages/Profile/Profile'))

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
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductsIdPage />} />
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