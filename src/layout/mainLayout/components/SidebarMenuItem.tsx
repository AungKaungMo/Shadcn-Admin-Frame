import { SideNavItem } from "@/types";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const SidebarMenuItem = ({ item: { icon: Icon, submenu, submenuItems, path, title } }: { item: SideNavItem }) => {

    const { toggleCollapse } = useSidebarToggle();

    const [subMenuOpen, setMenuOpen] = useState(false);
    const linkStyle = 'mt-1 flex hover:bg-sidebar-foreground items-center min-h-[40px] cursor-pointer h-full py-2 hover:text-foreground rounded-md transition duration-300';
    const activeLinkStyle = 'rounded-md bg-sidebar-foreground text-foreground'
    const toggleMenuOpen = () => {
        setMenuOpen(!subMenuOpen);
    }
    const pathname = useLocation().pathname;
    return (
        <>
            {
                submenu ? (
                    <div className={`rounded-md min-w-[10px] ml-2`}>

                        {toggleCollapse ? (

                            <TooltipProvider>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger className="w-full" asChild>
                                        <div onClick={toggleMenuOpen} className={`${linkStyle} ${pathname.includes(path) ? activeLinkStyle : 'text-muted-foreground'} ${toggleCollapse ? 'justify-center' : 'px-4'} w-full`}>
                                            {Icon && <Icon width={20} />}
                                            {
                                                !toggleCollapse && (
                                                    <>
                                                        <span className=" ml-3 text-sm leading-6 ">{title}</span>
                                                        {subMenuOpen}
                                                        <ChevronRight width={20} className={`ml-auto stroke-2  transition duration-300 ${subMenuOpen ? 'rotate-90' : ''}`} />
                                                    </>
                                                )
                                            }
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="ml-3">
                                        {
                                            submenuItems?.map((subItem, index) => {
                                                return (
                                                    <div className={`my-3 ps-3 pr-5 min-w-[8rem]`} key={index}>
                                                        <Link to={subItem.path} className={` text-sm py-2 hover:text-foreground transition duration-200 ${subItem.path === pathname ? 'text-foreground' : 'text-muted-foreground'}`}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                        ) : (
                            <Collapsible>
                                <CollapsibleTrigger className="w-full">
                                    <a onClick={toggleMenuOpen} className={`${linkStyle} ${pathname.includes(path) ? activeLinkStyle : 'text-muted-foreground'} ${toggleCollapse ? 'justify-center' : 'px-4'} w-full`}>
                                        {Icon && <Icon width={20} />}
                                        {
                                            !toggleCollapse && (
                                                <>
                                                    <span className=" ml-3 text-sm leading-6 ">{title}</span>
                                                    <ChevronRight width={20} className={`ml-auto stroke-2  transition duration-300 ${subMenuOpen ? 'rotate-90' : ''}`} />
                                                </>
                                            )
                                        }
                                    </a>

                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <div className="">
                                        <div className=" grid gap-y-2 py-3 px-10 leading-5">
                                            {
                                                submenuItems?.map((subItem, index) => {
                                                    return (
                                                        <div className={`${pathname.includes(subItem.path) ? 'border-l-foreground' : ''} mt-3 border-l-2 `} key={index}>
                                                            <Link to={subItem.path} className={`ml-6 text-sm py-2 hover:text-foreground transition duration-200 ${subItem.path === pathname ? 'text-foreground' : 'text-muted-foreground'}`}>
                                                                <span>{subItem.title}</span>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div >
                                </CollapsibleContent >

                            </Collapsible >
                        )}

                    </div >
                ) : (
                    <Link to={path} className={`${linkStyle} ${path === pathname ? activeLinkStyle : 'text-muted-foreground'} ${toggleCollapse ? 'justify-center' : 'px-4'} ml-2`}>
                        {toggleCollapse ? (
                            <TooltipProvider>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <div>
                                            {Icon && <Icon width={20} />}
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="ml-5">
                                        <p>{title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ) : Icon && (
                            <>
                                <Icon width={20} />
                                <span className=" text-sm ml-3 leading-6 ">
                                    {title}
                                </span>
                            </>
                        )}

                    </Link>
                )}
        </>
    )
}

export default SidebarMenuItem