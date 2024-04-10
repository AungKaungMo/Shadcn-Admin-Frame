import { SideNavItemGroup } from "@/types";
import { LayoutDashboard, PartyPopper, ShoppingBag, User } from "lucide-react";


export const SideNavbar: SideNavItemGroup[] = [
    {
        title: 'Dashboard',
        menuList: [
            {
                title: "Dashboard",
                path: "/",
                icon: LayoutDashboard
            },
            {
                title: "Products",
                path: "/products",
                icon: ShoppingBag,
                submenu: true,
                submenuItems: [
                    { title: 'All', path: '/products/all' },
                    { title: 'New', path: '/products/new' },
                ]
            },
            {
                title: "Orders",
                path: "/orders",
                icon: PartyPopper
            },
        ]
    },
    {
        title: 'User',
        menuList: [
            {
                title: "UserManagement",
                path: "/user-management",
                icon: User,
                submenu: true,
                submenuItems: [
                    { title: 'User', path: '/user-management/user' },
                    { title: 'Role', path: '/user-management/role' },
                ]
            },

        ]
    }
]
