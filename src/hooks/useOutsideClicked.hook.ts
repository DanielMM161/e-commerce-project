import { useEffect, useState } from "react"

const useOutsideClicked = (ref: any) => {
    const [isClicked, setIsClicked] = useState(false)
    
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsClicked(true);
            } else {
                setIsClicked(false);
            }
        }

        // bind event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        // clear event
        return () =>  document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);
    
    return isClicked
}

export default useOutsideClicked