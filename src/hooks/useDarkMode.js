import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
const [toggleDarkMode, setToggleDarkMode] = useLocalStorage()
    console.log(toggleDarkMode)
    useEffect(() => {
            if(toggleDarkMode === true){
                document.body.classList.add("dark-mode")
            }else {
                document.body.classList.remove("dark-mode")
            }
            console.log(toggleDarkMode)
    }, [toggleDarkMode])
    return [toggleDarkMode, setToggleDarkMode]
}