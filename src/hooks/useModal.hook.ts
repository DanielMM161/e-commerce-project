
import { useState } from 'react';
import { useEffect } from 'react';

export const UseModal = () => {

  const [showModal, setShowModal] = useState(false)
  const [showLogin, setShowLogin] = useState(true)

  function toggle() {
    setShowModal(!showModal)
  }

  function toggleLogin() {
    setShowLogin(!showLogin)
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [showModal])

  return {
    showModal,
    toggle,
    showLogin, 
    toggleLogin    
  }

}