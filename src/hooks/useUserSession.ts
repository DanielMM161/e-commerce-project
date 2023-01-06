
import { useEffect } from 'react';
import { fetchUserSession } from './../services/User/user.service';
import { useAppDispatch } from './redux.hook';

const UseUserSession = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token != null) {
      dispatch(fetchUserSession(token))
    }
  }, [])

}

export default UseUserSession