import Aside from "./Aside"
import { BiMenuAltRight } from "react-icons/bi";


function MobileWrapperAside() {
  return (
    <div className="drawer drawer-end block md:hidden w-auto relative z-10">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="text-3xl cursor-pointer"><BiMenuAltRight />
        </label>
    </div>
    <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-8">
        <Aside/>
        </ul>
    </div>
</div>
  )
}

export default MobileWrapperAside