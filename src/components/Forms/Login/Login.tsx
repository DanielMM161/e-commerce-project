
import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loginUser } from '../../../services';

import { StyledLogin } from './styles';

interface ILoginProps {
  goRegister: () => void
  closeModal: () => void
}

const Login = ({ 
  goRegister,
  closeModal
} : ILoginProps) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userState = useAppSelector(store => store.user)
  const { user } = userState 
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(user != null) {
      closeModal()
    }
  }, [userState])

  function handleLoginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email.trim() != "" && password.trim() != "") {
      dispatch(loginUser({email: email, password: password}))
    } else {
      // TODO: SET SHOW ERROR MESSAGE
    }
  }

  return(
    <StyledLogin onSubmit={(e) => handleLoginUser(e)}>
        <input 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} placeholder="Email Address*"
        />      

        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} placeholder="Password*" 
        />

        <button
          className='main-button'
          type="submit" 
          onClick={() => {}}
        >
          Login
        </button>

        <span onClick={() => goRegister()}>Not Yet Account ? Register Now</span>        
    </StyledLogin>
  )
}

export default Login