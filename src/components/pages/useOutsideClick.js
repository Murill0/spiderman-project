import { useState, useEffect } from "react";

export const useOutisdeClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState)

    useEffect(() => {
        const onClick = e => {
            if(el.curre !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        }

        if(isActive){
            window.addEventListener("click", onClick)
        }

        return () => {
            window.removeEventListener("click", onClick)
        }
    }, [isActive, el])

    return [isActive, setIsActive]
}