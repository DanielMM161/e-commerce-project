
import { useEffect } from 'react';
import { fetchUserSession } from '../services';
import { useAppDispatch } from './redux.hook';

export const UseUserSession = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    // const token = localStorage.getItem('token')
    // if(token != null) {
    //   dispatch(fetchUserSession(token))
    // }
  }, [])

}