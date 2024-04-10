import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle"

const MainLayout = () => {
    const { toggleCollapse } = useSidebarToggle();
    return (
        <>
            <div className="flex">
                <Sidebar></Sidebar>
                <Header></Header>

                <div className={` flex-grow p-2 mt-20 me-4 ${!toggleCollapse ? 'pl-[19.3rem]' : 'pl-[6.6rem]'}`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout