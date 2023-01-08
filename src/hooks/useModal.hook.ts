
import { useState } from 'react';
import { useEffect } from 'react';

export const UseModal = () => {

  const [showModal, setShowModal] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [titleModal, setTitleModal] = useState("Login")

  function toggle() {
    setShowModal(!showModal)
  }

  function toggleLogin() {
    setShowLogin(!showLogin)
    if(showLogin) {
      setTitleModal("Login")
    } else {
      setTitleModal("Register")
    }
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
    toggleLogin,
    titleModal
  }

}