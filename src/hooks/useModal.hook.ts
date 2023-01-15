
import { useState } from 'react';

export const UseModal = () => {

  const [showModal, setShowModal] = useState(false)
  const [showLogin, setShowLogin] = useState(true)

  function toggle() {
    setShowModal(!showModal)
  }

  function toggleLogin() {
    setShowLogin(!showLogin)
  }

  return {
    showModal,
    toggle,
    showLogin, 
    toggleLogin    
  }

}