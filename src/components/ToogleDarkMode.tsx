import {useEffect, useState} from 'react'
import { updateLocalStorage } from '../utils/localStorage'
import { BiMoon } from 'react-icons/bi'

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
        if (theme === 'dark' || localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    return (
            <label className='flex items-center'>
                <input 
                    aria-label='Toggle dark mode'
                    type="checkbox"
                    className="toggle m-0 p-0 focus:border-2 border-slate-500 focus-within:border-2 focus-within:border-sky-800 me-3" 
                    checked={theme === "dark" ?  true : false}
                    onChange={handleToggle}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if(e.key == "Enter"){
                            handleToggle()
                        }
                    }}
                />
                <BiMoon className='text-xl' />
            </label>
    )
}

export default ToogleDarkMode