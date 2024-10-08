import logo from "../assets/logo.webp"
import ToogleDarkMode from "./ToogleDarkMode"
import Search from "./Search"

export interface NavProps {
    search: string,
    onSearch: (value:number | null | string, name:string) => void
}

function Nav({ search, onSearch }: NavProps) {
    return (
    <div className="col-span-6 px-6 py-8">
        <div className="flex justify-between items-center">
            <div>
                <img src={logo} width="40"/>
            </div>

            <Search search={search} onSearch={onSearch} />

            <div className="flex items-center justify-center">
                <ToogleDarkMode />
            </div>
        </div>
    </div>
  )
}

export default Nav