import logo from "../assets/logo.webp"

function Nav() {
    return (
    <div className="col-span-6 p-6 bg-">
        <div className="flex justify-between items-center">
            <div>
                <img src={logo} width="40"/>
            </div>

            <div className="w-[50%]">
                <input 
                    className="w-[100%] bg-lightDark py-3 px-4 rounded-3xl focus:outline-none focus:outline-slate-400 focus:ring-0 focus:border-none " type="text"
                    placeholder="Search..." 
                />
            </div>

            <div>
                <input type="checkbox" className="toggle" defaultChecked />
            </div>
        </div>
    </div>
  )
}

export default Nav