import AuthLayout from "@/layout/authLayout";
import Login from "@/page/Auth/Login";


const AuthRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: '',
            element: <Login />
        },
        {
            path: 'login',
            element: <Login />
        }
    ]
}

export default AuthRoutes;