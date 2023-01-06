
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchUserSession, serviceLoginUser } from '../../../services';
import { StyledLogin } from './styled-component/login.styled.component';

interface ILoginProps {
  register: () => void
  closeModal: () => void
}

const Login = ({ 
  register,
  closeModal
} : ILoginProps) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userState = useAppSelector(store => store.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(userState != null) {
      closeModal()
    }
  }, [userState])

  function loginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(email.trim() != "" && password.trim() != "") {
      serviceLoginUser(email, password)
        .then((value) => {                 
            localStorage.setItem('token', value as string)
            dispatch(fetchUserSession(value))
        })
        .catch((value) => {
           // TODO: SET SHOW ERROR MESSAGE
        })
    } else {
      // TODO: SET SHOW ERROR MESSAGE
    }
  }

  return(
    <StyledLogin onSubmit={(e) => loginUser(e)}>
        <input 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"
        />      

        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} placeholder="Password" 
        />

        <button
          className='main-button'
          type="submit" 
          onClick={() => {}}
        >
          Login
        </button>

        <span onClick={() => register()}>Not Yet Account ? Register Now</span>        
    </StyledLogin>
  )
}

export default Login