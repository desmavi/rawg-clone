import Aside from "./Aside"
import { BiMenuAltRight } from "react-icons/bi";

export interface WrapperAsideProps {
  genre: number | null,
  onSelectGenre: (value:number | null | string, name:string) => void
}


function MobileWrapperAside({genre, onSelectGenre}:  WrapperAsideProps) {
  return (
    <div className="drawer drawer-end block md:hidden w-auto">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="text-3xl cursor-pointer"><BiMenuAltRight />
        </label>
    </div>
    <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-8">
        <Aside genre={genre} onSelectGenre={onSelectGenre}/>
        </ul>
    </div>
</div>
  )
}

export default MobileWrapperAside