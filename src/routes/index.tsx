import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";
import { useAuthStore } from "@/store/auth-store";
import PageNotFound from "@/page/Error/PageNotFound";

const Routes = () => {
    const { getUser } = useAuthStore();

    return useRoutes([
        getUser() ? MainRoutes : AuthRoutes,
        { path: "*", element: <PageNotFound /> },
    ])
}

export default Routes;