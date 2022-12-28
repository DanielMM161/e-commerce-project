import { lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './redux/store'

// Routes
const HomePage = lazy(() => import('./pages/Home/Home'))
const ProductsPage = lazy(() => import('./pages/Products/Products'))
const ProductsIdPage = lazy(() => import('./pages/ProductId/ProductId'))
const LoginPage = lazy(() => import('./pages/Login/Login'))
const RegisterPage = lazy(() => import('./pages/Register/Register'))
const ProfilePage = lazy(() => import('./pages/Profile/Profile'))

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductsIdPage />} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App