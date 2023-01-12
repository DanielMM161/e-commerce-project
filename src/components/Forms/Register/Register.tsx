import { StyledRegister } from "./styled-component/register.styled.component"
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './../../../hooks/redux.hook';
import { createUser } from "../../../services";
import { IUserRegister } from "../../../models";
import { useEffect } from 'react';

interface IRegisterProps {
  goLogin: () => void
  closeModal: () => void
}

const Register = ({
  goLogin,
  closeModal
} : IRegisterProps) => {

  const dispatch = useAppDispatch()
  const userState = useAppSelector(state => state.user)
  const { user } = userState

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPass, setRepeatPass] = useState("")

  useEffect(() => {
    if(user != null) {        
      closeModal()   
    }
  }, [user])
  
  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const userRegistration: IUserRegister = {
      name: `${firstName} ${secondName}`,
      email: email,
      password: password
    }

    dispatch(createUser(userRegistration))    
  }

  function checkUserInputs(): boolean {
    if(email.trim() != "" && firstName.trim() != "" && secondName.trim() != "" && password.trim() != "" && repeatPass.trim() != "") {
      return false
    }
    return true
  }

  return(
    <>
      <StyledRegister onSubmit={(e) => handleRegister(e)}>
        <input
          className="input-email"
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email Address"
        />

        <div className="input-container">
          <input
              className="input"
              type="text" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            
            <input
              className="input"
              type="text" 
              value={secondName} 
              onChange={(e) => setSecondName(e.target.value)}
              placeholder="Second Name"
            />
        </div>

        <div className="input-container">
          <input
            className="input"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <input
            className="input"
            type="password" 
            value={repeatPass} 
            onChange={(e) => setRepeatPass(e.target.value)}
            placeholder="Repeat Password"
          />
        </div>

        <button className='main-button' type="submit" disabled={checkUserInputs()}>Register</button>

        <span onClick={() => goLogin()}>Already have an account? -- Login to your account</span>
      </StyledRegister>
    </>
  )
}

export default Register