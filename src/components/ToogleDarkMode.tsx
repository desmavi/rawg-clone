import {useEffect, useState} from 'react'
import { updateLocalStorage } from '../utils/localStorage'

function ToogleDarkMode() {

    const [theme, setTheme] = useState( localStorage.getItem("theme") || "dark")

    function handleToggle(){
        let newTheme = theme == "dark" ? "light" : "dark"
        updateLocalStorage('theme', newTheme, "theme-event")
    }

    useEffect(() => {
        const handleThemeUpdate = () => {
            setTheme(localStorage.getItem('theme') || 'dark')
        } 
        window.addEventListener("theme-event", handleThemeUpdate)
        return () =>  window.removeEventListener("theme-event", handleThemeUpdate)
    }, [])


    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    return (
            <input 
                type="checkbox"
                className="toggle m-0 p-0'" 
                checked={theme === "dark" ?  true : false}
                onChange={handleToggle}
            />
    )
}

export default ToogleDarkMode