import { lazy } from 'react';
// import { DetailProduct, SearchUser } from '../components';
// import Pageroot from './user/pageroot/Pageroot';






export const adminRotes = [
    {
        isExact: true,
        path: "/admin/dashboard",
        Component: lazy(() => import('./admin/Dashboard'))
    },
    {
        isExact: true,
        path: "/admin/product",
        Component: lazy(() => import('./admin/ProductPage'))
    },
    {
        isExact: true,
        path: "/admin/users",
        Component: lazy(() => import('./admin/UserPage'))
    },
    {
        isExact: true,
        path: "/admin/order",
        Component: lazy(() => import('./admin/OrderPage'))
    },
    {
        isExact: true,
        path: "/admin/discount",
        Component: lazy(() => import('./admin/DiscountPage'))
    },
    {
        isExact: true,
        path: "/admin/profile",
        Component: lazy(() => import('./admin/ProfilePage'))
    },
    {
        isExact: true,
        path: "/admin/voucher",
        Component: lazy(() => import('./admin/VoucherPage'))
    },
    {
        isExact: true,
        path: "/:id",
        Component: lazy(() => import('../components/user/DetailProduct'))
    },
]

export const userRoute = [
    {
        isExact: true,
        path: "/",
        Component: lazy(() => import('./user/homepage/Homepage'))
    },
    {
        isExact: true,
        path: "/login",
        Component: lazy(() => import('./user/loginpage/LoginPage'))
    },
    {
        isExact: true,
        path: "/signup",
        Component: lazy(() => import('./user/signuppage/SignUpPage'))
    },
    {
        isExact: true,
        path: "/cart",
        Component: lazy(() => import('./user/cartpage/CartPage'))
    },
    {
        isExact: true,
        path: "/payment",
        Component: lazy(() => import('./user/paymentpage/PaymentPage'))
    },
    {
        isExact: true,
        path: "/profileuser",
        Component: lazy(() => import("./user/profilepage/ProfileUserPage"))
    },
    {
        isExact: true,
        path: "/forgotpass",
        Component: lazy(() => import("./user/forgotpage/ForgotPage"))
    },
]



