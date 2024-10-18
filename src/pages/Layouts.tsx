import { Outlet } from "react-router";
import Nav from "../components/Nav";
import QrCodeBtn from "../components/QrCodeBtn";

function Layout() {

    return (
        <div className='bg-white text-dark dark:bg-dark dark:text-white transition-all pb-5'>
            <div className="container mx-auto ">
            <div className="grid grid-rows-[auto_1fr] grid-cols-6 min-h-screen">
                <Nav/>
    
                <Outlet />
            </div>
            </div>
            <QrCodeBtn />
        </div>
    )
}

export default Layout