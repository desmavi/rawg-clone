import logo from "../assets/logo.webp"
import ToogleDarkMode from "./ToogleDarkMode"
import Search from "./Search"


function Nav() {
    return (
    <div className="col-span-6 px-6 py-8">
        <div className="flex justify-between items-center">
            <div>
                <img src={logo} width="40" alt="logo" className="cursor-pointer"/>
            </div>

            <Search />

            <div className="flex items-center justify-center">
                <ToogleDarkMode />
            </div>
        </div>
    </div>
  )
}

export default Nav