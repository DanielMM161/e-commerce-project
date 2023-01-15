import { useState } from "react"

export const useSideBar = () => {

  const [showSideBar, setShowSideBar] = useState(false)

  function toggle() {
    setShowSideBar(!showSideBar)
  }

  return {
    showSideBar,
    toggle
  }
}