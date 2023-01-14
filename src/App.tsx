import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer, NavBar } from './components'
import { store } from './redux/store'
import GlobalStyle from './styled/global.styled.component'
import {Home, Products, Profile, SingleProduct, CategoryProduct} from './pages'
import { UserValidation } from './components/UserValidation/UserValidation';
import { StyledApp } from './styled/app';
import { ThemeProvider } from 'styled-components'
import { useState } from 'react';
import { darkTheme, lightTheme } from './styled/vars'

const App = () => {

  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark'

  return (
      <Provider store={store}>
        <BrowserRouter>

            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
              <NavBar />          
              <GlobalStyle />
              <StyledApp>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<SingleProduct />} />
                  <Route path="/category/:categoryId" element={<CategoryProduct />} />
                  <Route element={<UserValidation />}>
                    <Route path="/profile" element={<Profile />} /> 
                  </Route>             
                </Routes>          
              </StyledApp>
            </ThemeProvider>
            
            <Footer />
          </BrowserRouter>        
      </Provider>
  )
}

export default App