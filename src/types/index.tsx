import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react";

export type SideNavItem = {
    title: string;
    path: string;
    icon?: ForwardRefExoticComponent<LucideProps> | undefined;
    submenu?: boolean;
    submenuItems?: SideNavItem[];
}

export type SideNavItemGroup = {
    title: string;
    menuList: SideNavItem[];
}

export type LoginDataType = {
    email: string;
    password: string;
}