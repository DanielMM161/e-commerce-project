import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavBar } from './components'
import { store } from './redux/store'

import {Home, Products, Profile, SingleProduct, CategoryProduct} from './pages'
import { UserValidation } from './components/UserValidation/UserValidation';
import { GlobalStyle, StyledApp } from './styled'

const App = () => {

  return (
      <Provider store={store}>
        <BrowserRouter>
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
          </BrowserRouter>        
      </Provider>
  )
}

export default App