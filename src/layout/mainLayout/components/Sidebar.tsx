import { SideNavbar } from "@/menus"
import SidebarMenuGroup from "./SidebarMenuGroup"
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle"
const Sidebar = () => {
    const { toggleCollapse } = useSidebarToggle()
    return (
        <aside className={`sidebar z-[20] fixed bg-background h-full overflow-auto border-r transition-all duration-300 ease-in-out ${toggleCollapse ? 'w-[5rem]' : 'w-[18rem]'}`}>
            <div className="flex justify-center relative items-center h-[4.1rem] border-b">
                {
                    !toggleCollapse && (
                        <h3 className=" font-bold text-2xl">  Shadcn</h3>
                    )
                }
            </div>

            <nav className=" flex flex-col gap-2 transition-all duration-300">
                <div className="flex flex-col gap-2 px-4 mt-4">
                    {
                        SideNavbar.map((item, index) => {
                            return <SidebarMenuGroup key={index} menuGroup={item}></SidebarMenuGroup>
                        })
                    }
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar