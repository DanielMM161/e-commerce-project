import { useEffect, useState } from "react"

export const UseSideBar = () => {

  const [showSideBar, setShowSideBar] = useState(false)

  function toggle() {
    setShowSideBar(!showSideBar)
  }

  useEffect(() => {    
    if (showSideBar) {
      document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [showSideBar])

  return {
    showSideBar,
    toggle
  }

}