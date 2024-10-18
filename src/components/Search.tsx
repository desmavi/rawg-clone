import { ChangeEvent } from "react"
import useGameStore from "../store/gameStore"

function Search() {
  const { queryObject, handleQueryObject} = useGameStore()
  
  return (
    <div className="flex-grow px-10">
        <input 
            className="w-[100%] border-[1px] border-solid border-slate-400 bg-lightDark py-3 px-4 rounded-3xl focus:outline-none focus:outline-slate-400 focus:ring-0 focus:border-none dark:border-0 " 
            type="text"
            placeholder="Search..." 
            onChange={(e:ChangeEvent<HTMLInputElement>) => handleQueryObject(e.target.value, "search")}
            value={queryObject.search}
        />
    </div>
  )
}

export default Search