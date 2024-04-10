import ThemeSwitcher from "@/components/theme-switcher";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle"
import { AlignJustify } from "lucide-react"

const Header = () => {

    const { toggleCollapse, settingToggleCollapse } = useSidebarToggle();
    const sideBarToggle = () => {
        settingToggleCollapse()
    }

    return (
        <header className={`fixed bg-background z-[10] w-full px-4 border-b flex justify-between items-center transition duration-300 ${toggleCollapse ? 'pl-[5rem]' : 'pl-[18rem]'}`}>
            <div className=" flex items-center justify-between h-16">
                <button onClick={sideBarToggle} className="  hover:bg-foreground hover:text-background ml-4 px-2 py-1 rounded-md h-[30px] transition-all duration-300 ease-in-out">
                    <AlignJustify />
                </button>
            </div>
            <div className=" flex items-center gap-4 me-4">
                <ThemeSwitcher></ThemeSwitcher>

                <DropdownMenu >
                    <DropdownMenuTrigger>

                        <div className=" h-10 w-10 rounded-full bg-muted flex items-center justify-center text-center">
                            <span className="font-semibold">CN</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56' align='end' forceMount>
                        <DropdownMenuLabel className='font-normal'>
                            <div className='flex flex-col space-y-1'>
                                <p className='text-sm font-medium leading-none'>fa</p>
                                <p className='text-xs leading-none text-muted-foreground'>
                                    fa@gmail.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </header>
    )
}

export default Header