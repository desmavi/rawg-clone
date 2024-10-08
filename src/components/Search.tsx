import { ChangeEvent } from "react"

export interface SearchProps {
    search: string,
    onSearch: (value:number | null | string, name:string) => void
}

function Search({search, onSearch}:SearchProps) {
  return (
    <div className="flex-grow px-10">
        <input 
            className="w-[100%] border-[1px] border-solid border-slate-400 bg-lightDark py-3 px-4 rounded-3xl focus:outline-none focus:outline-slate-400 focus:ring-0 focus:border-none dark:border-0 " 
            type="text"
            placeholder="Search..." 
            onChange={(e:ChangeEvent<HTMLInputElement>) => onSearch(e.target.value, "search")}
            value={search}
        />
    </div>
  )
}

export default Search