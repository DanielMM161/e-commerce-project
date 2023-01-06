import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components'
import { store } from './redux/store'
import GlobalStyle from './styled-component/global.styled.component'
import { AppContainer } from './styled-component/layout.styled.component'
import {Home, Products, Profile, SingleProduct} from './pages'

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
            <NavBar />
            <GlobalStyle />
            <AppContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<SingleProduct />} />                
                <Route path="/profile" element={<Profile />} />
              </Routes>          
            </AppContainer>
          </BrowserRouter>        
      </Provider>
    </React.StrictMode>
  )
}

export default App