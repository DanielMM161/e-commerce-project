import { useState } from "react"

export const UseSideBar = () => {

  const [showSideBar, setShowSideBar] = useState(false)

  function toggle() {
    setShowSideBar(!showSideBar)
  }

  return {
    showSideBar,
    toggle
  }

}