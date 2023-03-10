import { createRouter, createWebHistory } from "vue-router";
import Home from "./view/home";
import Cart from "./view/Cart/cart";
import CheckOut from "./view/Cart/checkout";
import checkoutSuccess from "./view/Cart/checkoutSuccess";
import Product from "./view/product/productList"
import Login from "./view/AccountUser/login";
import ProductDetail from "./view/product/productDetail"
import Register from "./view/AccountUser/register";
import Profile from "./view/AccountUser/profile";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/product-list",
        name: "Product",
        component: Product,
    },
    {
        path: "/product-detail/:id",
        name: "ProductDetail",
        component: ProductDetail,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/checkout",
        name: "CheckOut",
        component: CheckOut,
    },
    {
        path: "/checkout-success",
        name: "checkoutSuccess",
        component: checkoutSuccess,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Register",
        name: "Register",
        component: Register,
    },
    {
        path: "/Profile",
        name: "Profile",
        component: Profile,
    }
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "NotFound",
    //     component: () =>
    //         import ( /*webpackChunkName: "notFound" */ "./view/notFound"),
    // },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
// router.beforeEach(function(transition) {
//     if (transition.to.path === '/*') {
//         window.location.href = '/404'
//     } else {
//         transition.next()
//     }
// });
export default router;