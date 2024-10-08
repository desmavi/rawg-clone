import { ChangeEvent } from "react"
import logo from "../assets/logo.webp"
import ToogleDarkMode from "./ToogleDarkMode"

export interface NavProps {
    search: string | undefined,
    onSearch: (value:number | null | string, name:string) => void
}

function Nav({ search, onSearch }: NavProps) {
    return (
    <div className="col-span-6 px-6 py-8">
        <div className="flex justify-between items-center">
            <div>
                <img src={logo} width="40"/>
            </div>

            <div className="flex-grow px-10">
                <input 
                    className="w-[100%] border-[1px] border-solid border-slate-400 bg-lightDark py-3 px-4 rounded-3xl focus:outline-none focus:outline-slate-400 focus:ring-0 focus:border-none dark:border-0 " 
                    type="text"
                    placeholder="Search..." 
                    onChange={(e:ChangeEvent<HTMLInputElement>) => onSearch(e.target.value, "search")}
                    value={search}
                />
            </div>

            <ToogleDarkMode />
        </div>
    </div>
  )
}

export default Nav