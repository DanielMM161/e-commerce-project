
import { Navigate, Outlet } from 'react-router';
import { useAuth } from './../../hooks/useAuth';
export const UserValidation = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to={'/home'}/>
}