import MainLayout from "@/layout/mainLayout";
import { AllProduct, Dashboard, NewProduct, Order, RoleCreate, RoleEdit, RoleManagement, UserManagement } from "@/page";

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Dashboard />
        },
        {
            path: '/products',
            children: [
                {
                    path: 'all',
                    element: <AllProduct />
                },
                {
                    path: 'new',
                    element: <NewProduct />
                }
            ]
        },
        {
            path: '/orders',
            element: <Order />
        },

        {
            path: '/user-management',
            children: [
                {
                    path: 'role',
                    element: <RoleManagement />
                },
                {
                    path: 'role/create',
                    element: <RoleCreate />
                },
                {
                    path: 'role/edit/:id',
                    element: <RoleEdit />
                },
                {
                    path: 'user',
                    element: <UserManagement />
                }
            ]
        }
    ]
}

export default MainRoutes;