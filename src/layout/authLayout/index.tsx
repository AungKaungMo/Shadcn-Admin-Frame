import { Outlet } from "react-router-dom"
import LoginImage from '@/assets/image/authimg.png';

const AuthLayout = () => {
    return (
        <div className="w-full lg:grid lg:grid-cols-2 h-[100vh]">
            <div className="hidden bg-muted lg:block">
                <img src={LoginImage} className="mt-12" />
            </div>
            <div className="flex items-center justify-center py-12">
                <Outlet />
            </div>

        </div>
    )
}

export default AuthLayout;